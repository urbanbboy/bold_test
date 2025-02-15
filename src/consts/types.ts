

//SMM
export interface ISmmCreatingAdData {
    eyebrow: string;
    title: string;
    sub_title: string;
    items: {
        image: string;
        icon: React.ReactNode;
        title: string;
        description: string;
    }[],
}

export interface ISmmTeamMembers {
    title: string;
    items: {
        image: React.ReactNode;
        number: string;
        title: string;
        description: string;
    }[];
}