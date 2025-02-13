import { LinkButtonWithIcon } from "@/components/atoms/link-button-with-icon"
import CheckupBgSVG from '@/assets/backgrounds/checkup_bg.svg'

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
                <h1 className="text-white text-3xl md:text-5xl">{checkupData.title}</h1>
                <p className="text-gray md:w-2/3 lg:w-2/4">{checkupData.description}</p>
                <LinkButtonWithIcon
                    onClick={onScrollToFeedback}
                    href={""}
                >
                    Пройти диагностику
                </LinkButtonWithIcon>
                <CheckupBgSVG className="absolute max-w-[1920px] m-auto" />
            </div>
        </div>
    )
}
