import { FC } from "react";

import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { images } from "@shared/assets";
import { BackgroundImageContainer } from "@widgets/BackgroundImageContainer.tsx";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

export const WelcomeShop: FC = () => {
  return (
    <ScreenContainer>
      <BackgroundImageContainer
        images={[{ url: images.shopBg }]}
        className="opacity-20"
      ></BackgroundImageContainer>

      <WidthContainer>
        <div className={"flex flex-col items-left max-w-[656px]"}>
          <DottedButton>SHOP</DottedButton>
          <p className="text-vitreus-white text-h2 mt-20 font-thin">Shop VTRS</p>
          <p className="text-compliq-middle text-ws-h5 mt-40">
            You want some cool Vitreus Merchandise? <br />
            We’ve got you covered.
          </p>
        </div>
      </WidthContainer>
    </ScreenContainer>
  );
};
