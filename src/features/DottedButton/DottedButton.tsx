import cx from "classnames";
import { FC, HTMLAttributes } from "react";

export const DottedButton: FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={cx(
        "w-fit py-8 px-16 gap-4 border border-dashed rounded-xs border-vitreus-dotted-border text-vitreus-gradient-from text-p3 uppercase tracking-[2px]",
        props.className,
      )}
    >
      {children}
    </div>
  );
};
