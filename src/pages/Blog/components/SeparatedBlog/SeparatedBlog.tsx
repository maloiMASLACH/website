import { BlogElem, Supabase } from "@shared/api/Supabase/Supabase";
import { FC, HTMLAttributes, useEffect, useState } from "react";
import { Loader } from "vit-ui-kit";
import { images } from "@shared/assets";
import { useNavigate } from "react-router-dom";
import { RoutesNames } from "@shared/constants/routes-names";
import { ScreenContainer } from "@widgets/ScreenContainer";
import { WidthContainer } from "@widgets/WidthContainer";
import { DottedButton } from "@features/DottedButton/DottedButton";
import moment from "moment";
import { Expander } from "@features/Expander/Expander";

export const SeparatedBlogComponent: FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  const [data, setData] = useState<BlogElem | null>(null);
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const navigate = useNavigate();

  const handleGetNews = async () => {
    try {
      const param = `${window.location.href.split("/").at(-1)}`;
      const fetchedData: BlogElem | null = Number(param)
        ? await Supabase.getNewsById(param)
        : await Supabase.getNewsByTitle(param);

      if (!fetchedData) {
        navigate(RoutesNames.NotFound);
      }

      const imgData = await Supabase.getImage(`${fetchedData?.image}`);
      const videoData = fetchedData?.video && (await Supabase.getImage(`${fetchedData.video}`));

      setData(fetchedData);
      setImage(imgData);
      videoData && setVideo(videoData);
    } catch (e) {
      navigate(RoutesNames.NotFound);
    }
  };

  useEffect(() => {
    handleGetNews();
  }, []);

  return (
    <ScreenContainer {...props} className={"!py-[50px] bg-vitreus-luminous-green"}>
      {/* <BackgroundImageContainer images={[{ url: images.companyBg }]} /> */}

      <WidthContainer
        contentMaxWidth={"max-w-[1296px]"}
        className={"flex flex-col items-center mb-[116px] min-h-[100svh] gap-40"}
      >
        {!data ? (
          <div className="flex h-full items-center">
            <Loader />
          </div>
        ) : (
          <>
            <div className="w-full flex items-center text-vitreus-black-800 text-[14px] leaning-[24px] gap-8">
              <div
                className="hover:underline cursor-pointer"
                onClick={() => navigate(RoutesNames.Home)}
              >
                Home
              </div>
              <images.rightArrowBtn className="[&>path]:fill-vitreus-black-800" />
              <div
                onClick={() => navigate(RoutesNames.Blog)}
                className="capitalize cursor-pointer hover:underline"
              >
                Blog
              </div>
              <images.rightArrowBtn className="[&>path]:fill-vitreus-black-800" />
              <div>{data?.title}</div>
            </div>
            <div className="w-full flex flex-col gap-[20px]">
              <DottedButton>BLOG</DottedButton>
              {data.is_reversed_title && (
                <>
                  <div className="w-[calc(100%_-_200px)] rounded-[20px] lg:w-full">
                    {video ? (
                      <video
                        src={video}
                        poster={image}
                        controls
                        className="w-full  object-cover aspect-video rounded-[20px]"
                      />
                    ) : data.embed_video ? (
                      <iframe
                        className="aspect-video rounded-[20px]"
                        width="100%"
                        height="100%"
                        src={data.embed_video}
                      ></iframe>
                    ) : (
                      <img src={image} className="w-full h-full object-cover rounded-[20px]" />
                    )}
                  </div>
                  {(video || data.embed_video) && data.video_transcription && (
                    <div className="w-[calc(100%_-_200px)] rounded-[20px] lg:w-full">
                      <Expander title="Video transcription">
                        <div className="text-vitreus-black-800">{data.video_transcription}</div>
                      </Expander>
                    </div>
                  )}
                </>
              )}

              <p className="text-vitreus-white text-h2 font-thin max-w-[785px] sm:text-[32px]">
                {data?.title}
              </p>
              <div className="text-vitreus-black-800 text-[20px] sm:text-[16px]">
                {data?.author}, {moment(data?.created_at).format("MMMM Do YYYY, h:mm a")}
              </div>
            </div>
            <div className="w-full flex flex-col rounded-[20px]">
              {!data.is_reversed_title && (
                <>
                  <div className="w-[calc(100%_-_200px)] rounded-[20px] lg:w-full">
                    {video ? (
                      <video
                        src={video}
                        poster={image}
                        controls
                        className="w-full  object-cover aspect-video rounded-[20px]"
                      />
                    ) : data.embed_video ? (
                      <iframe
                        className="aspect-video rounded-[20px]"
                        width="100%"
                        height="100%"
                        src={data.embed_video}
                      ></iframe>
                    ) : (
                      <img src={image} className="w-full h-full object-cover rounded-[20px]" />
                    )}
                  </div>
                  {(video || data.embed_video) && data.video_transcription && (
                    <div className="w-[calc(100%_-_200px)] rounded-[20px] lg:w-full">
                      <Expander title="Video transcription">
                        <div className="text-vitreus-black-800">{data.video_transcription}</div>
                      </Expander>
                    </div>
                  )}
                </>
              )}

              <div className="flex flex-col p-24 gap-24">
                <div className="text-vitreus-black-800 text-[20px] leaning-[32px] sm:text-[16px] whitespace-break-spaces">
                  {data?.full_info}
                </div>
              </div>
            </div>
          </>
        )}
      </WidthContainer>
    </ScreenContainer>
  );
};
