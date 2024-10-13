import { FC, HTMLAttributes } from "react";

import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
//import { GradientButton } from "@features/GradientButton/GradientButton.tsx";
//import { images } from "@shared/assets";
import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { images } from "@shared/assets";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

export const VGovern: FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  return (
    <ScreenContainer {...props} className={"py-[150px]"}>
      <WidthContainer
        contentMaxWidth={"max-w-[1296px]"}
        className={"flex justify-between items-center gap-[60px] xl:!flex-col"}
      >
        <div className={"rounded-large overflow-hidden h-fit w-fit xl:!self-center xl:!order-1"}>
          <img
            src={images.vGovern}
            alt=""
            className={"object-contain max-w-[550px] w-full opacity-80"}
          />
        </div>

        <div className="flex flex-col max-w-[648px]">
          <DottedButton>
            <VitreusTranslator i18nKey="ecosystem.vGovern.dottedButton" />
          </DottedButton>

          <p className="text-vitreus-white text-h2 mt-20">
            <VitreusTranslator i18nKey="ecosystem.vGovern.header" />
          </p>
          <p className="text-compliq-middle text-ws-sh2 my-40 text-left">
            <VitreusTranslator i18nKey="ecosystem.vGovern.description" />
          </p>
          <p className="mb-40 text-ws-p1 text-compliq-middle">
            <VitreusTranslator i18nKey="ecosystem.vGovern.content" />
          </p>

          {/*<a href="https://http://governance.vtrs.io/" target="_blank" rel="noreferrer">
            <GradientButton RightIcon={<images.rightBtn />}>VISIT vgovern</GradientButton>
  </a>*/}
        </div>
      </WidthContainer>
    </ScreenContainer>
  );
};
