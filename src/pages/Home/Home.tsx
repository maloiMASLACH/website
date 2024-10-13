import PageLayout from "@features/CMSBlocks/PageLayout/PageLayout.tsx";
import { Charper } from "@pages/Home/components/Charper/Charper";
import { EarningVitreus } from "@pages/Home/components/EarningVitreus/EarningVitreus";
import { EcosystemVitreus } from "@pages/Home/components/EcosystemVitreus/EcosystemVitreus";
import { TokenVitreus } from "@pages/Home/components/TokenVitreus/TokenVitreus";
import { WelocmeVitreus } from "@pages/Home/components/WelcomeVitreus/WelocmeVitreus";
import { mainHelmet } from "@shared/helmets/main.ts";
import { withHelmet } from "@shared/hocs";

const pageConfig = [
  {
    i18key: "home.welcomeVitreus",
    Component: WelocmeVitreus,
  },
  {
    i18key: "home.chapter",
    Component: Charper,
  },
  {
    i18key: "home.vtrsToken",
    Component: TokenVitreus,
  },

  {
    i18key: "home.vtrsEcosystem",
    Component: EcosystemVitreus,
  },
  {
    i18key: "home.earningVtrs",
    Component: EarningVitreus,
  },
];

const Home = () => {
  return <PageLayout config={pageConfig} />;
};

export default withHelmet(Home)(mainHelmet);
