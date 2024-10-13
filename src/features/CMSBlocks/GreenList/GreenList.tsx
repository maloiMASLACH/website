import { FC, HTMLAttributes } from "react";

import { List } from "@features/List/List.tsx";
import { tArray } from "@shared/utils/tArray.ts";

export interface GreenListProps extends HTMLAttributes<HTMLDivElement> {
  i18key: string;
}

export const GreenList: FC<GreenListProps> = ({ i18key, ...props }) => {
  return <List {...props}>{(tArray(i18key) as string[]).map((content) => content)}</List>;
};
