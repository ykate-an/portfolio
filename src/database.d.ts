export const Works: ({
    name: string;
    position: string;
    period: string;
    description: string;
    link: string;
    tech: string[];
    projects: ({
        title: string;
        period: string;
        description: string;
        role: string;
        features: string;
        outcome: string;
        tech: string;
        link: string;
        details: string[];
    } | {
        title: string;
        period: string;
        description: string;
        role: string;
        features: string;
        outcome: string;
        tech: string;
        details: string[];
        link?: undefined;
    } | {
        title: string;
        period: string;
        description: string;
        role: string;
        features: string;
        tech: string;
        outcome?: undefined;
        link?: undefined;
        details?: undefined;
    })[];
} | {
    name: string;
    position: string;
    period: string;
    description: string;
    link: string;
    tech: string[];
    projects: ({
        title: string;
        period: string;
        description: string;
        role: string;
        features: string;
        tech: string;
        details: string[];
        appendix: string[];
    } | {
        title: string;
        period: string;
        description: string;
        role: string;
        features: string;
        tech: string;
        details: string[];
        appendix?: undefined;
    })[];
})[];
export const Projects: ({
    title: string;
    where: string;
    period: string;
    description: string;
    role: string;
    outcome: string;
    link: string;
    details: string[];
    appendix: string[];
} | {
    title: string;
    where: string;
    period: string;
    description: string;
    role: string;
    outcome: string;
    details: string[];
    appendix: string[];
    link?: undefined;
} | {
    title: string;
    where: string;
    period: string;
    description: string;
    role: string;
    details: string[];
    outcome?: undefined;
    link?: undefined;
    appendix?: undefined;
})[];
export const Interests: string[];
export namespace Skills {
    let backend: string[];
    let frontend: string[];
    let others: string[];
}
