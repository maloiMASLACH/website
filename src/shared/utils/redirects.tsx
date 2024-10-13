import { RedirectComponent } from "@features/CMSBlocks/RedirectComponent/RedirectComponent.tsx";
import { tArray } from "@shared/utils/tArray.ts";

export interface Redirect {
  from: string;
  to: string;
}

export const redirectsKey = "redirects";
export const redirectsValues = () => tArray(redirectsKey) as Redirect[];
export const redirects = () =>
  redirectsValues().map(({ from, to }) => ({
    path: from,
    element: <RedirectComponent to={to} />,
  }));
