import { FC } from "react";

import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { images } from "@shared/assets";
import { BackgroundImageContainer } from "@widgets/BackgroundImageContainer.tsx";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

export const TokenVitreus: FC = () => {
  return (
    <ScreenContainer>
      <BackgroundImageContainer images={[{ url: images.bgBubblesToken, className: "z-10" }]}>
        <img
          src={images.bgCoin}
          alt="bgMainCoin"
          className={"absolute left-[100px] top-1/2 -translate-y-1/2 h-[90%] z-10"}
        />
      </BackgroundImageContainer>

      <WidthContainer className={"flex justify-end"}>
        <div className="flex flex-col max-w-[648px]">
          <DottedButton>
            <VitreusTranslator i18nKey="home.vtrsToken.dottedButton" />
          </DottedButton>

          <p className="text-vitreus-white text-h2 mt-20 mb-[30px]">
            <VitreusTranslator i18nKey="home.vtrsToken.header" />
          </p>
          <p className="text-compliq-middle text-ws-h5 mb-[30px] text-left">
            <VitreusTranslator i18nKey="home.vtrsToken.description" />
          </p>
        </div>
      </WidthContainer>
    </ScreenContainer>
  );
};
