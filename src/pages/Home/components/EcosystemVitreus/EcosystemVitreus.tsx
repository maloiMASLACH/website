import { FC } from "react";

import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { images } from "@shared/assets";
import { BackgroundImageContainer } from "@widgets/BackgroundImageContainer.tsx";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

export const EcosystemVitreus: FC = () => {
  return (
    <ScreenContainer>
      <BackgroundImageContainer images={[{ url: images.ecoBg }]}></BackgroundImageContainer>

      <WidthContainer>
        <div className="flex flex-col items-left max-w-[648px] justify-start mx-50 my-[100px] relative">
          <DottedButton>
            {" "}
            <VitreusTranslator i18nKey="home.vtrsEcosystem.dottedButton" />
          </DottedButton>
          <p className="text-vitreus-white text-h2 mt-20 mb-[30px]">
            <VitreusTranslator i18nKey="home.vtrsEcosystem.header" />
          </p>
          <p className="text-compliq-middle text-ws-h5 mb-40 text-left max-w-[450px]">
            <VitreusTranslator i18nKey="home.vtrsEcosystem.description" />
          </p>
        </div>
      </WidthContainer>
    </ScreenContainer>
  );
};
