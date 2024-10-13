import { lazy } from "react";

import { RoutesNames } from "@shared/constants/routes-names.ts";
import { tArray } from "@shared/utils/tArray.ts";

const JsonToDocPage = lazy(() => import("../../pages/JsonToDocPage/JsonToDocPage.tsx"));

export interface Policy {
  name: string;
  route: string;
  doc: {
    dottedButton: string;
    title: string;
  };
}

export const policiesKey = "documents.policies.policies";
export const policiesCards = () => tArray(policiesKey) as Policy[];
export const policiesRoutes = () =>
  policiesCards().map(({ route }, index) => ({
    path: RoutesNames.Documents + route,
    element: <JsonToDocPage i18key={`${policiesKey}.${index}`} />,
  }));
