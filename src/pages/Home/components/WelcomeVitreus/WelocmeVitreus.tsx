import { FC } from "react";

import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { images } from "@shared/assets";
import { tArray } from "@shared/utils/tArray.ts";
import { BackgroundImageContainer } from "@widgets/BackgroundImageContainer.tsx";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

export const WelocmeVitreus: FC = () => {
  return (
    <ScreenContainer>
      <BackgroundImageContainer images={[{ url: images.homePage }]}></BackgroundImageContainer>

      <WidthContainer>
        <div className={"flex flex-col items-left mb-[116px]"}>
          <DottedButton>
            <VitreusTranslator i18nKey="home.welcomeVitreus.dottedButton" />
          </DottedButton>
          <p className="text-vitreus-white text-h2 mt-20 font-thin max-w-[785px]">
            <VitreusTranslator i18nKey="home.welcomeVitreus.header" />
          </p>
          <p className="text-compliq-middle text-ws-h5 my-40 max-w-[1032px]">
            <VitreusTranslator i18nKey="home.welcomeVitreus.description" />
          </p>
        </div>
        <div className="p-24 bg-vitreus-main-black-green rounded-small text-center [&>p>div]:flex [&>p>div]:flex-col [&>p>div]:items-center">
          <p className="text-vitreus-white text-ws-h5 mb-24">
            <VitreusTranslator i18nKey="home.welcomeVitreus.blockHeader" />
          </p>
          <p className="text-compliq-middle text-ws-p1 mb-24">
            <VitreusTranslator i18nKey="home.welcomeVitreus.blockDescription" />
          </p>
          <div className="text-vitreus-white text-ws-h5 [&>div]:flex [&>div]:flex-wrap [&>div]:items-center [&>div]:justify-center">
            <VitreusTranslator i18nKey="home.welcomeVitreus.blockContract" />
          </div>
        </div>
        <div className={"pt-20 grid md:!grid-cols-1 grid-cols-4 gap-20"}>
          {tArray("home.welcomeVitreus.blockLinks").map((_, index) => (
            <div
              key={index}
              className={
                "bg-vitreus-main-black-green rounded-small text-center h-full flex items-center justify-center"
              }
            >
              <VitreusTranslator i18nKey={`home.welcomeVitreus.blockLinks.${index}.content`} />
            </div>
          ))}
        </div>
      </WidthContainer>
    </ScreenContainer>
  );
};
