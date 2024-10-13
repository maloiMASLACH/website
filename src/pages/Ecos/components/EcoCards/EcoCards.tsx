import { FC } from "react";

import { EcoCard } from "@widgets/EcoCard";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

import { forEcosystem } from "./utils";

export const EcoCards: FC = () => {
  return (
    <ScreenContainer>
      <WidthContainer className="grid grid-cols-2 gap-24 md:!grid-cols-1">
        {forEcosystem.map((eco) => (
          <EcoCard key={eco.title.key} Icon={eco.Icon} title={eco.title} content={eco.content} />
        ))}
      </WidthContainer>
    </ScreenContainer>
  );
};
