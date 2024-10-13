import cx from "classnames";
import { FC, HTMLAttributes, ReactNode } from "react";

import { Statuses } from "@entities/index";
import { images } from "@shared/assets";

const baseClass = "px-12 py-[3px] rounded-[100px] border w-min flex items-center gap-6";

const statusStyle: Record<Statuses, { className: string; icon: ReactNode }> = {
  Completed: {
    className: "text-whitelabel-main border-whitelabel-main",
    icon: <images.check className={"!fill-whitelabel-main"} />,
  },
};

export const availableStatuses = Object.keys(statusStyle) as Statuses[];

export const isStatus = (string: string) => !!statusStyle[string as Statuses];

export interface StatusProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  status: Statuses | string;
  mirrored?: boolean;
}

export const Status: FC<StatusProps> = ({ status, className, mirrored, ...props }) => {
  if (!isStatus(status))
    return (
      <div {...props} className={cx(baseClass, "text-gray border-gray", className)}>
        Unknown
      </div>
    );

  return (
    <div {...props} className={cx(baseClass, statusStyle[status as Statuses].className, className)}>
      {!mirrored && statusStyle[status as Statuses].icon}
      {status}
      {mirrored && statusStyle[status as Statuses].icon}
    </div>
  );
};
