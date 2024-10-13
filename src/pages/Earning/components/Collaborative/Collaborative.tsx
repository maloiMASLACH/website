import { FC, HTMLAttributes } from "react";

import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { images } from "@shared/assets";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

export const Collaborative: FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  return (
    <ScreenContainer {...props} className={"py-[150px]"}>
      <WidthContainer
        contentMaxWidth={"max-w-[1296px]"}
        className="flex flex-row items-center justify-between gap-[60px] xl:!flex-col xl:!items-start"
      >
        <div className="flex flex-col items-left max-w-[636px] justify-start my-[100px] relative">
          <DottedButton>
            <VitreusTranslator i18nKey="earning.collaborate.dottedButton" />
          </DottedButton>
          <p className="text-vitreus-white text-sh1 mt-20 mb-[30px]">
            <VitreusTranslator i18nKey="earning.collaborate.header" />
          </p>
          <p className="text-compliq-middle text-ws-h5 mb-[30px] text-left">
            <VitreusTranslator i18nKey="earning.collaborate.description" />
          </p>
          <p className="text-compliq-middle text-ws-p1 text-left mb-40">
            <VitreusTranslator i18nKey="earning.collaborate.content" />
          </p>
        </div>

        <img className="max-w-[600px] xl:!self-center w-full" src={images.collaborative} alt="" />
      </WidthContainer>
    </ScreenContainer>
  );
};
