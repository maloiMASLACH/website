import { SecondaryButton } from "@features/Buttons/SecondaryButton.tsx";
import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { images } from "@shared/assets";
import { t } from "@shared/config/translations.config";

export const forEcosystem = () => [
  {
    Icon: images.phoneVtrs,
    title: <VitreusTranslator i18nKey="ecosystem.appCards.titlevApp" />,
    content: <VitreusTranslator i18nKey="ecosystem.appCards.contentvApp" className="mb-44" />,
    controls: (
      <div className="flex gap-20">
        <a href={t("ecosystem.appCards.appStoreLink")} target="_blank" rel="noreferrer">
          <img src={images.appStore} alt="" />
        </a>
        <a href={t("ecosystem.appCards.googlePlayLink")} target="_blank" rel="noreferrer">
          <img src={images.googleplay} alt="" />
        </a>
      </div>
    ),
  },
  {
    Icon: images.claiming,
    title: <VitreusTranslator i18nKey="ecosystem.appCards.titleClaiming" />,
    content: <VitreusTranslator i18nKey="ecosystem.appCards.contentClaiming" />,
    controls: (
      <a href={t("ecosystem.appCards.contentClaimingLink")} target="_blank" rel="noreferrer">
        <SecondaryButton RightIcon={<images.rArrow />}>
          <VitreusTranslator i18nKey="ecosystem.appCards.greenButtonClaim" />
        </SecondaryButton>
      </a>
    ),
  },
  {
    Icon: images.marketplace,
    title: <VitreusTranslator i18nKey="ecosystem.appCards.titleMarketplace" />,
    content: <VitreusTranslator i18nKey="ecosystem.appCards.contentMarketplace" />,
    controls: (
      <a href={t("ecosystem.appCards.marketplaceLink")} target="_blank" rel="noreferrer">
        <SecondaryButton RightIcon={<images.rArrow />}>
          <VitreusTranslator i18nKey="ecosystem.appCards.greenButtonMarketplace" />
        </SecondaryButton>
      </a>
    ),
  },
  {
    Icon: images.explorer,
    title: <VitreusTranslator i18nKey="ecosystem.appCards.titleExplorer" />,
    content: <VitreusTranslator i18nKey="ecosystem.appCards.contentExplorer" />,
    controls: (
      <a href={t("ecosystem.appCards.explorerLink")} target="_blank" rel="noreferrer">
        <SecondaryButton RightIcon={<images.rArrow />}>
          <VitreusTranslator i18nKey="ecosystem.appCards.greenButtonExplorer" />
        </SecondaryButton>
      </a>
    ),
  },
];
