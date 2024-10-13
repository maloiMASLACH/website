import { FC, HTMLAttributes } from "react";

import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { images } from "@shared/assets";
import { BackgroundImageContainer } from "@widgets/BackgroundImageContainer.tsx";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

export const WelocmeCompany: FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  return (
    <ScreenContainer {...props} className={"py-[150px]"}>
      <BackgroundImageContainer images={[{ url: images.companyBg }]} />

      <WidthContainer
        contentMaxWidth={"max-w-[1296px]"}
        className={"flex flex-col items-left mb-[116px]"}
      >
        <DottedButton>
          <VitreusTranslator i18nKey="company.welcomeCompany.dottedButton" />
        </DottedButton>
        <p className="text-vitreus-white text-h2 mt-20 font-thin max-w-[785px]">
          <VitreusTranslator i18nKey="company.welcomeCompany.header" />
        </p>
        <p className="text-compliq-middle text-ws-h5 mt-40 max-w-[1032px] flex flex-col">
          <VitreusTranslator i18nKey="company.welcomeCompany.description" />
          <VitreusTranslator i18nKey="company.welcomeCompany.email" />
          <VitreusTranslator i18nKey="company.welcomeCompany.discord" />
        </p>
      </WidthContainer>
    </ScreenContainer>
  );
};
