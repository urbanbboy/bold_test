import BoldLogo from '@/assets/bold_logo.svg'
import BoldLogoMobile from '@/assets/bold_logo_mobile.svg'

export const Logo = () => {
    return (
        <>
            <BoldLogo className="hidden lg:flex" />
            <BoldLogoMobile className="flex lg:hidden" />
        </>
    )
}

export const MobileLogo = () => {
    return (
        <BoldLogoMobile />
    )
}