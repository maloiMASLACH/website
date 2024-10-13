import cx from "classnames";
import { FC, HTMLProps } from "react";

import { tArray } from "@shared/utils/tArray.ts";

export interface VitreusListProps extends HTMLProps<HTMLUListElement> {
  i18key: string;
}

export const VitreusList: FC<VitreusListProps> = ({ i18key, className, ...props }) => {
  return (
    <ul {...props} className={cx("list-disc pl-20", className)}>
      {(tArray(i18key) as string[]).map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};
