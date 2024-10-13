import sx from "classnames";
import { FC, ReactNode } from "react";

import { IconSquare } from "@widgets/IconSquare.tsx";

export const GuideCard: FC<{
  Icon: FC;
  title: ReactNode;
  content: ReactNode;
  className?: string;
}> = ({ Icon, title, content, className }) => {
  return (
    <div
      className={sx(
        "flex flex-row bg-vitreus-main-black-green px-12 py-24 rounded-small text-ws-p1 w-full",
        className,
      )}
    >
      <IconSquare Icon={<Icon />} />

      <div>
        <p className="mb-12 text-vitreus-white">{title}</p>
        <p className="text-compliq-middle">{content}</p>
      </div>
    </div>
  );
};
