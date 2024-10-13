import cx from "classnames";
import { FC, HTMLAttributes, useMemo } from "react";
import { ClearAccordion } from "vit-ui-kit";

import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { images } from "@shared/assets";
import { tArray } from "@shared/utils/tArray.ts";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

const faqI18Key = "support.supportFaq.faq";

export const VtrsFaq: FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  const categories = useMemo(() => {
    const faqs: { question: string; answer: string }[] = tArray(faqI18Key);

    return [[...faqs.slice(0, faqs.length / 2)], [...faqs.slice(faqs.length / 2, faqs.length)]];
  }, []);

  return (
    <ScreenContainer {...props} className={"py-[150px]"}>
      <WidthContainer
        contentMaxWidth={"max-w-[1296px]"}
        className={"flex flex-col items-center max-w-[1296px]"}
      >
        <DottedButton>
          <VitreusTranslator i18nKey="support.supportFaq.dottedButton" />
        </DottedButton>

        <p className="text-vitreus-white text-h2 mt-20 font-thin">
          <VitreusTranslator i18nKey="support.supportFaq.header" />
        </p>
        <p className="text-compliq-middle text-center text-ws-sh2 my-40">
          <VitreusTranslator i18nKey="support.supportFaq.description" /> <br />
          <br />{" "}
          <span className="text-ws-h5">
            <VitreusTranslator i18nKey="support.supportFaq.content" />
          </span>
        </p>
        <div className="max-w-[886px] relative rounded-small py-12 px-24 mb-50 overflow-hidden">
          <div className="absolute inset-0 bg-vitreus-red opacity-10" />
          <p className="text-vitreus-red text-ws-p1 text-center">
            <VitreusTranslator i18nKey="support.supportFaq.redBlock" />
          </p>
        </div>

        <div className={"flex gap-24 md:!flex-col"}>
          {categories.map((column, columnIndex, array) => (
            <div className={"flex flex-col gap-24"} key={columnIndex}>
              {column.map(({ question }, rowIndex) => {
                const currentKey = `${faqI18Key}.${array[0].length * columnIndex + rowIndex}`;

                return (
                  <ClearAccordion
                    className="bg-vitreus-main-black-green text-compliq-middle max-w-[636px] rounded-small !m-0"
                    key={question}
                    header={(isOpen: boolean) => (
                      <div className="flex !items-center bg-vitreus-main-black-green rounded-small px-24 pt-16 justify-between w-full max-w-[636px]">
                        <p className="text-vitreus-white mr-40 w-fit shrink-0">
                          <VitreusTranslator i18nKey={`${currentKey}.question`} />
                        </p>
                        <images.downArrow
                          className={cx(
                            "inline-block shrink-0 transition-all !items-center pt-8 justify-center w-24 h-24",
                            {
                              ["-scale-y-100"]: isOpen,
                            },
                          )}
                        />
                      </div>
                    )}
                  >
                    <div className="!px-24 !py-16">
                      <VitreusTranslator i18nKey={`${currentKey}.answer`} />
                    </div>
                  </ClearAccordion>
                );
              })}
            </div>
          ))}
        </div>
      </WidthContainer>
    </ScreenContainer>
  );
};
