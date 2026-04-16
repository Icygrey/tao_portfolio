"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Heart, HeartOff } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
	getSupabaseBrowserClient,
	hasSupabaseConfig,
} from "@/lib/supabase/client";
import type {
	Database,
	ReactionTarget,
	TaoReactionRow,
} from "@/lib/supabase/types";
import styles from "@/components/home/TaoReactionVote.module.css";

type TaoReactionVoteProps = {
	heading: string;
	liveLabel: string;
	positiveLabel: string;
	negativeLabel: string;
};

type Counts = {
	heart: number;
	heartOff: number;
};

type FlashState = {
	heart: boolean;
	heartOff: boolean;
};

const INITIAL_COUNTS: Counts = {
	heart: 0,
	heartOff: 0,
};

function toCounts(
	row: Pick<TaoReactionRow, "heart_count" | "heart_off_count">,
): Counts {
	return {
		heart: row.heart_count,
		heartOff: row.heart_off_count,
	};
}

function formatCount(value: number) {
	if (value > 0) {
		return `+${value}`;
	}

	return `${value}`;
}

export function TaoReactionVote({
	heading,
	liveLabel,
	positiveLabel,
	negativeLabel,
}: TaoReactionVoteProps) {
	const [counts, setCounts] = useState<Counts>(INITIAL_COUNTS);
	const [flashState, setFlashState] = useState<FlashState>({
		heart: false,
		heartOff: false,
	});
	const [activeTarget, setActiveTarget] = useState<ReactionTarget | null>(null);
	const [isReady, setIsReady] = useState(false);
	const [isConfigured, setIsConfigured] = useState(false);
	const flashTimeoutsRef = useRef<
		Record<keyof FlashState, ReturnType<typeof setTimeout> | null>
	>({
		heart: null,
		heartOff: null,
	});
	const supabase = useMemo(() => {
		if (!hasSupabaseConfig()) {
			return null;
		}

		try {
			return getSupabaseBrowserClient();
		} catch {
			return null;
		}
	}, []);

	const triggerFlash = useCallback((target: keyof FlashState) => {
		const existingTimeout = flashTimeoutsRef.current[target];
		if (existingTimeout) {
			clearTimeout(existingTimeout);
		}

		setFlashState((current) => ({ ...current, [target]: true }));

		flashTimeoutsRef.current[target] = setTimeout(() => {
			setFlashState((current) => ({ ...current, [target]: false }));
			flashTimeoutsRef.current[target] = null;
		}, 760);
	}, []);

	const applyRow = useCallback(
		(
			row: Pick<TaoReactionRow, "heart_count" | "heart_off_count">,
			shouldFlash = true,
		) => {
			const nextCounts = toCounts(row);

			setCounts((current) => {
				if (shouldFlash && nextCounts.heart !== current.heart) {
					triggerFlash("heart");
				}

				if (shouldFlash && nextCounts.heartOff !== current.heartOff) {
					triggerFlash("heartOff");
				}

				return nextCounts;
			});
		},
		[triggerFlash],
	);

	useEffect(() => {
		setIsConfigured(Boolean(supabase));

		if (!supabase) {
			return undefined;
		}

		let isMounted = true;

		const bootstrap = async () => {
			const { data, error } = await supabase
				.from("tao_reactions")
				.select("heart_count, heart_off_count")
				.eq("id", 1)
				.maybeSingle();

			if (!isMounted) {
				return;
			}

			if (error) {
				console.error("Failed to read Tao reactions from Supabase.", error);
				setIsReady(false);
				return;
			}

			if (data) {
				applyRow(data, false);
			}

			setIsReady(true);
		};

		void bootstrap();

		const channel = supabase
			.channel("tao-reactions-live")
			.on<Database["public"]["Tables"]["tao_reactions"]["Row"]>(
				"postgres_changes",
				{
					event: "UPDATE",
					schema: "public",
					table: "tao_reactions",
					filter: "id=eq.1",
				},
				(payload) => {
					applyRow(payload.new, true);
					setIsReady(true);
				},
			)
			.subscribe();

		const flashTimeouts = flashTimeoutsRef.current;

		return () => {
			isMounted = false;
			void supabase.removeChannel(channel);

			Object.values(flashTimeouts).forEach((timeout) => {
				if (timeout) {
					clearTimeout(timeout);
				}
			});
		};
	}, [applyRow, supabase]);

	const handleVote = useCallback(
		async (target: ReactionTarget) => {
			if (!supabase) {
				return;
			}

			const { data, error } = (await (supabase as any).rpc(
				"bump_tao_reaction",
				{
					target,
				},
			)) as {
				data: TaoReactionRow | null;
				error: Error | null;
			};

			if (error) {
				console.error("Failed to update Tao reaction count.", error);
				return;
			}

			if (data) {
				applyRow(data, true);
			}
		},
		[applyRow, supabase],
	);

	const isInteractive = isConfigured && isReady;

	return (
		<div className={styles.root} data-reaction-widget>
			<p className={styles.label}>{heading}</p>
			<p className={styles.subLabel}>{liveLabel}</p>

			<div className={styles.row}>
				<button
					type="button"
					className={[
						styles.button,
						styles.positiveButton,
						!isInteractive ? styles.buttonDisabled : "",
					]
						.filter(Boolean)
						.join(" ")}
					aria-label={positiveLabel}
					disabled={!isInteractive}
					data-reaction-button
					data-pressed={activeTarget === "heart" ? "true" : "false"}
					onClick={() => void handleVote("heart")}
					onPointerDown={() => setActiveTarget("heart")}
					onPointerUp={() => setActiveTarget(null)}
					onPointerLeave={() => setActiveTarget(null)}
					onBlur={() => setActiveTarget(null)}
					onKeyDown={() => setActiveTarget("heart")}
					onKeyUp={() => setActiveTarget(null)}
				>
					<Heart className={styles.icon} strokeWidth={1.9} />
					<Badge
						variant="secondary"
						className={[
							styles.badge,
							styles.badgePositive,
							flashState.heart ? styles.badgeFlash : "",
						]
							.filter(Boolean)
							.join(" ")}
					>
						{formatCount(counts.heart)}
					</Badge>
				</button>

				<button
					type="button"
					className={[
						styles.button,
						styles.negativeButton,
						!isInteractive ? styles.buttonDisabled : "",
					]
						.filter(Boolean)
						.join(" ")}
					aria-label={negativeLabel}
					disabled={!isInteractive}
					data-reaction-button
					data-pressed={activeTarget === "heart_off" ? "true" : "false"}
					onClick={() => void handleVote("heart_off")}
					onPointerDown={() => setActiveTarget("heart_off")}
					onPointerUp={() => setActiveTarget(null)}
					onPointerLeave={() => setActiveTarget(null)}
					onBlur={() => setActiveTarget(null)}
					onKeyDown={() => setActiveTarget("heart_off")}
					onKeyUp={() => setActiveTarget(null)}
				>
					<HeartOff className={styles.icon} strokeWidth={1.9} />
					<Badge
						variant="secondary"
						className={[
							styles.badge,
							styles.badgeNegative,
							flashState.heartOff ? styles.badgeFlash : "",
						]
							.filter(Boolean)
							.join(" ")}
					>
						{formatCount(counts.heartOff)}
					</Badge>
				</button>
			</div>
		</div>
	);
}
