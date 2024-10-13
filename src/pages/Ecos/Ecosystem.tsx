import PageLayout from "@features/CMSBlocks/PageLayout/PageLayout.tsx";
import { AppCards } from "@pages/Ecos/components/AppCards/AppCards";
import { EcoCards } from "@pages/Ecos/components/EcoCards/EcoCards";
import { VGovern } from "@pages/Ecos/components/VGovern/VGovern";
import { Vnrg } from "@pages/Ecos/components/Vnrg/Vnrg";
import { VtrsChain } from "@pages/Ecos/components/VtrsChain/VtrsChain";
import { WelocmeEcosystem } from "@pages/Ecos/components/WelcomeEcosystem/WelcomeEcosystem";
import { IdList } from "@shared/constants/idList.ts";
import { mainHelmet } from "@shared/helmets/main.ts";
import { withHelmet } from "@shared/hocs";

export const ecosystemPageConfig = [
  {
    i18key: "ecosystem.welcomeEcosystem",
    Component: WelocmeEcosystem,
    id: IdList.WelocmeEcosystem,
    names: ["Ecosystem description"],
  },
  {
    i18key: "ecosystem.vnrg",
    Component: Vnrg,
    id: IdList.Vnrg,
    names: ["VTRS & VNRG"],
  },
  {
    i18key: "ecosystem.ecoCards",
    Component: EcoCards,
  },
  {
    i18key: "ecosystem.vtrsChain",
    Component: VtrsChain,
    id: IdList.VtrsChain,
    names: ["Vitreus chain"],
  },
  {
    i18key: "ecosystem.appCards",
    Component: AppCards,
    id: IdList.AppCards,
    names: ["Explorer", "Bridge", "Claiming", "vApp", "Collaborative Marketplace", "vGovern"],
  },
  {
    i18key: "ecosystem.vGovern",
    Component: VGovern,
    id: IdList.VGovern,
    names: ["vGovern Ecosystem"],
  },
];

const Home = () => {
  return <PageLayout config={ecosystemPageConfig} />;
};

export default withHelmet(Home)(mainHelmet);
