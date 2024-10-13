import sx from "classnames";
import { FC, ReactNode } from "react";

import { images } from "@shared/assets";

import { IconSquare } from "./IconSquare";

export const FaqBlock: FC<{
  Icon?: ReactNode;
  title?: ReactNode;
  content?: ReactNode;
  className?: string;
}> = ({ Icon, content, title, className }) => {
  return (
    <div
      className={sx(
        " rounded-small bg-vitreus-main-black-green px-24 py-16 max-w-[636px]",
        className,
      )}
    >
      <p className="text-vitreus-white text-ws-h5">{title}</p>
      <IconSquare className="bg-transparent mr-0 mt-4 fill-whitelabel-main w-24 h-24" />
    </div>
  );
};
