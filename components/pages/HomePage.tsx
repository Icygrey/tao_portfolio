"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
	getLocaleContent,
	type HomeWorkItem,
	type Locale,
	resumeFile,
} from "@/data/site-content";
import { TaoReactionVote } from "@/components/home/TaoReactionVote";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import styles from "@/components/pages/HomePage.module.css";

const toneClassNames: Record<string, string> = {
	sky: styles.toneSky,
	architecture: styles.toneArchitecture,
	black: styles.toneBlack,
	violet: styles.toneViolet,
};

const indexClassNames: Record<string, string> = {
	"(1)": styles.workCardOne,
	"(2)": styles.workCardTwo,
	"(3)": styles.workCardThree,
	"(4)": styles.workCardFour,
};

function WorkCard({ item }: { item: HomeWorkItem }) {
	return (
		<article
			className={[styles.workCard, indexClassNames[item.index] ?? ""]
				.filter(Boolean)
				.join(" ")}
			data-work-card
			data-cursor-target
			data-cursor-variant="card"
			data-magnetic-strength="0.06"
		>
			<p className={styles.workIndex}>{item.index}</p>
			<div
				className={[styles.workVisual, toneClassNames[item.tone] ?? ""].join(
					" ",
				)}
				style={{ aspectRatio: item.aspectRatio }}
			>
				<div className={styles.workGlow} />
				{item.tone === "sky" ? (
					<div className={styles.skyHat}>
						<div className={styles.skyCopy}>
							No rules.
							<br />
							Just motion.
						</div>
					</div>
				) : null}
				{item.tone === "black" ? (
					<>
						<div className={styles.blackCardOne} />
						<div className={styles.blackCardTwo} />
					</>
				) : null}
				{item.tone === "architecture" ? (
					<>
						<div className={styles.archBase} />
						<div className={styles.archFrame} />
						<div className={styles.archOverlay} />
					</>
				) : null}
				{item.tone === "violet" ? <div className={styles.violetHaze} /> : null}
			</div>
			<p className={styles.workCaption}>{item.title}</p>
		</article>
	);
}

function ComingSoonNavItem({ label }: { label: string }) {
	const [isOpen, setIsOpen] = useState(false);
	const closeTimerRef = useRef<number | null>(null);

	useEffect(() => {
		return () => {
			if (closeTimerRef.current !== null) {
				window.clearTimeout(closeTimerRef.current);
			}
		};
	}, []);

	const handleClick = () => {
		if (closeTimerRef.current !== null) {
			window.clearTimeout(closeTimerRef.current);
		}

		setIsOpen(true);
		closeTimerRef.current = window.setTimeout(() => {
			setIsOpen(false);
			closeTimerRef.current = null;
		}, 1200);
	};

	return (
		<Tooltip open={isOpen} onOpenChange={setIsOpen}>
			<TooltipTrigger asChild>
				<button
					type="button"
					className={styles.heroNavGhostButton}
					data-hero-nav-item
					data-cursor-target
					data-cursor-variant="nav"
					data-magnetic-strength="0.11"
					aria-label={`${label}. Still coding...`}
					onClick={handleClick}
				>
					{label}
				</button>
			</TooltipTrigger>
			<TooltipContent side="bottom">Still coding...</TooltipContent>
		</Tooltip>
	);
}

