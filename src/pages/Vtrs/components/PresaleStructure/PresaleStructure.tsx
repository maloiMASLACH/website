import { FC, HTMLAttributes } from "react";

import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { images } from "@shared/assets";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

export const PresaleStructure: FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  return (
    <ScreenContainer {...props}>
      <WidthContainer
        contentMaxWidth={"max-w-[1296px]"}
        className={
          "flex flex-row !justify-between items-center mt-[121px] mb-[165px] xl:!flex-col xl:!items-start gap-[60px]"
        }
      >
        <img
          src={images.presaleStructure}
          className="max-w-[630px] w-full xl:!self-center xl:!order-2"
          alt=""
        />

        <div className="flex flex-col max-w-[648px]">
          <DottedButton>
            <VitreusTranslator i18nKey="vtrs.presaleStructure.dottedButton" />
          </DottedButton>

          <p className="text-vitreus-white text-sh1 mt-20">
            <VitreusTranslator i18nKey="vtrs.presaleStructure.header" />
          </p>
          <p className="text-compliq-middle text-ws-h5 my-[30px] text-left">
            <VitreusTranslator i18nKey="vtrs.presaleStructure.description" />
          </p>
          <p className="mb-[30px] text-ws-p1 text-compliq-middle">
            <VitreusTranslator i18nKey="vtrs.presaleStructure.descriptionText" />
          </p>
        </div>
      </WidthContainer>
    </ScreenContainer>
  );
};
