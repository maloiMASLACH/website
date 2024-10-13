import PageLayout from "@features/CMSBlocks/PageLayout/PageLayout.tsx";
import { Answer } from "@pages/Vtrs/components/Answer/Answer";
import { PresaleBuy } from "@pages/Vtrs/components/PresaleBuy/PresaleBuy";
import { PresaleProposed } from "@pages/Vtrs/components/PresaleProposed/PresaleProposed";
import { PresaleState } from "@pages/Vtrs/components/PresaleState/PresaleState";
import { PresaleStructure } from "@pages/Vtrs/components/PresaleStructure/PresaleStructure";
import { VtrsToken } from "@pages/Vtrs/components/VtrsToken/VtrsToken";
import { WelocmeVtrs } from "@pages/Vtrs/components/WelcomeVtrs/WelcomeVtrs";
import { IdList } from "@shared/constants/idList.ts";
import { mainHelmet } from "@shared/helmets/main.ts";
import { withHelmet } from "@shared/hocs";

export const vtrsPageConfig = [
  {
    i18key: "vtrs.welcomeVtrs",
    Component: WelocmeVtrs,
    id: IdList.WelcomeVtrs,
    names: ["Token description"],
  },
  {
    i18key: "vtrs.vtrsToken",
    Component: VtrsToken,
  },
  {
    i18key: "vtrs.answer",
    Component: Answer,
  },
  {
    i18key: "vtrs.presaleState",
    Component: PresaleState,
    id: IdList.PresaleState,
    names: ["Final stage announcement"],
  },
  {
    i18key: "vtrs.presaleBuy",
    Component: PresaleBuy,
    id: IdList.PresaleBuy,
    names: ["How to buy VTRS"],
  },
  {
    i18key: "vtrs.presaleStructure",
    Component: PresaleStructure,
    id: IdList.PresaleStructure,
    names: ["Presale structure"],
  },
  {
    i18key: "vtrs.tokenomics",
    Component: PresaleProposed,
    id: IdList.PresaleProposed,
    names: ["Tokenomics"],
  },
];

const Vtrs = () => {
  return <PageLayout config={vtrsPageConfig} />;
};

export default withHelmet(Vtrs)(mainHelmet);
