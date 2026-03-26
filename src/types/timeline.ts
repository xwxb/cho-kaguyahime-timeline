export interface TimelineEvent {
  time: string;
  title?: string;
  text: string;
  images?: string[] | null;
}

export interface TimelineEra {
  era: string;
  events: TimelineEvent[];
}
