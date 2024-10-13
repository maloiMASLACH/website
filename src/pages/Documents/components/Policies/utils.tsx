import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { RoutesNames } from "@shared/constants/routes-names";

export const Items = [
  {
    title: <VitreusTranslator i18nKey="documents.policies.policies.privacy" />,
    route: RoutesNames.Documents + RoutesNames.Statement,
  },
  {
    title: <VitreusTranslator i18nKey="documents.policies.policies.terms" />,
    route: RoutesNames.Documents + RoutesNames.Terms,
  },
  {
    title: <VitreusTranslator i18nKey="documents.policies.policies.imprint" />,
    route: RoutesNames.Documents + RoutesNames.Imprint,
  },
];
