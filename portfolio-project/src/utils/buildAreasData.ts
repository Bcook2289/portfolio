import { BuildArea } from "../types/EvidenceItem";

export const buildAreas: BuildArea[] = [
    {
        number: "01",
        title: "webApplications",
        description: "webApplicationsDescription",
        details: "webApplicationsDetails",
        evidence: [
            { label: "cms", href: "/projects/cms" },
            { label: "myVirtualFridge", href: "/projects/my-virtual-fridge" },
        ]
    },
    {
        number: "02",
        title: "crossPlatform",
        description: "crossPlatformDescription",
        details: "crossPlatformDetails",
        evidence: [
            { label: "calmAnchor", href: "/projects/calm-anchor" },
            { label: "myVirtualFridge", href: "/projects/my-virtual-fridge" }
        ]
    },
    {
        number: "03",
        title: "systemsAndArchitecture",
        description: "systemsAndArchitectureDescription",
        details: "systemsAndArchitectureDetails",
        evidence: [
            { label: "calmAnchor", href: "/projects/calm-anchor" },
            { label: "myVirtualFridge", href: "/projects/my-virtual-fridge" }
        ]
    },
    {
        number: "04",
        title: "technicalDelivery",
        description: "technicalDeliveryDescription",
        details: "technicalDeliveryDetails",
        evidence: [
            { label: "enterpriseSaaS" },
            { label: "technicalProjectDelivery" },
            { label: "softwareDevelopment" },
        ],
    },
];