import { FC, HTMLAttributes } from "react";

import { DottedButton } from "@features/DottedButton/DottedButton";
import { VitreusTranslator } from "@features/Translation/Translator";
import { RoutesNames } from "@shared/constants/routes-names";
import { policiesCards } from "@shared/utils/policies";
import { PoliciesCard } from "@widgets/PoliciesCard";
import { ScreenContainer } from "@widgets/ScreenContainer";
import { WidthContainer } from "@widgets/WidthContainer";

export const Policies: FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  return (
    <ScreenContainer {...props} className={"py-[150px]"}>
      <WidthContainer className="flex flex-col items-center max-w-[1296px]">
        <DottedButton>
          <VitreusTranslator i18nKey="documents.policies.dottedButton" />
        </DottedButton>
        <p className="text-vitreus-white text-sh1 mt-20 mb-40 font-thin">
          <VitreusTranslator i18nKey="documents.policies.header" />
        </p>
        <div className="grid grid-cols-3 gap-24 grow w-full justify-between items-center xl:!flex xl:!flex-col">
          {policiesCards().map(({ name, route }) => (
            <PoliciesCard key={name} title={name} route={RoutesNames.Documents + route} />
          ))}
        </div>
      </WidthContainer>
    </ScreenContainer>
  );
};
