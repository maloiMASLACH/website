import sx from "classnames";
import { FC, HTMLAttributes } from "react";

export interface InfoCardProps extends HTMLAttributes<HTMLDivElement> {}

export const InfoCard: FC<InfoCardProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={sx(
        "bg-vitreus-main-black-green p-24 rounded-small max-w-[636px] w-full text-compliq-middle",
        className,
      )}
      {...props}
    >
      <ul className={"text-ws-p1 text-left list-disc pl-24"}>
        <li>{children}</li>
      </ul>
    </div>
  );
};
