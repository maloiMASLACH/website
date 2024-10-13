import { FC } from "react";

import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { images } from "@shared/assets";
import { BackgroundImageContainer } from "@widgets/BackgroundImageContainer.tsx";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

export const WelcomeSupport: FC = () => {
  return (
    <ScreenContainer>
      <BackgroundImageContainer
        images={[{ url: images.supportBg }]}
        className="opacity-60 w-full"
      />

      <WidthContainer>
        <div className={"max-w-[785px]"}>
          <DottedButton>
            <VitreusTranslator i18nKey="support.welcomeSupport.dottedButton" />
          </DottedButton>
          <p className="text-vitreus-white text-h2 mt-20 font-thin">
            <VitreusTranslator i18nKey="support.welcomeSupport.header" />
          </p>
          <p className="text-compliq-middle text-ws-sh2 my-40">
            <VitreusTranslator i18nKey="support.welcomeSupport.description" /> <br />
            <br />{" "}
            <span className="text-ws-h5">
              <VitreusTranslator i18nKey="support.welcomeSupport.content" />
            </span>
          </p>
        </div>
      </WidthContainer>
    </ScreenContainer>
  );
};
