import sx from "classnames";
import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

import { images } from "@shared/assets";
import { IconSquare } from "@widgets/IconSquare.tsx";

export const PoliciesCard: FC<{ title: ReactNode; route: string }> = ({ title, route }) => {
  return (
    <Link
      to={route}
      className={sx(
        "flex items-center justify-between flex-row bg-vitreus-main-black-green px-16 py-24 rounded-large max-w-[416px] w-full",
      )}
    >
      <IconSquare Icon={<images.policies />} className={"mr-[30px]"} />

      <div className="flex flex-row items-center w-full justify-between">
        <p className="text-vitreus-white">{title}</p>
        <IconSquare Icon={<images.rightArrowBtn />} className="bg-transparent !px-0 !mx-0" />
      </div>
    </Link>
  );
};
