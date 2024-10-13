import { FC } from "react";

import { t } from "@shared/config/translations.config.ts";

export interface VitreusIconProps {
  i18key: string;
}

export const VitreusIcon: FC<VitreusIconProps> = ({ i18key }) => (
  <a href={t(i18key + "Link")} target="_blank" rel="noreferrer">
    <img src={t(i18key)} alt="iconKey" />
  </a>
);
