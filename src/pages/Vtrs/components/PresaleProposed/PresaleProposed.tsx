import { FC, HTMLAttributes } from "react";

import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { images } from "@shared/assets";
import { t } from "@shared/config/translations.config.ts";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

export const PresaleProposed: FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  const image = t("vtrs.tokenomics.imageUrl", { defaultValue: "" });

  return (
    <ScreenContainer {...props}>
      <WidthContainer
        contentMaxWidth={"max-w-[1296px]"}
        className={
          "flex flex-row !justify-between items-center my-[236px] xl:!flex-col xl:!items-start gap-[60px]"
        }
      >
        <div className="flex flex-col items-left max-w-[648px]">
          <DottedButton>
            <VitreusTranslator i18nKey="vtrs.tokenomics.dottedButton" />
          </DottedButton>
          <p className="text-vitreus-white text-sh1 mt-20">
            <VitreusTranslator i18nKey="vtrs.tokenomics.header" />
          </p>
          <p className="text-compliq-middle text-ws-p1 my-[30px] text-left">
            <VitreusTranslator i18nKey="vtrs.tokenomics.description" />
          </p>
        </div>

        <img
          src={image ? image : images.proposedVtrs}
          alt="vtrs.tokenomics.imageUrl"
          className="max-w-[630px] w-full xl:!self-center"
        />
      </WidthContainer>
    </ScreenContainer>
  );
};
