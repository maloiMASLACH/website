/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next);

export default i18n;
export const t = i18n.t.bind(i18n);
