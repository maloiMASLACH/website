import { FC } from "react";

import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { images } from "@shared/assets";
import { BackgroundImageContainer } from "@widgets/BackgroundImageContainer.tsx";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

export const EarningVitreus: FC = () => {
  return (
    <ScreenContainer>
      <BackgroundImageContainer
        darkenBottom={false}
        images={[
          { url: images.earningBg },
          { url: images.EarningBgCoin },
          { url: images.bgBubbles },
        ]}
      ></BackgroundImageContainer>

      <WidthContainer>
        <div className="flex flex-row items-left justify-end mx-50  z-10">
          <div className="flex flex-col items-left max-w-[648px] ">
            <DottedButton>
              {" "}
              <VitreusTranslator i18nKey="home.earningVtrs.dottedButton" />
            </DottedButton>
            <p className="text-vitreus-white text-h2 mt-20">
              <VitreusTranslator i18nKey="home.earningVtrs.header" />
            </p>
            <p className="text-compliq-middle text-ws-h5 my-[30px] text-left">
              <VitreusTranslator i18nKey="home.earningVtrs.description" />
            </p>
          </div>
        </div>
      </WidthContainer>
    </ScreenContainer>
  );
};
