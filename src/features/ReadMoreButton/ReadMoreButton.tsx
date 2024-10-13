import cx from "classnames";
import { FC, HTMLAttributes, ReactNode } from "react";

import { images } from "@shared/assets";
import { IconSquare } from "@widgets/IconSquare";

export interface ReadButtonProps extends HTMLAttributes<HTMLButtonElement> {
  Icon?: ReactNode;
}

export const ReadMoreButton: FC<ReadButtonProps> = ({
  Icon = <images.readDown />,
  children = "READ MORE",
  ...props
}) => {
  return (
    <button
      {...props}
      className={cx(
        "flex flex-row text-vitreus-gradient-from rounded-small w-full items-center justify-center max-w-[636px] text-center",
        props.className,
      )}
    >
      {children}
      <IconSquare Icon={Icon} className="bg-transparent m-0 fill-whitelabel-main" />
    </button>
  );
};
