import { FC } from "react";

import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";
export const Answer: FC = () => {
  return (
    <ScreenContainer>
      <WidthContainer className="my-[60px] flex flex-col items-center">
        <p className="text-compliq-middle text-center text-ws-sh2  mb-[58px]">
          <VitreusTranslator i18nKey="vtrs.answer.header" /> <br />
          <span className="text-vitreus-white">
            <VitreusTranslator i18nKey="vtrs.answer.headerSpan" />
          </span>
        </p>
        <div className="flex flex-col p-24 bg-vitreus-main-black-green rounded-small text-center max-w-[636px]">
          <p className="text-ws-h5 text-vitreus-white">
            <VitreusTranslator i18nKey="vtrs.answer.description" />
          </p>
          <p className="text-ws-p1 text-compliq-middle">
            <VitreusTranslator i18nKey="vtrs.answer.descriptionSpan" />
          </p>
        </div>
      </WidthContainer>
    </ScreenContainer>
  );
};
