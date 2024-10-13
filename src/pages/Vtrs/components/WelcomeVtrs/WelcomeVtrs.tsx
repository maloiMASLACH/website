import cx from "classnames";
import { FC, HTMLAttributes } from "react";

import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { images } from "@shared/assets";
import { BackgroundImageContainer } from "@widgets/BackgroundImageContainer.tsx";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

export const WelocmeVtrs: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  return (
    <ScreenContainer {...props} className={cx("pt-[276px] pb-[330px]", className)}>
      <BackgroundImageContainer images={[{ url: images.VtrsBg }]}></BackgroundImageContainer>

      <WidthContainer>
        <div className={"flex flex-col items-left max-w-[785px]"}>
          <DottedButton>
            <VitreusTranslator i18nKey="vtrs.welcomeVtrs.dottedButton" />
          </DottedButton>
          <h2 className="text-vitreus-white text-h2 mt-20 font-thin">
            <VitreusTranslator i18nKey="vtrs.welcomeVtrs.header" />
          </h2>
          <div className="text-compliq-middle text-ws-sh2 mt-40">
            <VitreusTranslator i18nKey="vtrs.welcomeVtrs.description" />
          </div>
        </div>
      </WidthContainer>
    </ScreenContainer>
  );
};
