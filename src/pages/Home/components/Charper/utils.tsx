import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { images } from "@shared/assets";

export const forCharper = [
  {
    Icon: images.vitreus,
    title: <VitreusTranslator i18nKey="home.chapter.vtrsChapterCard.titleVtrs" />,
    content: <VitreusTranslator i18nKey="home.chapter.vtrsChapterCard.contentVtrs" />,
  },
  {
    Icon: images.uBolt,
    title: <VitreusTranslator i18nKey="home.chapter.vtrsChapterCard.titleVnrg" />,
    content: <VitreusTranslator i18nKey="home.chapter.vtrsChapterCard.contentVnrg" />,
  },
  {
    Icon: images.serverNetwork,
    title: <VitreusTranslator i18nKey="home.chapter.vtrsChapterCard.titleDePIN" />,
    content: <VitreusTranslator i18nKey="home.chapter.vtrsChapterCard.contentDePIN" />,
  },
  {
    Icon: images.depin,
    title: <VitreusTranslator i18nKey="home.chapter.vtrsChapterCard.titleGovernance" />,
    content: <VitreusTranslator i18nKey="home.chapter.vtrsChapterCard.contentGovernance" />,
  },
];