export function HomePage({ locale }: { locale: Locale }) {
	const content = getLocaleContent(locale);
	const rootRef = useRef<HTMLElement | null>(null);
	const heroSectionRef = useRef<HTMLElement | null>(null);
	const gallerySectionRef = useRef<HTMLElement | null>(null);
	const statementSectionRef = useRef<HTMLElement | null>(null);
	const footerSectionRef = useRef<HTMLElement | null>(null);
	const eyebrowRef = useRef<HTMLParagraphElement | null>(null);
	const heroNavRef = useRef<HTMLDivElement | null>(null);
	const marqueeWrapRef = useRef<HTMLDivElement | null>(null);
	const badgeRef = useRef<HTMLSpanElement | null>(null);
	const taoRef = useRef<HTMLSpanElement | null>(null);
	const huangRef = useRef<HTMLSpanElement | null>(null);
	const introRef = useRef<HTMLParagraphElement | null>(null);
	const reactionWidgetRef = useRef<HTMLDivElement | null>(null);
	const statementRef = useRef<HTMLParagraphElement | null>(null);
	const resumeLinkRef = useRef<HTMLAnchorElement | null>(null);
	const footerMarqueeRef = useRef<HTMLDivElement | null>(null);
	const footerConnectRef = useRef<HTMLParagraphElement | null>(null);
	const cursorDotRef = useRef<HTMLSpanElement | null>(null);
	const cursorRingRef = useRef<HTMLSpanElement | null>(null);
	const [taoWord = "TAO", huangWord = "HUANG"] =
		content.home.marquee.split(/\s+/);

	useLayoutEffect(() => {
		let mounted = true;
		let cleanup: (() => void) | undefined;

		void (async () => {
			const [
				{ gsap },
				{ ScrollTrigger },
				{ ScrambleTextPlugin },
				{ SplitText },
			] = await Promise.all([
				import("gsap"),
				import("gsap/ScrollTrigger"),
				import("gsap/ScrambleTextPlugin"),
				import("gsap/SplitText"),
			]);

			if (!mounted || !rootRef.current) return;

			gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin, SplitText);

			const mm = gsap.matchMedia();
			mm.add("(prefers-reduced-motion: no-preference)", () => {
				if (
					!rootRef.current ||
					!heroSectionRef.current ||
					!gallerySectionRef.current ||
					!statementSectionRef.current ||
					!footerSectionRef.current ||
					!taoRef.current ||
					!huangRef.current
				) {
					return undefined;
				}

				const splits: Array<{ revert: () => void }> = [];
				const ctx = gsap.context(() => {
					const workCards = gsap.utils.toArray<HTMLElement>(
						"[data-work-card]",
						rootRef.current,
					);
					const serviceCards = gsap.utils.toArray<HTMLElement>(
						"[data-service-card]",
						rootRef.current,
					);
					const heroNavItems = gsap.utils.toArray<HTMLElement>(
						"[data-hero-nav-item]",
						rootRef.current,
					);

					const taoSplit = SplitText.create(taoRef.current, { type: "chars" });
					splits.push(taoSplit);

					const statementSplit = statementRef.current
						? SplitText.create(statementRef.current, { type: "lines" })
						: null;
					if (statementSplit) {
						splits.push(statementSplit);
					}

					const playHuangCycle = () => {
						const huangCycle = gsap.timeline();
						huangCycle.to(huangRef.current, {
							duration: 1.28,
							scrambleText: {
								text: huangWord,
								chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%*",
								speed: 0.85,
								revealDelay: 0.08,
								tweenLength: false,
							},
						});

						return huangCycle;
					};

					gsap.set([eyebrowRef.current, introRef.current], {
						y: 18,
						opacity: 0,
					});
					gsap.set(heroNavItems, { y: 18, opacity: 0 });
					gsap.set(reactionWidgetRef.current, {
						y: 24,
						opacity: 0,
						scale: 0.94,
						transformOrigin: "50% 100%",
					});
					gsap.set(workCards, {
						y: 64,
						opacity: 0.22,
						yPercent: 8,
						rotateZ: (index: number) => (index % 2 === 0 ? -1.4 : 1.4),
					});
					gsap.set(serviceCards, { y: 48, opacity: 0 });
					gsap.set(resumeLinkRef.current, { y: 24, opacity: 0 });
					gsap.set(footerConnectRef.current, { y: 20, opacity: 0.4 });
					gsap.set(footerMarqueeRef.current, {
						yPercent: 18,
						opacity: 0.55,
						scale: 0.96,
					});
					gsap.set(marqueeWrapRef.current, { transformPerspective: 1200 });
					if (statementSplit) {
						gsap.set(statementSplit.lines, { yPercent: 110, opacity: 0 });
					}

					const heroTimeline = gsap.timeline({
						defaults: { ease: "expo.out" },
					});
					heroTimeline
						.from(
							badgeRef.current,
							{ xPercent: -38, opacity: 0, duration: 0.9 },
							0,
						)
						.from(
							taoSplit.chars,
							{
								yPercent: 112,
								rotateX: -92,
								opacity: 0,
								transformOrigin: "50% 100% -120",
								duration: 1.12,
								stagger: 0.05,
							},
							0.06,
						)
						.add(playHuangCycle(), 0.18)
						.to(
							[eyebrowRef.current, introRef.current],
							{ y: 0, opacity: 1, duration: 0.92, stagger: 0.08 },
							0.28,
						)
						.to(
							heroNavItems,
							{ y: 0, opacity: 1, duration: 0.7, stagger: 0.06 },
							0.34,
						)
						.to(
							reactionWidgetRef.current,
							{
								keyframes: [
									{ y: 24, opacity: 0, scale: 0.94, duration: 0 },
									{
										y: 0,
										opacity: 1,
										scale: 1,
										duration: 0.62,
										ease: "power3.out",
									},
									{ y: -3, duration: 0.16, ease: "power1.inOut" },
									{ y: 0, duration: 0.16, ease: "power1.out" },
								],
							},
							0.76,
						)
						.call(
							() => {
								gsap
									.timeline({ repeat: -1, repeatDelay: 3 })
									.add(playHuangCycle());
							},
							[],
							">-0.1",
						);

					gsap
						.timeline({
							scrollTrigger: {
								trigger: heroSectionRef.current,
								start: "top top",
								end: "bottom top",
								scrub: 1.15,
								invalidateOnRefresh: true,
							},
						})
						.to(
							marqueeWrapRef.current,
							{
								yPercent: 12,
								scale: 0.93,
								transformOrigin: "50% 50%",
								ease: "none",
							},
							0,
						)
						.to(introRef.current, { y: 54, opacity: 0.22, ease: "none" }, 0)
						.to(
							reactionWidgetRef.current,
							{ y: -24, opacity: 0.5, ease: "none" },
							0,
						)
						.to(
							[eyebrowRef.current, heroNavRef.current],
							{ y: -12, opacity: 0.42, ease: "none" },
							0,
						);

					workCards.forEach((card, index) => {
						const targetY = [-36, 62, -72, 48][index] ?? 42;
						const targetRotate = index % 2 === 0 ? 0.6 : -0.6;

						gsap.to(card, {
							opacity: 1,
							yPercent: 0,
							ease: "none",
							scrollTrigger: {
								trigger: card,
								start: "top 92%",
								end: "top 68%",
								scrub: true,
								invalidateOnRefresh: true,
							},
						});

						gsap.to(card, {
							y: targetY,
							rotateZ: targetRotate,
							ease: "none",
							scrollTrigger: {
								trigger: gallerySectionRef.current,
								start: "top bottom",
								end: "bottom top",
								scrub: 1.2,
								invalidateOnRefresh: true,
							},
						});
					});

					if (statementSplit) {
						gsap.to(statementSplit.lines, {
							yPercent: 0,
							opacity: 1,
							duration: 1.05,
							stagger: 0.1,
							ease: "expo.out",
							scrollTrigger: {
								trigger: statementSectionRef.current,
								start: "top 74%",
							},
						});
					}

					gsap.to([resumeLinkRef.current, ...serviceCards], {
						y: 0,
						opacity: 1,
						duration: 1.02,
						stagger: 0.12,
						ease: "expo.out",
						scrollTrigger: {
							trigger: statementSectionRef.current,
							start: "top 62%",
						},
					});

					gsap
						.timeline({
							scrollTrigger: {
								trigger: footerSectionRef.current,
								start: "top bottom",
								end: "bottom bottom",
								scrub: 1.1,
								invalidateOnRefresh: true,
							},
						})
						.to(
							footerMarqueeRef.current,
							{ yPercent: 0, opacity: 1, scale: 1, ease: "none" },
							0,
						)
						.to(
							footerConnectRef.current,
							{ y: 0, opacity: 1, ease: "none" },
							0.18,
						);

					ScrollTrigger.refresh();
				}, rootRef);

				return () => {
					splits.forEach((split) => split.revert());
					ctx.revert();
				};
			});

			cleanup = () => mm.revert();
		})();

		return () => {
			mounted = false;
			cleanup?.();
		};
	}, [huangWord]);

	useLayoutEffect(() => {
		let mounted = true;
		let cleanup: (() => void) | undefined;

		void (async () => {
			const { gsap } = await import("gsap");

			if (
				!mounted ||
				!rootRef.current ||
				!cursorDotRef.current ||
				!cursorRingRef.current
			) {
				return;
			}

			const finePointerQuery = window.matchMedia(
				"(hover: hover) and (pointer: fine)",
			);
			const reducedMotionQuery = window.matchMedia(
				"(prefers-reduced-motion: reduce)",
			);

			if (!finePointerQuery.matches || reducedMotionQuery.matches) {
				return;
			}

			const dot = cursorDotRef.current;
			const ring = cursorRingRef.current;
			const magneticTargets = gsap.utils.toArray<HTMLElement>(
				"[data-cursor-target]",
				rootRef.current,
			);
			const pointer = {
				x: window.innerWidth * 0.5,
				y: window.innerHeight * 0.5,
			};
			const pull = { x: 0, y: 0 };

			document.body.classList.add("custom-cursor-active");

			const ctx = gsap.context(() => {
				const magneticCleanups: Array<() => void> = [];
				let frameId = 0;
				let activeMagneticTarget: HTMLElement | null = null;
				const dotPosition = { x: pointer.x, y: pointer.y };
				const ringPosition = { x: pointer.x, y: pointer.y };

				gsap.set([dot, ring], {
					opacity: 0,
					force3D: true,
				});

				const renderCursor = () => {
					const targetX = pointer.x + pull.x * 0.24;
					const targetY = pointer.y + pull.y * 0.24;

					dotPosition.x += (targetX - dotPosition.x) * 0.46;
					dotPosition.y += (targetY - dotPosition.y) * 0.46;
					ringPosition.x += (targetX - ringPosition.x) * 0.2;
					ringPosition.y += (targetY - ringPosition.y) * 0.2;

					dot.style.transform = `translate3d(${dotPosition.x}px, ${dotPosition.y}px, 0) translate(-50%, -50%) scale(var(--cursor-scale))`;
					ring.style.transform = `translate3d(${ringPosition.x}px, ${ringPosition.y}px, 0) translate(-50%, -50%) scale(var(--cursor-scale))`;

					frameId = window.requestAnimationFrame(renderCursor);
				};

				const setCursorVariant = (variant: string | null) => {
					const ringScale = variant === "headline" ? 1.62 : 1.14;
					const dotScale = variant === "headline" ? 0.88 : 1;
					const ringOpacity = variant === "headline" ? 0.96 : 0.82;

					gsap.to(ring, {
						"--cursor-scale": ringScale,
						opacity: ringOpacity,
						duration: 0.28,
						ease: "power3.out",
						overwrite: true,
					});
					gsap.to(dot, {
						"--cursor-scale": dotScale,
						duration: 0.24,
						ease: "power3.out",
						overwrite: true,
					});
				};

				const resetTargetTransform = (target: HTMLElement | null) => {
					if (!target) return;

					gsap.to(target, {
						x: 0,
						y: 0,
						duration: 0.36,
						ease: "power3.out",
						overwrite: true,
					});
				};

				const syncHoveredTarget = () => {
					const nextTarget = document
						.elementFromPoint(pointer.x, pointer.y)
						?.closest?.("[data-cursor-target]") as HTMLElement | null;

					if (nextTarget === activeMagneticTarget) {
						return;
					}

					resetTargetTransform(activeMagneticTarget);
					activeMagneticTarget = nextTarget;
					setCursorVariant(
						nextTarget ? nextTarget.dataset.cursorVariant ?? "default" : null,
					);

					if (!nextTarget) {
						gsap.to(pull, {
							x: 0,
							y: 0,
							duration: 0.28,
							ease: "power3.out",
							overwrite: true,
						});
					}
				};

				const showCursor = () => {
					gsap.to([dot, ring], {
						opacity: 1,
						duration: 0.18,
						ease: "power2.out",
						overwrite: true,
					});
				};

				const hideCursor = () => {
					gsap.to([dot, ring], {
						opacity: 0,
						duration: 0.2,
						ease: "power2.out",
						overwrite: true,
					});
				};

				const handlePointerMove = (
					event: PointerEvent | MouseEvent,
				) => {
					pointer.x = event.clientX;
					pointer.y = event.clientY;
					syncHoveredTarget();
					showCursor();
				};

				const handlePointerLeave = () => {
					resetTargetTransform(activeMagneticTarget);
					activeMagneticTarget = null;
					gsap.to(pull, {
						x: 0,
						y: 0,
						duration: 0.28,
						ease: "power3.out",
						overwrite: true,
					});
					setCursorVariant(null);
					hideCursor();
				};

				const handleViewportShift = () => {
					syncHoveredTarget();
				};

				window.addEventListener("pointermove", handlePointerMove, {
					passive: true,
				});
				window.addEventListener("mousemove", handlePointerMove, {
					passive: true,
				});
				window.addEventListener("pointerleave", handlePointerLeave);
				window.addEventListener("mouseleave", handlePointerLeave);
				window.addEventListener("blur", handlePointerLeave);
				window.addEventListener("scroll", handleViewportShift, {
					passive: true,
				});
				window.addEventListener("wheel", handleViewportShift, {
					passive: true,
				});

				magneticTargets.forEach((target) => {
					const variant = target.dataset.cursorVariant ?? "default";
					const strength = Number(target.dataset.magneticStrength ?? "0.08");
					const maxShift = variant === "headline" ? 30 : 14;

					const handleEnter = () => {
						activeMagneticTarget = target;
						setCursorVariant(variant);
					};

					const handleMove = (event: PointerEvent) => {
						if (activeMagneticTarget !== target) {
							activeMagneticTarget = target;
							setCursorVariant(variant);
						}

						const rect = target.getBoundingClientRect();
						const relX = (event.clientX - rect.left) / rect.width - 0.5;
						const relY = (event.clientY - rect.top) / rect.height - 0.5;
						const offsetX = gsap.utils.clamp(
							-maxShift,
							maxShift,
							relX * rect.width * strength,
						);
						const offsetY = gsap.utils.clamp(
							-maxShift,
							maxShift,
							relY * rect.height * strength,
						);
						const cursorPull = variant === "headline" ? 1.45 : 0.9;

						gsap.to(target, {
							x: offsetX,
							y: offsetY,
							duration: 0.3,
							ease: "power3.out",
							overwrite: true,
						});
						gsap.to(pull, {
							x: offsetX * cursorPull,
							y: offsetY * cursorPull,
							duration: 0.22,
							ease: "power3.out",
							overwrite: true,
						});
					};

					const handleLeave = () => {
						if (activeMagneticTarget === target) {
							activeMagneticTarget = null;
						}
						gsap.to(target, {
							x: 0,
							y: 0,
							duration: 0.42,
							ease: "power3.out",
							overwrite: true,
						});
						gsap.to(pull, {
							x: 0,
							y: 0,
							duration: 0.28,
							ease: "power3.out",
							overwrite: true,
						});
						setCursorVariant(null);
					};

					target.addEventListener("pointerenter", handleEnter);
					target.addEventListener("pointermove", handleMove);
					target.addEventListener("pointerleave", handleLeave);
					magneticCleanups.push(() => {
						target.removeEventListener("pointerenter", handleEnter);
						target.removeEventListener("pointermove", handleMove);
						target.removeEventListener("pointerleave", handleLeave);
					});
				});

				frameId = window.requestAnimationFrame(renderCursor);

				return () => {
					window.cancelAnimationFrame(frameId);
					window.removeEventListener("pointermove", handlePointerMove);
					window.removeEventListener("mousemove", handlePointerMove);
					window.removeEventListener("pointerleave", handlePointerLeave);
					window.removeEventListener("mouseleave", handlePointerLeave);
					window.removeEventListener("blur", handlePointerLeave);
					window.removeEventListener("scroll", handleViewportShift);
					window.removeEventListener("wheel", handleViewportShift);
					magneticCleanups.forEach((dispose) => dispose());
				};
			}, rootRef);

			cleanup = () => {
				document.body.classList.remove("custom-cursor-active");
				ctx.revert();
			};
		})();

		return () => {
			mounted = false;
			cleanup?.();
		};
	}, []);

	return (
		<main ref={rootRef} className={styles.main}>
			<div className={styles.cursorShell} aria-hidden="true">
				<span ref={cursorRingRef} className={styles.cursorRing} />
				<span ref={cursorDotRef} className={styles.cursorDot} />
			</div>

			<section ref={heroSectionRef} className={styles.heroSection}>
				<div className={styles.heroTop}>
					<p ref={eyebrowRef} className={styles.heroEyebrow}>
						{content.home.eyebrow}
					</p>
					<div ref={heroNavRef} className={styles.heroNav}>
						<p className={styles.heroNavPrompt} data-hero-nav-item>
							LET&apos;S GET CREATIVE.
						</p>
						<TooltipProvider delayDuration={120}>
							<div className={styles.heroNavLinks}>
								<ComingSoonNavItem label="ABOUT" />
								<ComingSoonNavItem label="CONTACT" />
								<ComingSoonNavItem label="BRAND" />
								<ComingSoonNavItem label={content.home.footerLegal} />
							</div>
						</TooltipProvider>
					</div>
				</div>

				<div
					ref={marqueeWrapRef}
					className={styles.marqueeWrap}
					data-cursor-target
					data-cursor-variant="headline"
					data-magnetic-strength="0.11"
				>
					<div
						className={styles.marquee}
						aria-label={`${content.home.badge}${content.home.marquee}`}
					>
						<span ref={badgeRef} className={styles.marqueeBadge}>
							{content.home.badge}
						</span>
						<span ref={taoRef} className={styles.marqueeWord}>
							{taoWord}
						</span>
						<span
							ref={huangRef}
							className={[styles.marqueeWord, styles.marqueeWordAccent].join(
								" ",
							)}
						>
							{huangWord}
						</span>
					</div>
				</div>

				<div className={styles.heroBottom}>
					<p ref={introRef} className={styles.heroIntro}>
						{content.home.intro}
					</p>
					<div aria-hidden="true" />
					<div ref={reactionWidgetRef}>
						<TaoReactionVote
							heading={content.home.reaction.heading}
							liveLabel={content.home.reaction.liveLabel}
							positiveLabel={content.home.reaction.positiveLabel}
							negativeLabel={content.home.reaction.negativeLabel}
						/>
					</div>
				</div>
			</section>

			<section ref={gallerySectionRef} className={styles.gallerySection}>
				<div className={styles.galleryInner}>
					<div className={styles.galleryRowCenter}>
						<WorkCard item={content.home.works[0]} />
					</div>
					<div className={styles.galleryRowSpread}>
						<WorkCard item={content.home.works[2]} />
						<WorkCard item={content.home.works[1]} />
					</div>
					<div className={styles.galleryRowOffset}>
						<WorkCard item={content.home.works[3]} />
					</div>
				</div>
			</section>

			<section ref={statementSectionRef} className={styles.statementSection}>
				<div className={styles.statementInner}>
					<div className={styles.statementWrap}>
						<p ref={statementRef} className={styles.statement}>
							{content.home.statement}{" "}
							<span className={styles.statementMuted}>
								{content.home.statementMuted}
							</span>
						</p>
						<a
							ref={resumeLinkRef}
							className={styles.resumeLink}
							href={resumeFile}
							download
							data-cursor-target
							data-cursor-variant="link"
							data-magnetic-strength="0.1"
						>
							{content.home.resumeLinkLabel}
						</a>
					</div>

					<div className={styles.services}>
						{content.home.services.map((service) => (
							<article
								key={service.title}
								className={styles.serviceCard}
								data-service-card
							>
								<h3 className={styles.serviceTitle}>{service.title}</h3>
								<p className={styles.serviceBody}>{service.body}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section ref={footerSectionRef} className={styles.footerSection}>
				<div className={styles.footerInner}>
					<div className={styles.heroTop}>
						<a
							className={styles.footerMail}
							href="mailto:thuang0209@outlook.com"
							data-cursor-target
							data-cursor-variant="link"
							data-magnetic-strength="0.1"
						>
							{content.home.footerMailLabel}
						</a>
						<div aria-hidden="true" />
					</div>

					<div className={styles.footerBottom}>
						<div aria-hidden="true" />
						<p ref={footerConnectRef} className={styles.footerSocial}>
							<a
								className={styles.footerSocialLink}
								href="https://www.linkedin.com/in/tao-huang-usc/"
								target="_blank"
								rel="noreferrer"
								data-cursor-target
								data-cursor-variant="link"
								data-magnetic-strength="0.1"
							>
								{content.home.footerSocialLabel.split("LINKEDIN")[0]}LINKEDIN
							</a>
							{content.home.footerSocialLabel.includes("WHATSAPP") ? (
								<span className={styles.footerSecondaryContact}>
									{", OR ADD ME ON "}
									<span
										className={[
											styles.footerSocialLink,
											styles.footerHoverTrigger,
										].join(" ")}
										tabIndex={0}
										data-cursor-target
										data-cursor-variant="link"
										data-magnetic-strength="0.1"
									>
										WECHAT
										<span className={styles.footerHoverPreview}>
											<Image
												className={styles.footerHoverImage}
												src="/wechat-qr.jpg"
												alt="WeChat QR code"
												width={1224}
												height={1224}
												sizes="(max-width: 768px) 180px, 280px"
											/>
										</span>
									</span>
								</span>
							) : null}
						</p>
					</div>
				</div>

				<div ref={footerMarqueeRef} className={styles.footerMarquee}>
					{content.home.marquee}
				</div>
			</section>
		</main>
	);
}
