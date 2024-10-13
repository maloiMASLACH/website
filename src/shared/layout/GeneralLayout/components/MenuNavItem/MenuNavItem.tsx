import cx from "classnames";
import { FC, ReactElement } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type NavItemProps = {
  menuItem: string;
  icon: ReactElement;
  onClick?: () => void;
  disabled?: boolean;
  route: string;
};

const MenuNavItem: FC<NavItemProps> = ({ menuItem, icon, disabled, route }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <button
      disabled={disabled}
      className={cx(
        "flex flex-col justify-center items-center py-24 2xl:py-8 w-[170rem] active:navItemsText font-medium",
        {
          "cursor-pointer text-vitreus-black-100": !disabled,
          "cursor-not-allowed text-whitelabel-main-400": disabled,
          "!text-whitelabel-main [&>div>svg]:fill-vitreus-white":
            !disabled && pathname.includes(route),
        },
      )}
      onClick={() => navigate(route)}
    >
      <div
        className={cx("w-48 h-48 flex justify-center items-center rounded-small mb-8", {
          "hover:bg-vitreus-green-800": !disabled,
          "bg-vitreus-gradient-main": !disabled && pathname.includes(route),
          "opacity-50": disabled,
        })}
      >
        {/*<div className={"w-24 h-24 flex justify-center items-center [&>svg]:w-full [&>svg]:h-full"}>*/}
        {icon}
        {/*</div>*/}
      </div>

      <h3 className="text-p3 uppercase">{menuItem}</h3>
    </button>
  );
};

export default MenuNavItem;
