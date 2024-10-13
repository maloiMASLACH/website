import { FC, HTMLAttributes } from "react";

import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { images } from "@shared/assets";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

export const VtrsChain: FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  return (
    <ScreenContainer {...props} className={"py-[150px]"}>
      <WidthContainer className={"flex gap-[60px] xl:!flex-col"}>
        <div className="flex flex-col items-left max-w-[648px] justify-start my-[100px] relative">
          <DottedButton>
            <VitreusTranslator i18nKey="ecosystem.vtrsChain.dottedButton" />
          </DottedButton>
          <p className="text-vitreus-white text-sh1 mt-20">
            <VitreusTranslator i18nKey="ecosystem.vtrsChain.header" />
          </p>
          <p className="text-compliq-middle text-ws-h5 my-[30px] text-left">
            <VitreusTranslator i18nKey="ecosystem.vtrsChain.description" />
          </p>
          <p className="text-compliq-middle text-ws-p1 text-left">
            <VitreusTranslator i18nKey="ecosystem.vtrsChain.content" />
          </p>
        </div>

        <img
          src={images.vtrsChain}
          className="object-contain max-w-[550px] xl:!self-center w-full"
          alt={"ecoBg"}
        />
      </WidthContainer>
    </ScreenContainer>
  );
};
