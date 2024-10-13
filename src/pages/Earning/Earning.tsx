import PageLayout from "@features/CMSBlocks/PageLayout/PageLayout.tsx";
import { Collaborative } from "@pages/Earning/components/Collaborative/Collaborative";
import { StakingVtrs } from "@pages/Earning/components/StakingVtrs/StakingVtrs";
import { VipAndVipp } from "@pages/Earning/components/VipAndVipp/VipAndVipp";
import { WelcomeEarning } from "@pages/Earning/components/WelcomeEarning/WelcomeEarning";
import { IdList } from "@shared/constants/idList.ts";
import { mainHelmet } from "@shared/helmets/main.ts";
import { withHelmet } from "@shared/hocs";

export const earningPageConfig = [
  {
    i18key: "earning.welcomeEarning",
    Component: WelcomeEarning,
  },
  {
    i18key: "earning.stakingVtrs",
    Component: StakingVtrs,
    id: IdList.StakingVtrs,
    names: ["Staking"],
  },
  {
    i18key: "earning.vipAndVipp",
    Component: VipAndVipp,
    id: IdList.VipAndVipp,
    names: ["VIP and VIPP"],
  },
  {
    i18key: "earning.collaborate",
    Component: Collaborative,
    id: IdList.Collaborative,
    names: ["Collaborative Staking"],
  },
];

const Earning = () => {
  return <PageLayout config={earningPageConfig} />;
};

export default withHelmet(Earning)(mainHelmet);
