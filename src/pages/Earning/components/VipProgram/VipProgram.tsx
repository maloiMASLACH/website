import { FC } from "react";

import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { images } from "@shared/assets";
import { BackgroundImageContainer } from "@widgets/BackgroundImageContainer.tsx";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

export const VipProgram: FC = () => {
  return (
    <ScreenContainer>
      <BackgroundImageContainer>
        <img src={images.bgBubbles} alt={"ecoBg"} />
      </BackgroundImageContainer>

      <WidthContainer className="flex flex-row items-center justify-between">
        <div className="flex flex-col items-left max-w-[636px] justify-start my-[100px] relative">
          <DottedButton>EARNING</DottedButton>
          <p className="text-vitreus-white text-h2 mt-20 mb-[30px]">VIP Program</p>
          <p className="text-compliq-middle text-ws-h5 mb-[30px] text-left">
            Atop of the traditional, consensus-level staking that rewards VNRG, the Vanguard
            Incentives Program (VIP) offers bonus royalty payments for users that choose to commit
            their tokens for minimum periods of a year.
          </p>
          <p className="text-compliq-middle text-ws-p1 text-left">
            With Collaborative Digital already building their VITREUS ecosystem on the Vitreus
            Chain, their demand for VNRG has sparked the added incentive of the VIP. This deal has
            outlined a VNRG Commitment Royalty for the ongoing supply of VNRG to the VITREUS
            ecosystem on behalf of the Vitreus DAO to CDI. <br /> <br />
            Users that commit their VTRS to the consensus algorithm long term can retract their
            tokens at any time if they should need to. However, an early retraction will entail a
            small penalty that will have to be paid by the user.
          </p>
        </div>
        <img className="max-h-[420px] " src={images.preferred} alt="" />
      </WidthContainer>
    </ScreenContainer>
  );
};
