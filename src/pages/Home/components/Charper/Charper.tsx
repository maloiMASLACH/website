import { FC } from "react";

import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { VtrsCharpeCard } from "@widgets/VtrsCharperCard";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

import { forCharper } from "./utils";

export const Charper: FC = () => {
  return (
    <ScreenContainer>
      <WidthContainer>
        <div className="mb-60">
          <div className="flex flex-col items-center mb-40">
            <DottedButton>
              <VitreusTranslator i18nKey="home.chapter.dottedButton" />
            </DottedButton>
            <h2 className="text-vitreus-white text-center text-sh1 mt-20">
              <VitreusTranslator i18nKey="home.chapter.header" />
            </h2>
            <div className="text-compliq-middle text-ws-sh2 mt-20 text-center max-w-[1076px]">
              <VitreusTranslator i18nKey="home.chapter.description" /> <br />{" "}
              <span className="text-vitreus-white text-ws-sh2">
                <VitreusTranslator i18nKey="home.chapter.descriptionSpan" />
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-24 mt-40 md:!grid-cols-1">
            {forCharper.map((chapter, index) => (
              <VtrsCharpeCard key={chapter.title.key || `chapter-${index}`} {...chapter} />
            ))}
          </div>
        </div>
        <div className="p-24 bg-vitreus-main-black-green text-compliq-middle text-ws-h5 rounded-small text-center">
          <p>
            <VitreusTranslator i18nKey="home.chapter.blockDescription" />
          </p>
        </div>
      </WidthContainer>
    </ScreenContainer>
  );
};
