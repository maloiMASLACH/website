import cx from "classnames";
import { FC, ReactNode, useCallback, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";
import { Header as HeaderUI } from "vit-ui-kit";

import { RouteButton } from "@features/RouteButton/RouteButton.tsx";
import { RoutesNames } from "@shared/constants/routes-names.ts";
import { Burger } from "@shared/layout/GeneralLayout/components/Header/Burger.tsx";
import { getRouteLinks } from "@shared/routes.tsx";

export const Header: FC<{
  logo: ReactNode;
}> = ({ logo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => setIsOpen(false), []);
  const handleToggle = useCallback(() => setIsOpen((old) => !old), []);

  return (
    <HeaderUI
      Logo={
        <Link to={RoutesNames.Home} className={"flex gap-12 items-center"}>
          {logo}
          <span className={"uppercase text-compliq-middle text-ws-h5"}>Vitreus</span>
        </Link>
      }
      className={
        "w-full [&>div>div>span]:text-compliq-middle [&>div]:py-18 [&>div]:max-w-[1296px] text-white !bg-transparent relative z-50 border-b-2 border-b-vitreus-header-border backdrop-blur"
      }
    >
      <div className={"relative"}>
        <OutsideClickHandler onOutsideClick={handleClose}>
          <div
            className={cx(
              "w-full flex gap-12 lg:absolute lg:flex-col lg:!p-24 lg:!bg-vitreus-luminous-green lg:!w-max lg:right-0 lg:-bottom-20 lg:!gap-24 lg:!backdrop-blur-lg lg:translate-y-full lg:!rounded-large",
              {
                ["lg:!hidden"]: !isOpen,
              },
            )}
          >
            {getRouteLinks().map(({ route, name, itemsList }) => (
              <RouteButton
                key={`${route}-${name}`}
                to={route}
                itemsList={itemsList}
                onLinkClick={handleClose}
              >
                {name}
              </RouteButton>
            ))}
          </div>
          <Burger className={"hidden lg:!block"} isOpen={isOpen} onClick={handleToggle} />
        </OutsideClickHandler>
      </div>
    </HeaderUI>
  );
};
