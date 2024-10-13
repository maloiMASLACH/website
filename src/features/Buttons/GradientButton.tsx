import cx from "classnames";
import { FC, HTMLAttributes, ReactNode } from "react";

export interface GradientButtonProps extends HTMLAttributes<HTMLButtonElement> {
  LeftIcon?: ReactNode | ReactNode[];
  RightIcon?: ReactNode | ReactNode[];
  type?: "button" | "submit" | "reset";
}

export const GradientButton: FC<GradientButtonProps> = ({
  children,
  LeftIcon,
  RightIcon,

  ...props
}) => {
  return (
    <button
      {...props}
      className={cx(
        "!text-vitreus-text-color !font-bold !uppercase !text-p3 px-24 !py-[17px] !tracking-[1rem] !border !border-transparent !cursor-pointer !rounded-small !transition-all !duration-200 hover:!opacity-70 active:!border-white active:!opacity-100 !bg-gradient-to-b !border-none !from-vitreus-gradient-from !to-vitreus-gradient-to !w-fit !flex !flex-row !items-center",
        props.className,
      )}
    >
      {LeftIcon && <div className="w-12 ml-12">{LeftIcon}</div>}
      {children}
      {RightIcon && <div className="w-12 ml-12">{RightIcon}</div>}
    </button>
  );
};
