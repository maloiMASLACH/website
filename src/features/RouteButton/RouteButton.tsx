import cx from "classnames";
import { FC, useMemo } from "react";
import { Link, LinkProps, useLocation, useNavigate } from "react-router-dom";
import { DropDownProps, DropDownV2 } from "vit-ui-kit";

export interface RouteButtonProps extends Omit<LinkProps, "onClick">, DropDownProps {
  onLinkClick?: () => void;
}

export const RouteButton: FC<RouteButtonProps> = ({
  className,
  children,
  itemsList,
  itemsClassName,
  isLoading,
  onLinkClick,
  to,
  ...props
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const itemsListMemo = useMemo(
    () =>
      itemsList?.map(({ onClick, ...rest }) => ({
        ...rest,
        onClick: (id: string) => {
          if (to) {
            // NOTE: fix anchor click, when url already have the same hash
            navigate({ pathname: to.toString() });
            queueMicrotask(() => {
              navigate({ pathname: to.toString(), hash: id });
              onClick && onClick(id);
              onLinkClick && onLinkClick();
            });
          }
        },
      })),
    [to, navigate, onLinkClick],
  );

  // If 'to' is not provided, render a div instead of a Link
  const Component = to ? Link : "div";

  return (
    <div className={"relative [&>.drop-down]:hover:block"}>
      <Component
        {...props}
        to={to}
        onClick={onLinkClick}
        className={cx(
          "py-8 px-16 mb-6 rounded-large hover:bg-vitreus-main-black-green hover:text-vitreus-gradient-from !text-p3 tracking-[2px]",
          {
            ["bg-vitreus-header-hover text-vitreus-gradient-from"]:
              to && location.pathname.includes(to.toString()),
          },
          className,
        )}
      >
        {children}
      </Component>
      <div
        className={
          "drop-down hidden absolute pt-14 -bottom-0 left-0 lg:!left-auto lg:right-0 translate-y-full min-w-full z-10"
        }
      >
        {!!itemsListMemo?.length && (
          <DropDownV2
            className={"bg-vitreus-main-black-green"}
            itemsList={itemsListMemo}
            itemsClassName={cx(
              "!text-compliq-middle hover:!text-vitreus-gradient-from !py-14",
              itemsClassName,
            )}
            isLoading={isLoading}
          />
        )}
      </div>
    </div>
  );
};
