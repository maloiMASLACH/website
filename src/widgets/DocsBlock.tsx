import sx from "classnames";
import { FC, ReactNode } from "react";

export const DocsBlock: FC<{
  title?: ReactNode;
  content?: ReactNode;
  className?: string;
}> = ({ title, content, className }) => {
  return (
    <div
      className={sx(
        "flex flex-col justify-center items-start bg-transparent mb-32 p-0 w-full ",
        className,
      )}
    >
      <p className="mb-16 text-vitreus-white text-sh1 ">{title}</p>
      <p className="text-compliq-middle text-ws-h5">{content}</p>
    </div>
  );
};
