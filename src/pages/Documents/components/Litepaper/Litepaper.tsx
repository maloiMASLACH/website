import { FC } from "react";

import { GradientButton } from "@features/Buttons/GradientButton.tsx";
import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { images } from "@shared/assets";
import { BackgroundImageContainer } from "@widgets/BackgroundImageContainer.tsx";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

export const Litepaper: FC = () => {
  return (
    <ScreenContainer>
      <BackgroundImageContainer>
        <img src={images.earningBg} alt={"ecoBg"} />
      </BackgroundImageContainer>

      <WidthContainer className="flex flex-row items-center justify-between">
        <div>
          <img className={"max-h-[400px]"} src={images.litepaper} alt="litepaper" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-left max-w-[636px] justify-start relative">
            <DottedButton>DOCUMENTS</DottedButton>
            <p className="text-vitreus-white text-h2 mt-20 mb-[30px]">VTRS Litepaper</p>
            <p className="text-compliq-middle text-ws-h5 text-left mb-[30px]">
              Our Litepaper gives a quick insight into the workings of the VTRS Utility Token, our
              blockchain ecosystem, and the staking options via our vNode. <br /> <br />
              You can download, read and share it in{" "}
              <span className="text-vitreus-gradient-from"> PDF format</span>. It will also be added
              to our GitBook repositary shortly.
            </p>
            <GradientButton RightIcon={<images.rightBtn />}>Download whitepaper pdf</GradientButton>
          </div>
        </div>
      </WidthContainer>
    </ScreenContainer>
  );
};
