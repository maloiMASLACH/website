import { FC, ReactNode } from "react";

import { IconSq } from "@widgets/Icon.tsx";

export const VtrsCharpeCard: FC<{ Icon: FC; title: ReactNode; content: ReactNode }> = ({
  Icon,
  title,
  content,
}) => {
  return (
    <div className="flex flex-col bg-vitreus-main-black-green p-24 rounded-small w-full">
      <div className="flex flex-row items-center mb-16">
        <IconSq Icon={<Icon />} />
        <p className="text-vitreus-white text-ws-h5">{title}</p>
      </div>
      <div>
        <p className="text-compliq-middle text-ws-p1">{content}</p>
      </div>
    </div>
  );
};
