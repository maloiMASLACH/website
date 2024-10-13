import cx from "classnames";
import { BlogElem, Supabase } from "@shared/api/Supabase/Supabase";
import { useEffect, useState } from "react";
import { StrokeButton } from "vit-ui-kit";
import { images } from "@shared/assets";
import { useNavigate } from "react-router-dom";
import { RoutesNames } from "@shared/constants/routes-names";
import moment from "moment";

export const NewsElement = ({ data, isMain }: { data: BlogElem; isMain?: boolean }) => {
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleGetImage = async () => {
    const imgData = await Supabase.getImage(data.image);

    setImage(imgData);
  };

  useEffect(() => {
    handleGetImage();
  }, []);

  return (
    <div className="w-full flex flex-col bg-vitreus-main-black-green rounded-[20px] relative">
      {!!(data.video || data.embed_video) && (
        <div className="absolute top-8 right-8 py-4 px-[12px] rounded-[6px] bg-vitreus-main-black-green text-vitreus-gradient-from">
          with video
        </div>
      )}
      <img src={image} className="w-full max-h-[320px] object-cover rounded-t-[20px]" />
      <div className="flex flex-col p-24 gap-24">
        <div className="flex flex-col gap-4">
          <div
            className={cx("text-white text-[24px] leaning-[34px]", {
              "text-[38px] leaning-[46px]": isMain,
            })}
          >
            {data.title}
          </div>
          <div className="text-vitreus-black-800 text-[14px] leaning-[18px]">
            {data.author}, {moment(data?.created_at).format("MMMM Do YYYY, h:mm a")}
          </div>
        </div>
        <div className="text-vitreus-black-800 text-[16px] leaning-[24px] whitespace-break-spaces">
          {data.short_info}
        </div>
        <StrokeButton
          key="button.reject"
          className="w-fit flex-row-reverse !text-vitreus-gradient-from border-solid border-[1px] !border-vitreus-gradient-from hover:!bg-vitreus-text-color"
          icon={<images.rArrow className="" />}
          text={"READ MORE"}
          onClick={() => navigate(`${RoutesNames.Blog}/${data.title_url || data.id}`)}
        />
      </div>
    </div>
  );
};
