import { FC } from "react";

import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { images } from "@shared/assets";
import { BackgroundImageContainer } from "@widgets/BackgroundImageContainer.tsx";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

export const WelcomeEarning: FC = () => {
  return (
    <ScreenContainer>
      <BackgroundImageContainer
        images={[{ url: images.EarningBgMain }]}
        className="opacity-40"
      ></BackgroundImageContainer>

      <WidthContainer>
        <div className={"flex flex-col items-left max-w-[656px]"}>
          <DottedButton>
            <VitreusTranslator i18nKey="earning.welcomeEarning.dottedButton" />
          </DottedButton>
          <p className="text-vitreus-white text-h2 mt-20 font-thin">
            <VitreusTranslator i18nKey="earning.welcomeEarning.header" />
          </p>
          <p className="text-compliq-middle text-ws-sh2 mt-40">
            <VitreusTranslator i18nKey="earning.welcomeEarning.description" />
          </p>
        </div>
      </WidthContainer>
    </ScreenContainer>
  );
};
