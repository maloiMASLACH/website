import cx from "classnames";
import { FC, HTMLAttributes } from "react";

export interface DarkCardProps extends HTMLAttributes<HTMLDivElement> {}

export const DarkCard: FC<DarkCardProps> = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={cx(
        "bg-vitreus-main-black-green px-24 pb-24 pt-48 rounded-small w-full",
        className,
      )}
    >
      {children}
    </div>
  );
};
