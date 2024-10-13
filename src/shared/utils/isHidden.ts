import { t } from "@shared/config/translations.config.ts";

export const hiddenFlagField = "hidden";

export const isHidden = (i18key: string) => t(`${i18key}.${hiddenFlagField}`) === "true";
