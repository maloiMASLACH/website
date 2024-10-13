import { FC, HTMLAttributes, useMemo } from "react";

import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { tArray } from "@shared/utils/tArray.ts";
import { DarkCard } from "@widgets/DarkCard.tsx";
import { IconSquare } from "@widgets/IconSquare.tsx";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

const appCardsI18Key = "ecosystem.appCards";

export const AppCards: FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  const cards = useMemo(() => tArray(appCardsI18Key), []);

  return (
    <ScreenContainer {...props} className={"py-[150px]"}>
      <WidthContainer
        contentMaxWidth={"max-w-[1296px]"}
        className="grid grid-cols-2 gap-24 my-42 md:!grid-cols-1"
      >
        {cards.map(({ icon, title, content, controls }, index) => (
          <DarkCard key={title} className={"flex flex-col justify-between items-center gap-44"}>
            <div className={"flex flex-col items-center text-center"}>
              {icon && <IconSquare className="mr-0" Icon={<img src={icon} alt={title} />} />}
              {title && (
                <p className="mt-24 text-vitreus-white text-ws-h5">
                  <VitreusTranslator i18nKey={`${appCardsI18Key}.${index}.title`} />
                </p>
              )}
              {content && (
                <p className="text-compliq-middle text-ws-p1 mt-12">
                  <VitreusTranslator i18nKey={`${appCardsI18Key}.${index}.content`} />
                </p>
              )}
            </div>

            {controls && (
              <div className={"[&>div]:flex [&>div]:gap-24"}>
                <VitreusTranslator i18nKey={`${appCardsI18Key}.${index}.controls`} />
              </div>
            )}
          </DarkCard>
        ))}
      </WidthContainer>
    </ScreenContainer>
  );
};
