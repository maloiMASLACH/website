import { FC, HTMLAttributes } from "react";

import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { images } from "@shared/assets";
import { BackgroundImageContainer } from "@widgets/BackgroundImageContainer.tsx";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

export const PresaleState: FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  return (
    <ScreenContainer {...props} className={"pt-[159px] pb-[100px] "}>
      <BackgroundImageContainer images={[{ url: images.shadedCube }]} />

      <WidthContainer
        className={"flex justify-between items-center gap-[60px] xl:!flex-col xl:!items-start"}
      >
        <img
          src={images.phone}
          alt="bgMainCoin"
          className={"max-h-[514px] z-10 xl:!self-center xl:!order-1"}
        />

        <div className="flex flex-col max-w-[648px]">
          <DottedButton>
            <VitreusTranslator i18nKey="vtrs.presaleState.dottedButton" />
          </DottedButton>

          <p className="text-vitreus-white text-sh1 mt-20">
            <VitreusTranslator i18nKey="vtrs.presaleState.header" />
          </p>
          <p className="text-compliq-middle text-ws-h5 my-[30px] text-left">
            <VitreusTranslator i18nKey="vtrs.presaleState.description" />
          </p>
          <p className="mb-[30px] text-ws-p1 text-compliq-middle">
            <VitreusTranslator i18nKey="vtrs.presaleState.descriptionText" />
          </p>
        </div>
      </WidthContainer>
    </ScreenContainer>
  );
};
