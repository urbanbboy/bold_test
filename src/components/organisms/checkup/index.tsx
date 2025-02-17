import { ButtonWithIcon } from "@/components/atoms/button-with-icon"
import CheckupBgSVG from '@/assets/backgrounds/checkup_bg.svg'
import { Heading } from "@/components/atoms/heading";

interface CheckupProps {
    onScrollToFeedback: () => void;
}

const checkupData = {
    title: 'Не знаете, с чего начать?',
    description: 'Запишитесь на диагностику маркетинга, и мы поможем определить эффективные решения для вашего бизнеса.',
}

export const Checkup: React.FC<CheckupProps> = ({ onScrollToFeedback }) => {

    return (
        <div className="w-full max-w-[1920px] p-4">
            <div className="relative flex flex-col justify-center items-center gap-y-7 bg-black rounded-xl px-7 py-9 md:py-24 text-center overflow-hidden">
                <Heading as="h2" className="text-secondary">{checkupData.title}</Heading>
                <p className="text-gray md:w-2/3 lg:w-2/4">{checkupData.description}</p>
                <ButtonWithIcon
                    className="z-40"
                    onClick={onScrollToFeedback}
                >
                    Пройти диагностику
                </ButtonWithIcon>
                <CheckupBgSVG className="absolute max-w-[1920px] m-auto" />
            </div>
        </div>
    )
}
