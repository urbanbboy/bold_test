import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FaqItemProps {
    question: string;
    answer: string;
}

export const FaqItem = ({
    question,
    answer
}: FaqItemProps) => {
    return (
        <AccordionItem value={question}>
            <AccordionTrigger title={question}>{question}</AccordionTrigger>
            <AccordionContent>
                {answer}
            </AccordionContent>
        </AccordionItem>
    )
}