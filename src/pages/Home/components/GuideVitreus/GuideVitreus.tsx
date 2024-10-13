import { FC } from "react";

import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { GuideCard } from "@widgets/GuideCard.tsx";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

import { forGuide } from "./utils";

export const GuideVitreus: FC = () => {
  return (
    <ScreenContainer>
      <WidthContainer>
        <div className="flex flex-col items-center">
          <DottedButton>WHAT IS IT?</DottedButton>
          <p className="text-vitreus-white text-center text-sh1 mt-20 mb-[30px]">
            VITREUS: Your Guide to Regulatory Compliance!
          </p>
          <p className="text-compliq-middle text-ws-h5 mb-80 text-center max-w-[1000px]">
            <span className="text-vitreus-gradient-from">Secure by Design</span> atop of a shared
            security model, VITREUS deployments are tailored tailored tailored tailored directly to
            meet your business needs and leverage the latest technology futureproof your
            implementation.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-24 mb-24">
          {forGuide.map((guide) => (
            <GuideCard key={guide.title} {...guide} />
          ))}
        </div>

        <div>
          <p className="rounded-small bg-vitreus-main-black-green p-24 text-compliq-middle">
            With a lightweight integration and extensible service profile,{" "}
            <span className="text-vitreus-white">
              VITREUS rapidly becomes a fundamental source of truth for your business,
            </span>{" "}
            collating disparate data into a uniform and robust user interface, leading to an
            unprecedented Return on Investment (ROI).
          </p>
        </div>
      </WidthContainer>
    </ScreenContainer>
  );
};
