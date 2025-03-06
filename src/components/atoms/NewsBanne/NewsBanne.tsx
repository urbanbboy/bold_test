import React, { useEffect, useState } from "react";
import { useGetBannersQuery } from "@/api/Banners";

export interface BannerText {
  text: string;
  link: string;
}

const NewsBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { data, error, isLoading } = useGetBannersQuery();

  useEffect(() => {
    if (data?.find((b: any) => b.banner_text)) {
      setIsVisible(true);
      window.dispatchEvent(new CustomEvent("bannerVisible", { detail: true }));
    }
  }, [data]);

  const handleButtonClick = () => {
    setIsVisible(false);
    window.dispatchEvent(new CustomEvent("bannerVisible", { detail: false }));
  };

  if (error || isLoading || !data || !isVisible) return null;

  const banner = data.find((b: any) => b.banner_text)?.banner_text as BannerText | undefined;

  if (!banner?.text || !banner?.link) return null;

  return (
    <>
      {isVisible && (
        <div className="fixed top-0 left-0 w-full bg-red-500 text-white text-sm md:text-base z-[60] 
        flex items-center justify-center px-6 py-4 shadow-md">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center">
            <span className="font-semibold">{banner.text}</span>
            <a
              href={banner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-medium hover:opacity-80"
            >
              Узнать больше &rarr;
            </a>
          </div>

          <button
            className="text-white text-2xl font-bold absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-75"
            onClick={handleButtonClick}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default NewsBanner;
