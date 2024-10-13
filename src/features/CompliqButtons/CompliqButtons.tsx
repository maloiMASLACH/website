import cx from "classnames";
import { FC, HTMLAttributes } from "react";
import { GhostButton, StrokeButton } from "vit-ui-kit";

export interface ButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, "children"> {
  text?: string;
  type?: string;
}

// TODO: fix button on library
export const CompliqStrokeButton: FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <StrokeButton
      {...props}
      className={cx(
        "!border-vitreus-luminous-green-600 border-[1px] border-solid !text-vitreus-luminous-green-600 hover:bg-vitreus-gradient-main hover:!text-white",
        className,
      )}
    />
  );
};

// TODO: fix button on library
export const CompliqGhostButton: FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <GhostButton
      {...props}
      className={cx("bg-vitreus-gradient-main text-white hover:!shadow-lg", className)}
    />
  );
};
