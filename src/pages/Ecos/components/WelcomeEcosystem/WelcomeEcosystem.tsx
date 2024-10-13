import { FC, HTMLAttributes } from "react";

import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { images } from "@shared/assets";
import { BackgroundImageContainer } from "@widgets/BackgroundImageContainer.tsx";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

export const WelocmeEcosystem: FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  return (
    <ScreenContainer {...props} className={"py-[150px]"}>
      <BackgroundImageContainer images={[{ url: images.EcoGradientBg }]}></BackgroundImageContainer>

      <WidthContainer>
        <div className={"flex flex-col items-left max-w-[785px]"}>
          <DottedButton>
            <VitreusTranslator i18nKey="ecosystem.welcomeEcosystem.dottedButton" />
          </DottedButton>
          <p className="text-vitreus-white text-h2 mt-20 font-thin">
            <VitreusTranslator i18nKey="ecosystem.welcomeEcosystem.header" />
          </p>
          <p className="text-compliq-middle text-ws-sh2 mt-40">
            <VitreusTranslator i18nKey="ecosystem.welcomeEcosystem.description" />
          </p>
        </div>
      </WidthContainer>
    </ScreenContainer>
  );
};
