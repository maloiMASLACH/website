import { FC, HTMLAttributes } from "react";
import ReactPlayer from "react-player";

import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { images } from "@shared/assets";
import { BackgroundImageContainer } from "@widgets/BackgroundImageContainer.tsx";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

export const PresaleBuy: FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  return (
    <ScreenContainer {...props} className={"py-[100px]"}>
      <BackgroundImageContainer images={[{ url: images.earningBg }]} />

      <WidthContainer className={"flex items-center justify-between xl:!flex-col xl:!items-start"}>
        <div className="flex flex-col items-left max-w-[648px] justify-start mx-50 my-[100px] relative">
          <DottedButton>
            <VitreusTranslator i18nKey="vtrs.presaleBuy.dottedButton" />
          </DottedButton>
          <p className="text-vitreus-white text-sh1 mt-20">
            <VitreusTranslator i18nKey="vtrs.presaleBuy.header" />
          </p>
          <p className="text-compliq-middle text-ws-h5 my-[30px] text-left ">
            <VitreusTranslator i18nKey="vtrs.presaleBuy.description" />
          </p>
          <p className="text-compliq-middle text-ws-p1 text-left mb-40">
            <VitreusTranslator i18nKey="vtrs.presaleBuy.descriptionText" />
          </p>
        </div>

        <ReactPlayer
          style={{ alignSelf: "center", maxWidth: "460px" }}
          url="https://www.youtube.com/watch?v=31N3GhKCVBc"
          width="100%"
          height="280px"
          controls={true}
          playing={false}
        />
      </WidthContainer>
    </ScreenContainer>
  );
};
