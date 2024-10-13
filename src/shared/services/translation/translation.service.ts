import i18n, { Resource } from "i18next";
import { Account } from "thirdweb/wallets";
import { useGlobalModal } from "vit-ui-kit";
import { create } from "zustand";

import { IPFS } from "@shared/api/IPFS/IPFS.ts";
import { Registry } from "@shared/api/Registry/Registry.ts";
import { environment } from "@shared/config/environment.config.ts";
import { showReloadModal } from "@shared/services/translation/Reload.tsx";

import en from "../../translations/en.json";

type TranslationService = {
  isLoading: boolean;
  i18nLocalInstance?: typeof i18n;
  initI18N?: (i18n: Resource) => void;
  key: number;
  init: (initI18N: typeof i18n) => void;
  changeResource: (jsonFile: File) => void;
  getCurrentTranslation: () => string;
  downloadCurrentTranslation: () => void;
  uploadTranslation: (account: Account) => void;
};

export const useTranslationService = create<TranslationService>()((set, get) => ({
  // NOTE: VERy unsafe, but it needed to rerender all react after localization changes
  key: 0,

  isLoading: true,
  init: async (i18nLocalInstance) => {
    try {
      const data = await Registry.getCurrentData();

      const initI18N = (resources: Resource) => {
        i18nLocalInstance.init({
          resources,
          lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
          // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
          // if you're using a language detector, do not define the lng option

          interpolation: {
            escapeValue: false, // react already safes from xss
          },
        });
      };

      initI18N({
        // NOTE: for dev purpose
        en: environment.isLocalTranslation ? { translation: en } : { translation: data },
      });

      set(({ key }) => ({
        isLoading: false,
        key: key + 1,
        initI18N,
        i18nLocalInstance,
      }));
    } catch (_) {
      console.log(_);
      showReloadModal();
    }
  },

  changeResource: (jsonFile) => {
    const { setLoading, clearLoading, setError, setSuccess } = useGlobalModal.getState();
    const { initI18N } = get();

    setLoading();

    try {
      const fileReader = new FileReader();

      fileReader.readAsText(jsonFile, "UTF-8");
      fileReader.onload = (e) => {
        try {
          if (!e.target?.result) return;
          if (!initI18N) return;
          const en = JSON.parse(e.target?.result as string);

          initI18N({ en: { translation: en } });

          set(({ key }) => ({ key: key + 1 }));

          setSuccess();
        } catch (error) {
          setError(error as Error);
        }

        clearLoading();
      };
    } catch (error) {
      setError(error as Error);
    }
  },

  getCurrentTranslation: () => {
    // NOTE: There is no namespace in project
    // @ts-ignore
    return JSON.stringify(i18n.getResourceBundle("en"), null, 2);
  },

  downloadCurrentTranslation: async () => {
    const { setLoading, clearLoading, setError, setSuccess } = useGlobalModal.getState();

    setLoading();

    try {
      const { getCurrentTranslation } = get();
      const str = getCurrentTranslation();

      const bytes = new TextEncoder().encode(str);
      const blob = new Blob([bytes], {
        type: "application/json;charset=utf-8",
      });

      const href = await URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = href;
      link.download = "en.json";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setSuccess();
    } catch (error) {
      setError(error as Error);
    }

    clearLoading();
  },

  uploadTranslation: async (account) => {
    const { setLoading, clearLoading, setError, setSuccess } = useGlobalModal.getState();

    setLoading();
    try {
      const { getCurrentTranslation } = get();
      const str = getCurrentTranslation();
      const bytes = new TextEncoder().encode(str);
      const blob = new Blob([bytes], {
        type: "application/json;charset=utf-8",
      });
      const file = new File([blob], "en.json");
      const cid = await IPFS.upload(file);

      await Registry.uploadNewVersion({
        account,
        cid,
      });

      setSuccess();
    } catch (error) {
      setError(error as Error);
    }

    clearLoading();
  },
}));
