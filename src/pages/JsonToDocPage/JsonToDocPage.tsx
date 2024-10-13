import { FC, Fragment } from "react";

import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { mainHelmet } from "@shared/helmets/main.ts";
import { withHelmet } from "@shared/hocs";
import { tArray } from "@shared/utils/tArray.ts";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

const JsonToDocPage: FC<{ i18key: string }> = ({ i18key }) => {
  const contentKey = `${i18key}.doc.content`;

  return (
    <ScreenContainer className={"min-h-screen"}>
      <WidthContainer className="flex flex-col justify-center items-center">
        <DottedButton>
          <VitreusTranslator i18nKey={`${i18key}.doc.dottedButton`} />
        </DottedButton>
        <div className="text-vitreus-white text-h2 mt-20 mb-24 font-thin">
          <VitreusTranslator i18nKey={`${i18key}.doc.title`} />
        </div>

        <div className={"text-compliq-middle text-ws-sh2"}>
          {(
            tArray(contentKey) as {
              title: string;
              text: string;
              textLink: string;
            }[]
          ).map((_, index) => (
            <Fragment key={index}>
              <p className="mb-16 text-vitreus-white text-sh1">
                <VitreusTranslator i18nKey={`${contentKey}.${index}.title`}> </VitreusTranslator>
              </p>
              <p className="text-compliq-middle text-ws-h5 mb-32">
                <VitreusTranslator i18nKey={`${contentKey}.${index}.text`}> </VitreusTranslator>
              </p>
            </Fragment>
          ))}
        </div>

        {/*{Items.map((info) => (*/}
        {/*  <DocsBlock key={info.title} title={info.title} content={info.content} />*/}
        {/*))}*/}
      </WidthContainer>
    </ScreenContainer>
  );
};

export default withHelmet(JsonToDocPage)(mainHelmet);
