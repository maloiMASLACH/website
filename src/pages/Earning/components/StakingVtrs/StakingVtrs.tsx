import { FC, HTMLAttributes } from "react";

import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { InfoCard } from "@features/InfoCard/InfoCard";
import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { images } from "@shared/assets";
import { tArray } from "@shared/utils/tArray.ts";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

export const StakingVtrs: FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  return (
    <ScreenContainer {...props} className={"py-[150px]"}>
      <WidthContainer className="flex flex-col items-center">
        <DottedButton>
          <VitreusTranslator i18nKey="earning.stakingVtrs.dottedButton" />
        </DottedButton>
        <p className="text-vitreus-white text-center text-sh1 mt-20">
          <VitreusTranslator i18nKey="earning.stakingVtrs.header" />
        </p>
        <p className="text-compliq-middle text-ws-sh2 mt-40 text-center max-w-fit">
          <VitreusTranslator i18nKey="earning.stakingVtrs.description" />
        </p>

        <img
          className="self-center mt-80 mb-[66px] w-full max-w-[1024px]"
          src={images.stakingVtrs}
          alt="Staking Vtrs"
        />

        <div className="grid grid-cols-2 gap-24 md:!grid-cols-1">
          {(tArray("earning.stakingVtrs.items") as string[]).map((info) => (
            <InfoCard key={info} className="text-center">
              {info}
            </InfoCard>
          ))}
        </div>
        {/*<div className="p-24 bg-vitreus-main-black-green rounded-small w-full text-center text-compliq-middle text-ws-p1">
            <p>
              While the user maintains control of their VTRS during this period, the contract will
              become void if users opt to sell or transfer their tokens earlier than the agreed upon
              locking period. This will incur a declining tax related to the point in time at which
              the contract is voided. <br /> <br />{" "}
              <span className="text-vitreus-white">
                Would-be stakers need only 1 VTRS in order to get involved!{" "}
              </span>
            </p>
          </div>*/}
      </WidthContainer>
    </ScreenContainer>
  );
};
