export type EvidenceItem = {
    label: string;
    href?: string;
}

export type BuildArea = {
    number: string;
    title: string;
    description: string;
    details: string;
    evidence: EvidenceItem[];
}