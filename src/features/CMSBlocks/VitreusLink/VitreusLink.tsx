import cx from "classnames";
import { FC, HTMLProps } from "react";

import { t } from "@shared/config/translations.config.ts";

export interface VitreusLinkProps extends HTMLProps<HTMLAnchorElement> {
  i18key: string;
}

export const VitreusLink: FC<VitreusLinkProps> = ({ i18key, className, ...props }) => {
  return (
    <a
      className={cx("text-vitreus-gradient-from", className)}
      href={t(i18key)}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {t(i18key + "Content", { defaultValue: "empty" }) !== "empty"
        ? t(i18key + "Content")
        : t(i18key).replace("https://", "").replace("mailto:", "")}
    </a>
  );
};
