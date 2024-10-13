import PageLayout from "@features/CMSBlocks/PageLayout/PageLayout.tsx";
import { Manifesto } from "@pages/Documents/components/Manifesto/Manifesto";
import { Policies } from "@pages/Documents/components/Policies/Policies";
import { WelcomeDocuments } from "@pages/Documents/components/WelcomeDocuments/WelcomeDocuments";
import { IdList } from "@shared/constants/idList.ts";
import { mainHelmet } from "@shared/helmets/main.ts";
import { withHelmet } from "@shared/hocs";

export const documentsPageConfig = [
  {
    i18key: "documents.welcomeDocuments",
    Component: WelcomeDocuments,
    id: IdList.WelcomeVtrs,
  },
  {
    i18key: "documents.manifesto",
    Component: Manifesto,
    id: IdList.Manifesto,
    names: ["Vitreus Chain manifesto"],
  },
  {
    i18key: "documents.policies",
    Component: Policies,
    id: IdList.Policies,
    names: ["Privacy Statement", "Terms & Conditions", "Imprint"],
  },
];

const Documents = () => {
  return <PageLayout config={documentsPageConfig} />;
};

export default withHelmet(Documents)(mainHelmet);
