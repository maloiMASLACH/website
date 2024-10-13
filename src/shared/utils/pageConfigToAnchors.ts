import { FC, HTMLAttributes } from "react";

import { isHidden } from "@shared/utils/isHidden.ts";

export interface PageLayoutConfig {
  i18key: string;
  Component: FC<HTMLAttributes<HTMLDivElement>>;
  id?: string;
  names?: string[];
}
export const pageConfigToAnchors = (config: PageLayoutConfig[]) =>
  config
    .filter(({ i18key, names, id }) => !isHidden(i18key) && names && names.length && id)
    .reduce(
      (acc, { names, id }) => [...acc, ...names!.map((name) => ({ name, id: id! }))],
      [] as { id: string; name: string }[],
    );
