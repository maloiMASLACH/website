import { FC } from "react";

import { GradientButton } from "@features/Buttons/GradientButton.tsx";
import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { images } from "@shared/assets";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

export const Affiliate: FC = () => {
  return (
    <ScreenContainer>
      <WidthContainer className="flex flex-row items-center justify-between">
        <img className="max-h-[513px]" src={images.laptop} alt="" />
        <div className="flex flex-col items-left max-w-[636px] justify-start my-[100px] relative">
          <DottedButton>EARNING</DottedButton>
          <p className="text-vitreus-white text-h2 mt-20 mb-[30px]">VTRS Affiliate Marketing</p>
          <p className="text-compliq-middle text-ws-h5 mb-[30px] text-left">
            The VTRS Affiliate Marketing Program (VAM) allows you to create a custom presale link in
            your name, which you can use to promote the VTRS Presale and bring new participants into
            the VITREUS community.
          </p>
          <p className="text-compliq-middle text-ws-p1 text-left mb-[30px]">
            In return you will receive 10% in commissions from all buys that came in using your
            promo link.
            <br />
            <br />
            No matter if you are bringing in friends and family or if you are promoting VTRS on
            social media – the VAM Program can yield quick results with reliable payouts.
            <br />
            <br />
            Important: Due to regulatory changes the VAM Program is not available to UK residents
            anymore.
          </p>
          <GradientButton RightIcon={<images.rightBtn />}>SIGN UP FOR VAM PROGRAM</GradientButton>
        </div>
      </WidthContainer>
    </ScreenContainer>
  );
};
