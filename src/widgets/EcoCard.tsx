import { FC, ReactNode } from "react";

import { IconSquare } from "@widgets/IconSquare.tsx";

export const EcoCard: FC<{ Icon: FC; title: ReactNode; content: ReactNode }> = ({
  Icon,
  title,
  content,
}) => {
  return (
    <div className="flex flex-col bg-vitreus-main-black-green px-24 pb-24 pt-48 rounded-small w-full items-center justify-center text-center">
      <IconSquare className="mr-0" Icon={<Icon />} />
      <p className="mt-24 text-vitreus-white text-ws-h5">{title}</p>

      <p className="text-compliq-middle text-ws-p1 mt-12">{content}</p>
    </div>
  );
};
