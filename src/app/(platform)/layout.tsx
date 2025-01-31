import { Footer } from "@/components/organisms/footer";
import { Header } from "@/components/organisms/header";


const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="max-w-[1920px] m-auto">
            <Header />
            <div className="mt-24">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default PlatformLayout;