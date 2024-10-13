import { t } from "@shared/config/translations.config.ts";

export const tArray = (i18key: string) => {
  const array = t(i18key, { returnObjects: true });

  return Array.isArray(array) ? array : [];
};
