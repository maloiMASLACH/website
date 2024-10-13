import { FC, HTMLAttributes, useEffect, useState } from "react";
import cx from "classnames";
import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { images } from "@shared/assets";
import { WidthContainer } from "@widgets/WidthContainer.tsx";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { BackgroundImageContainer } from "@widgets/BackgroundImageContainer.tsx";
import { BlogNews, Supabase } from "@shared/api/Supabase/Supabase";
import { NewsElement } from "./NewsElement";
import { Loader } from "vit-ui-kit";

export const News: FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  const [news, setNews] = useState<BlogNews | null>(null);

  const getNews = async () => {
    const newsData = await Supabase.getNews();
    setNews(newsData);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <ScreenContainer {...props} className={"py-[150px] sm:!py-[50px]"}>
      <BackgroundImageContainer images={[{ url: images.companyBg }]} />

      <WidthContainer
        contentMaxWidth={"max-w-[1296px]"}
        className={"flex flex-col items-center mb-[116px] sm:!px-0"}
      >
        <DottedButton>BLOG</DottedButton>
        <p className="text-vitreus-white text-h2 mt-20 font-thin max-w-[785px] sm:text-[32px]">
          The Latest from the VITREUS Blog
        </p>
        <WidthContainer
          contentMaxWidth={"max-w-[1296px]"}
          className={"flex flex-col gap-64 mt-[52px] sm:!px-0"}
        >
          {!news ? (
            <div className="flex h-full items-center justify-center">
              <Loader />
            </div>
          ) : (
            <>
              {!!news?.mainNews.length && (
                <WidthContainer className={"flex flex-wrap gap-24"}>
                  {news.mainNews.map((data) => (
                    <NewsElement key={data.id} data={data} isMain />
                  ))}
                </WidthContainer>
              )}
              {!!news?.additionalNews.length && (
                <WidthContainer
                  style={{ gridTemplateColumns: "repeat(auto-fit, minmax(275px, 1fr))" }}
                  className={"grid gap-24 "}
                >
                  {!!news?.additionalNews.length &&
                    news.additionalNews.map((data) => <NewsElement key={data.id} data={data} />)}
                </WidthContainer>
              )}
            </>
          )}
        </WidthContainer>
      </WidthContainer>
    </ScreenContainer>
  );
};
