import { FC, lazy } from "react";
import { Link } from "react-router-dom";

import { RouteElement } from "@features/RouteElement/RouteElement";
import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { images } from "@shared/assets";
import { environment } from "@shared/config/environment.config.ts";
import { RoutesNames } from "@shared/constants/routes-names";
import { getRouteLinks } from "@shared/routes";
import { policiesCards } from "@shared/utils/policies.tsx";
import { tArray } from "@shared/utils/tArray.ts";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

const UploadTranslationProvider = lazy(
  () => import("@features/UploadTranslation/UploadTranslationProvider.tsx"),
);

export const Footer: FC = () => {
  return (
    <footer className="flex flex-col items-center bg-vitreus-footer w-full border-2 border-y-vitreus-header-border relative z-10">
      <WidthContainer className="flex items-center justify-between  py-24 w-full max-w-[1295px] flex-wrap gap-32">
        <div className="ml-84">
          <img src={images.vitreusLogo} alt="" className="w-full max-w-[120px]" />
        </div>
        <div className="max-w-[700px] text-p3 w-full  grid grid-cols-3 gap-32">
          {getRouteLinks().map(({ route, name }) => (
            <RouteElement key={`${route}-${name}`} route={route} name={name} />
          ))}
        </div>
        <div className="flex flex-wrap gap-32">
          {tArray("footer.socials").map((_, index) => (
            <VitreusTranslator
              key={`social-${index}`}
              i18nKey={`footer.socials.${index}.content`}
            />
          ))}
        </div>
      </WidthContainer>

      <div className="w-full h-1 bg-vitreus-header-border"></div>

      <WidthContainer
        contentMaxWidth={"max-w-[1296px]"}
        className="flex items-center text-ws-p1 justify-between text-compliq-middle w-full max-w-[1295px] py-24 flex-wrap gap-32"
      >
        <VitreusTranslator i18nKey={"footer.rights"} />
        <div className="flex gap-32 flex-wrap">
          {policiesCards().map(({ name, route }) => (
            <Link key={`${name}-${route}`} to={RoutesNames.Documents + route}>
              {name}
            </Link>
          ))}
        </div>
      </WidthContainer>
      {(environment.isDev || environment.isDao) && (
        <UploadTranslationProvider className={"flex gap-24"} />
      )}
    </footer>
  );
};
