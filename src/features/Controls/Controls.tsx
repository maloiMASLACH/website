import cx from "classnames";
import { FC, HTMLAttributes } from "react";

import { images } from "@shared/assets";

export type Colors = "green" | "red";

export interface ControlProps extends HTMLAttributes<HTMLButtonElement> {
  color?: Colors;
  uppercase?: boolean;
  disabled?: boolean;
}

export const Control: FC<ControlProps> = ({
  children,
  color = "green",
  uppercase = true,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cx(
        "flex items-center gap-10 px-24 py-12 rounded-xs hover:bg-whitelabel-main-800 active:bg-whitelabel-main-600",
        {
          ["uppercase"]: uppercase,
          ["[&>svg]:fill-whitelabel-main text-whitelabel-main"]: color === "green",
          ["[&>svg]:fill-red text-red"]: color === "red",
          ["[&>svg]:!fill-compliq-disabled !text-compliq-disabled"]: props.disabled,
        },
        className,
      )}
    >
      {children}
    </button>
  );
};

export const Add: FC<Omit<ControlProps, "children">> = (props) => {
  return (
    <Control {...props}>
      <images.userPlus />
      <span>Add</span>
    </Control>
  );
};
export const Edit: FC<Omit<ControlProps, "children">> = (props) => {
  return (
    <Control {...props}>
      <images.pen />
      <span>Edit</span>
    </Control>
  );
};
export const Block: FC<Omit<ControlProps, "children">> = (props) => {
  return (
    <Control {...props}>
      <images.lock />
      <span>Block</span>
    </Control>
  );
};
export const Delete: FC<Omit<ControlProps, "children">> = (props) => {
  return (
    <Control {...props}>
      <images.trash />
      <span>Delete</span>
    </Control>
  );
};

export const Print: FC<Omit<ControlProps, "children">> = (props) => {
  return (
    <Control {...props}>
      <images.print />
      <span>Print</span>
    </Control>
  );
};

export const View: FC<Omit<ControlProps, "children">> = (props) => {
  return (
    <Control {...props}>
      <images.eye />
      <span>View</span>
    </Control>
  );
};

export const Download: FC<Omit<ControlProps, "children">> = (props) => {
  return (
    <Control {...props}>
      <images.bigArrowDown />
      <span>Download</span>
    </Control>
  );
};
export const Play: FC<Omit<ControlProps, "children">> = (props) => {
  return (
    <Control {...props}>
      <images.play />
      <span>Play</span>
    </Control>
  );
};
export const Upload: FC<Omit<ControlProps, "children">> = (props) => {
  return (
    <Control {...props}>
      <images.upload />
      <span>Upload</span>
    </Control>
  );
};
export const Reset: FC<Omit<ControlProps, "children">> = ({ color = "red", ...props }) => {
  return (
    <Control {...props} color={color}>
      <images.cross width={40} />
      <span>Reset filter</span>
    </Control>
  );
};
