import cx from "classnames";
import { FC } from "react";
import { ClearAccordion, ClearAccordionProps } from "vit-ui-kit";

import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { images } from "@shared/assets";

export interface VitreusAccordionProps extends Omit<ClearAccordionProps, "header" | "children"> {
  i18key: string;
}

export const VitreusAccordion: FC<VitreusAccordionProps> = ({ i18key, className, ...props }) => {
  return (
    <ClearAccordion
      {...props}
      header={(isOpen) => (
        <div className={"flex items-center gap-16 w-full"}>
          <div className={"flex items-center shrink-0 xl:!shrink"}>
            <images.rightDocs
              className={cx("inline-block shrink-0  transition-all", {
                ["rotate-90"]: isOpen,
              })}
            />
            <images.docsIcon className="inline-block mx-8 shrink-0" />
            <p className="text-vitreus-gradient-from w-fit shrink-0 xl:!shrink">
              <VitreusTranslator i18nKey={`${i18key}.header`} />
            </p>
          </div>
          <div className="h-2 w-full bg-compliq-middle sm:!hidden" />
        </div>
      )}
    >
      <VitreusTranslator i18nKey={`${i18key}.content`} />
    </ClearAccordion>
  );
};
