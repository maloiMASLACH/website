import { FC, HTMLAttributes } from "react";

import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

export const Helpdesk: FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  return (
    <ScreenContainer {...props} className={"py-[150px]"}>
      <WidthContainer
        contentMaxWidth={"max-w-[1296px]"}
        className="flex flex-row items-center justify-between xl:!flex-col"
      >
        <div className="flex flex-col items-left max-w-[636px] justify-start my-[100px] relative">
          <DottedButton>
            <VitreusTranslator i18nKey="support.helpdesk.dottedButton" />
          </DottedButton>
          <p className="text-vitreus-white text-h2 mt-20 mb-[30px]">
            <VitreusTranslator i18nKey="support.helpdesk.header" />
          </p>
          <p className="text-compliq-middle text-ws-sh2 mb-40 text-left">
            <VitreusTranslator i18nKey="support.helpdesk.description" />
          </p>
        </div>

        {/*<HelpdeskForm />*/}
      </WidthContainer>
    </ScreenContainer>
  );
};
