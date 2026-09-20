export type TimelineItem = {
    year: string;
    company: string;
    role: string;
    details: string[];
};

export type TimelineProps = {
    items: TimelineItem[];
}