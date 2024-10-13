import { FC, HTMLAttributes } from "react";

import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { images } from "@shared/assets";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

export const Manifesto: FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  return (
    <ScreenContainer {...props} className={"py-[150px]"}>
      <WidthContainer
        contentMaxWidth={"max-w-[1296px]"}
        className="flex flex-row items-center justify-between xl:!flex-col xl:!items-start"
      >
        <div className="flex flex-col items-left max-w-[636px] justify-start relative">
          <DottedButton>
            <VitreusTranslator i18nKey="documents.manifesto.dottedButton" />
          </DottedButton>
          <p className="text-vitreus-white text-sh1 mt-20 mb-[30px]">
            <VitreusTranslator i18nKey="documents.manifesto.header" />
          </p>
          <p className="text-compliq-middle text-ws-h5 mb-40 text-left">
            <VitreusTranslator i18nKey="documents.manifesto.description" />
          </p>
        </div>

        <img className="max-w-[600px] xl:!self-center w-full" src={images.laptopManifesto} alt="" />
      </WidthContainer>
    </ScreenContainer>
  );
};
