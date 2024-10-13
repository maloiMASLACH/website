import cx from "classnames";
import { FC, HTMLAttributes, ReactNode } from "react";

export interface ReadButtonProps extends HTMLAttributes<HTMLButtonElement> {
  Icon?: ReactNode;
}

export const GreenBtn: FC<ReadButtonProps> = ({ Icon, children, ...props }) => {
  return (
    <button
      {...props}
      className={cx(
        "flex flex-row text-vitreus-gradient-from rounded-small text-p uppercase max-w-[220px] items-center justify-center text-center gap-12",
        props.className,
      )}
    >
      {children}
      {Icon}
    </button>
  );
};
