import cx from "classnames";
import { FC, HTMLAttributes, ReactNode } from "react";

interface SecondaryButtonProps extends HTMLAttributes<HTMLButtonElement> {
  LeftIcon?: ReactNode | ReactNode[];
  RightIcon?: ReactNode | ReactNode[];
  type?: "button" | "submit" | "reset";
}

export const SecondaryButton: FC<SecondaryButtonProps> = ({
  children,
  LeftIcon,
  RightIcon,

  ...props
}) => {
  return (
    <button
      {...props}
      className={cx(
        "!text-vitreus-gradient-from !font-bold !uppercase !text-p3 px-24 !py-[17px] !tracking-[1rem] !border !border-transparent !cursor-pointer !rounded-small !transition-all !duration-200 hover:!opacity-70 active:!border-white active:!opacity-100 !border-none !w-fit !flex !flex-row !items-center",
        props.className,
      )}
    >
      {LeftIcon && (
        <div className="w-32 h-32 mr-16 flex items-center justify-center">{LeftIcon}</div>
      )}
      {children}
      {RightIcon && <div className="w-20 ml-20 flex items-center justify-center">{RightIcon}</div>}
    </button>
  );
};
