import { FC } from "react";

import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { images } from "@shared/assets";
import { BackgroundImageContainer } from "@widgets/BackgroundImageContainer.tsx";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

export const WelcomeDocuments: FC = () => {
  return (
    <ScreenContainer>
      <BackgroundImageContainer
        images={[{ url: images.blurBg }, { url: images.documentsBg }]}
        className="opacity-85"
      />

      <WidthContainer>
        <div className={"flex flex-col items-left max-w-[1296px]"}>
          <DottedButton>
            <VitreusTranslator i18nKey="documents.welcomeDocuments.dottedButton" />
          </DottedButton>
          <p className="text-vitreus-white text-h2 mt-20 font-thin">
            <VitreusTranslator i18nKey="documents.welcomeDocuments.header" />
          </p>
          <p className="text-compliq-middle text-ws-sh2 mt-40">
            <VitreusTranslator i18nKey="documents.welcomeDocuments.description" />
          </p>
        </div>
      </WidthContainer>
    </ScreenContainer>
  );
};
