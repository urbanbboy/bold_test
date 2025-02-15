

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