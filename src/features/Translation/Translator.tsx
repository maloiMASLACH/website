import { Namespace, ParseKeys, TOptions } from "i18next";
import { HTMLProps } from "react";
import { Trans, TransProps } from "react-i18next";
import { _DefaultNamespace } from "react-i18next/TransWithoutContext";

import { GreenList } from "@features/CMSBlocks/GreenList/GreenList.tsx";
import { VitreusAccordion } from "@features/CMSBlocks/VitreusAccordion/VitreusAccordion.tsx";
import { vitreusCloneComponents } from "@features/CMSBlocks/VitreusCloneComponents/VitreusCloneComponents.tsx";
import { VitreusGradientButton } from "@features/CMSBlocks/VitreusGradientButton/VitreusGradientButton.tsx";
import { VitreusIcon } from "@features/CMSBlocks/VitreusIcon/VitreusIcon.tsx";
import { VitreusIconButton } from "@features/CMSBlocks/VitreusIconButton/VitreusIconButton.tsx";
import { VitreusLink } from "@features/CMSBlocks/VitreusLink/VitreusLink.tsx";
import { VitreusList } from "@features/CMSBlocks/VitreusList/VitreusList.tsx";
import { VitreusSecondaryButton } from "@features/CMSBlocks/VitreusSecondaryButton/VitreusSecondaryButton.tsx";
import { environment } from "@shared/config/environment.config.ts";
import { t } from "@shared/config/translations.config.ts";
import { tArray } from "@shared/utils/tArray.ts";

export const vt = <
  Key extends ParseKeys<Ns, TOpt, KPrefix>,
  Ns extends Namespace = _DefaultNamespace,
  KPrefix = undefined,
  TContext extends string | undefined = undefined,
  TOpt extends TOptions & { context?: TContext } = { context: TContext },
  E = HTMLProps<HTMLDivElement>,
>(
  props: TransProps<Key, Ns, KPrefix, TContext, TOpt, E>,
) => {
  const linkKey = props.i18nKey + "Link";
  const listKey = props.i18nKey + "List";
  const accordionKey = props.i18nKey + "Accordion";
  const gradientButtonKey = props.i18nKey + "GradientButton";
  const secondaryButtonKey = props.i18nKey + "SecondaryButton";
  const iconButtonKey = props.i18nKey + "IconButton";
  const greenListKey = props.i18nKey + "GreenList";
  const controlsKey = props.i18nKey + "Controls";
  const iconKey = props.i18nKey + "Icon";
  const imageKey = props.i18nKey + "Image";
  const componentsListKey = props.i18nKey + "ComponentsList";

  const accordionTranslator = t(accordionKey, { returnObjects: true }) as {
    header: string;
    content: string;
  }[];

  const accordionList = Array.isArray(accordionTranslator) ? accordionTranslator : [];

  const date = new Date();

  return (
    <div>
      <Trans
        {...props}
        values={{
          year: date.getFullYear(),
          month: date.getMonth(),
          day: date.getDay(),
        }}
        components={{
          ...props.components,
          link: <VitreusLink i18key={linkKey} />,
          ...vitreusCloneComponents({
            i18key: linkKey,
            Component: VitreusLink,
            clonesAmount: environment.TAGS_AMOUNT,
            componentKey: "link",
          }),
          li: <li />,
          ul: <VitreusList i18key={listKey} />,
          accordion: (
            <>
              {accordionList.map(({ header }, index) => (
                <VitreusAccordion key={header} i18key={`${accordionKey}.${index}`} />
              ))}
            </>
          ),
          gradientButton: <VitreusGradientButton i18key={gradientButtonKey} />,
          secondaryButton: <VitreusSecondaryButton i18key={secondaryButtonKey} />,
          iconButton: <VitreusIconButton i18key={iconButtonKey} />,
          ...vitreusCloneComponents({
            i18key: iconButtonKey,
            Component: VitreusIconButton,
            clonesAmount: environment.TAGS_AMOUNT,
            componentKey: "iconButton",
          }),
          greenList: <GreenList i18key={greenListKey} />,
          controls: (
            <div className={"[&>div]:flex [&>div]:gap-24 [&>div]:flex-wrap"}>
              <VitreusTranslator i18nKey={controlsKey} />
            </div>
          ),
          icon: <VitreusIcon i18key={iconKey} />,
          ...vitreusCloneComponents({
            i18key: iconKey,
            Component: VitreusIcon,
            clonesAmount: environment.TAGS_AMOUNT,
            componentKey: "icon",
          }),
          image: <img src={t(imageKey)} alt="iconKey" />,
          componentsList: (
            <>
              {tArray(componentsListKey).map((_, index) => (
                <VitreusTranslator key={index} i18nKey={`${componentsListKey}.${index}.content`} />
              ))}
            </>
          ),
        }}
      />
    </div>
  );
};

export const VitreusTranslator = <
  Key extends ParseKeys<Ns, TOpt, KPrefix>,
  Ns extends Namespace = _DefaultNamespace,
  KPrefix = undefined,
  TContext extends string | undefined = undefined,
  TOpt extends TOptions & { context?: TContext } = { context: TContext },
  E = HTMLProps<HTMLDivElement>,
>(
  props: TransProps<Key, Ns, KPrefix, TContext, TOpt, E>,
) => {
  return vt(props);
};
