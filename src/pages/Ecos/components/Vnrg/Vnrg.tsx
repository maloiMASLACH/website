import { FC, HTMLAttributes } from "react";

import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { images } from "@shared/assets";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

export const Vnrg: FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  return (
    <ScreenContainer {...props} className={"py-[150px]"}>
      <WidthContainer className={"flex flex-row justify-between items-center xl:!flex-col"}>
        <div className="flex flex-col h-[600px] xl:!order-1 items-start xl:!self-center">
          <img className="max-h-[313px] object-contain" src={images.vtrs3dCoin} alt="" />
          <img
            className="max-h-[280px] max-width-[218px] ml-[40%] sm:!ml-0 object-contain"
            src={images.vnrg}
            alt=""
          />
        </div>
        <div className="flex flex-col max-w-[636px]">
          <DottedButton>
            <VitreusTranslator i18nKey="ecosystem.vnrg.dottedButton" />
          </DottedButton>
          <p className="text-vitreus-white text-sh1 mt-20">
            <VitreusTranslator i18nKey="ecosystem.vnrg.header" />
          </p>
          <p className="text-compliq-middle text-ws-sh2 my-40 text-left">
            <VitreusTranslator i18nKey="ecosystem.vnrg.description" />
          </p>
          <p className="mb-[120px] text-ws-p1 text-compliq-middle">
            <VitreusTranslator i18nKey="ecosystem.vnrg.content" />
          </p>
        </div>
      </WidthContainer>
    </ScreenContainer>
  );
};
