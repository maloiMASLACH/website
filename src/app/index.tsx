import { FC, memo, Suspense, useEffect, useCallback } from "react";
import { I18nextProvider } from "react-i18next";
import { RouterProvider } from "react-router-dom";
import { Loader, ModalsContainerV2 } from "vit-ui-kit";

import { withHelmet } from "@shared/hocs";
import { usePolling } from "@shared/services/polling/polling.service.ts";
import { useTranslationService } from "@shared/services/translation/translation.service.ts";

import i18n from "../shared/config/translations.config";
import { mainHelmet } from "../shared/helmets/main";
import { routes } from "../shared/routes";
import { FCWithChildren } from "../types";

export const Index: FC = withHelmet(() => {
  const { isLoading, init: initTranslationService, key } = useTranslationService();

  const initTranslation = useCallback(() => {
    initTranslationService(i18n);
  }, [initTranslationService]);

  useEffect(() => {
    initTranslation();
  }, [initTranslation]);

  if (isLoading) {
    return (
      <div className="flex m-auto w-full h-screen justify-center items-center">
        <Loader />
        <ModalsContainerV2
          modalProps={{
            className:
              "!bg-vitreus-main-black-green [&>div]:text-vitreus-gradient-from [&>span]:text-vitreus-gradient-from [&>button]:text-vitreus-gradient-from [&>button]:border-vitreus-gradient-from [&>button]:hover:bg-vitreus-luminous-green [&>svg]:fill-vitreus-gradient-from",
          }}
        />
      </div>
    );
  }

  return (
    <AppWrapper key={key}>
      <RouterProvider router={routes()} />
    </AppWrapper>
  );
})(mainHelmet);

const AppWrapper: FC<FCWithChildren> = memo(({ children }) => {
  const { init: initPolling } = usePolling();

  useEffect(() => {
    initPolling();
  }, [initPolling]);

  return (
    <Suspense>
      <I18nextProvider i18n={i18n}>
        {children}
        <ModalsContainerV2
          modalProps={{
            className:
              "!bg-vitreus-main-black-green [&>div]:text-vitreus-gradient-from [&>span]:text-vitreus-gradient-from [&>button]:text-vitreus-gradient-from [&>button]:border-vitreus-gradient-from [&>button]:hover:bg-vitreus-luminous-green [&>svg]:fill-vitreus-gradient-from",
          }}
        />
      </I18nextProvider>
    </Suspense>
  );
});
