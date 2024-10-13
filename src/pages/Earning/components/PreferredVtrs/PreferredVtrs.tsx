import { FC } from "react";

import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { ReadMoreButton } from "@features/ReadMoreButton/ReadMoreButton";
import { images } from "@shared/assets";
import { BackgroundImageContainer } from "@widgets/BackgroundImageContainer.tsx";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

export const PrefferedVtrs: FC = () => {
  return (
    <ScreenContainer>
      <BackgroundImageContainer>
        <img src={images.earningBg} alt={"ecoBg"} />
      </BackgroundImageContainer>

      <WidthContainer className="flex flex-row items-center justify-between">
        <img className="max-h-[420px]" src={images.preferred} alt="" />
        <div className="flex flex-col items-left max-w-[636px] justify-start my-[100px] relative">
          <DottedButton>EARNING</DottedButton>
          <p className="text-vitreus-white text-h2 my-20">VIP Preferred</p>
          <p className="text-vitreus-white text-ws-sh2 mb-[30px]">
            The Exclusive Royalty Program For VTRS Presale Buyers
          </p>
          <p className="text-compliq-middle text-ws-h5 mb-[30px] text-left">
            In addition to the benefits from staking in the VIP, users that participated in the
            pre-launch events hosted by Vitreus Chain are additionally eligible for VIP Preferred
            (VIPP) – an exclusive royalty pool strictly limited to buyers in our closed seed sale
            and the currently ongoing VTRS Presale.
          </p>
          <p className="text-compliq-middle text-ws-p1 text-left mb-[30px]">
            To these lucky few, VIP Preferred royalties are amplified by a further, specialized
            commitment from CDI in appreciation of those that bootstrapped the network’s
            capabilities.
          </p>
          <ReadMoreButton className={"!justify-start"} />
        </div>
      </WidthContainer>
    </ScreenContainer>
  );
};
