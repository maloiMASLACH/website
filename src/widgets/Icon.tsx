import cx from "classnames";
import { FC, HTMLAttributes, ReactElement } from "react";

export interface IconProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  Icon: ReactElement;
}

export const IconSq: FC<IconProps> = ({ Icon, ...props }) => {
  return (
    <div
      {...props}
      className={cx("min-w-32 w-32 h-32 mr-16 flex items-center justify-center", props.className)}
    >
      {Icon}
    </div>
  );
};
