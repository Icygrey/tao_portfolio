export type TaoReactionRow = {
  id: number;
  heart_count: number;
  heart_off_count: number;
  updated_at: string;
};

export type ReactionTarget = "heart" | "heart_off";

export type Database = {
  public: {
    Tables: {
      tao_reactions: {
        Row: TaoReactionRow;
        Insert: Partial<TaoReactionRow> & { id?: number };
        Update: Partial<TaoReactionRow>;
      };
    };
    Views: Record<string, never>;
    Functions: {
      bump_tao_reaction: {
        Args: {
          target: ReactionTarget;
        };
        Returns: TaoReactionRow;
      };
    };
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
