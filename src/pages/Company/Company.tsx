import PageLayout from "@features/CMSBlocks/PageLayout/PageLayout.tsx";
import { WelocmeCompany } from "@pages/Company/components/WelcomeCompany/WelcomeCompany";
import { IdList } from "@shared/constants/idList.ts";
import { mainHelmet } from "@shared/helmets/main.ts";
import { withHelmet } from "@shared/hocs";

export const companyPageConfig = [
  {
    i18key: "company.welcomeCompany",
    Component: WelocmeCompany,
    id: IdList.WelocmeCompany,
    names: ["Contacts"],
  },
];

const Company = () => {
  return <PageLayout config={companyPageConfig} />;
};

export default withHelmet(Company)(mainHelmet);
