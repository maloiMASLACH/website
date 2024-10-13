import cx from "classnames";
import { FC, HTMLAttributes, ReactNode } from "react";

export interface IconSquareProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  Icon: ReactNode;
}

export const IconSquare: FC<IconSquareProps> = ({ Icon, ...props }) => {
  return (
    <div
      {...props}
      className={cx(
        "bg-vitreus-luminous-green min-w-64 w-64 h-64 flex items-center justify-center rounded-small",
        props.className,
      )}
    >
      {Icon}
    </div>
  );
};
