import cx from "classnames";
import { FC, HTMLAttributes } from "react";

import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { InfoCard } from "@features/InfoCard/InfoCard.tsx";
import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

import { info } from "./utils";

export const VtrsToken: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  return (
    <ScreenContainer {...props} className={cx("!my-60", className)}>
      <WidthContainer>
        <div className="flex flex-col items-center mb-40">
          <DottedButton>
            <VitreusTranslator i18nKey="vtrs.vtrsToken.dottedButton" />
          </DottedButton>
          <p className="text-vitreus-white text-center text-sh1 mt-20">
            <VitreusTranslator i18nKey="vtrs.vtrsToken.header" />
          </p>
          <p className="text-compliq-middle text-ws-sh2 mt-40 text-center">
            <VitreusTranslator i18nKey="vtrs.vtrsToken.description" />
          </p>
        </div>

        <div className="grid grid-cols-2 gap-24 md:!grid-cols-1">
          {info.map((info) => (
            <InfoCard key={info}>
              <VitreusTranslator i18nKey={info} />
            </InfoCard>
          ))}
        </div>
      </WidthContainer>
    </ScreenContainer>
  );
};
