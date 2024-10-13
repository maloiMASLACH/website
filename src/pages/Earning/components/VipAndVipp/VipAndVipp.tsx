import { FC, HTMLAttributes } from "react";

import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { images } from "@shared/assets";
import { IconSquare } from "@widgets/IconSquare";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

const ComingSoon = () => (
  <div className="flex items-center absolute z-50 w-[230px] h-45 bg-vitreus-red-main rotate-45 right-[-60px] ">
    <div className="relative w-[230px] h-[30px] bg-vitreus-red">
      <p className="text-p2 text-vitreus-white text-center mt-8 ml-8 uppercase">
        <VitreusTranslator i18nKey="earning.vipAndVipp.comingSoon" />
      </p>
    </div>
  </div>
);

export const VipAndVipp: FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  return (
    <ScreenContainer {...props} className={"py-[150px]"}>
      <WidthContainer>
        <div className="flex flex-col items-center mb-24">
          <DottedButton>
            <VitreusTranslator i18nKey="earning.vipAndVipp.dottedButton" />
          </DottedButton>
          <p className="text-vitreus-white text-center text-sh1 mt-20 mb-40">
            <VitreusTranslator i18nKey="earning.vipAndVipp.header" />
          </p>
        </div>

        <div className="flex gap-24 md:!flex-col">
          <div className="relative flex flex-col items-center bg-vitreus-main-black-green p-24 rounded-small overflow-hidden w-full">
            <VitreusTranslator
              i18nKey="earning.vipAndVipp.vipComingSoon"
              components={{ comingSoon: <ComingSoon /> }}
            >
              {" "}
            </VitreusTranslator>

            <IconSquare Icon={<images.star />} />
            <p className="mt-24 text-ws-h5 text-vitreus-white">
              <VitreusTranslator i18nKey="earning.vipAndVipp.headerVip" />
            </p>
            <p className="mt-16 text-ws-p1 text-compliq-middle text-center">
              <VitreusTranslator i18nKey="earning.vipAndVipp.contentVip" />
            </p>
          </div>

          <div className="relative flex flex-col items-center bg-vitreus-main-black-green p-24 rounded-small overflow-hidden w-full">
            <VitreusTranslator
              i18nKey="earning.vipAndVipp.vippComingSoon"
              components={{ comingSoon: <ComingSoon /> }}
            >
              {" "}
            </VitreusTranslator>

            <IconSquare Icon={<images.spade />} />
            <p className="mt-24 text-ws-h5 text-vitreus-white">
              <VitreusTranslator i18nKey="earning.vipAndVipp.headerVipp" />
            </p>
            <p className="mt-16 text-ws-p1 text-compliq-middle text-center">
              <span className="text-vitreus-white">
                <VitreusTranslator i18nKey="earning.vipAndVipp.description" />
              </span>

              <VitreusTranslator i18nKey="earning.vipAndVipp.contentVipp" />
            </p>
          </div>
        </div>
      </WidthContainer>
    </ScreenContainer>
  );
};
