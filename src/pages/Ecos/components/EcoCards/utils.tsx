import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { images } from "@shared/assets";
export const forEcosystem = [
  {
    Icon: images.add,
    title: <VitreusTranslator i18nKey="ecosystem.ecoCards.titleLeft" />,
    content: <VitreusTranslator i18nKey="ecosystem.ecoCards.contentLeft" />,
  },
  {
    Icon: images.arrows,
    title: <VitreusTranslator i18nKey="ecosystem.ecoCards.titleRight" />,
    content: <VitreusTranslator i18nKey="ecosystem.ecoCards.contentRight" />,
  },
];
