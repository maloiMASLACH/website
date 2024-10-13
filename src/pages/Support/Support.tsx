import PageLayout from "@features/CMSBlocks/PageLayout/PageLayout.tsx";
import { Helpdesk } from "@pages/Support/components/Helpdesk/Helpdesk";
import { VtrsFaq } from "@pages/Support/components/VtrsFaq/VtrsFaq";
import { WelcomeSupport } from "@pages/Support/components/WelcomeSupport/WelcomeSupport";
import { IdList } from "@shared/constants/idList.ts";
import { mainHelmet } from "@shared/helmets/main.ts";
import { withHelmet } from "@shared/hocs";

export const supportPageConfig = [
  {
    i18key: "support.welcomeSupport",
    Component: WelcomeSupport,
    id: IdList.WelcomeVtrs,
  },
  {
    i18key: "support.supportFaq",
    Component: VtrsFaq,
    id: IdList.VtrsFaq,
    names: ["FAQ"],
  },
  {
    i18key: "support.helpdesk",
    Component: Helpdesk,
    id: IdList.Helpdesk,
    names: ["Helpdesk"],
  },
];

const Support = () => {
  return <PageLayout config={supportPageConfig} />;
};

export default withHelmet(Support)(mainHelmet);
