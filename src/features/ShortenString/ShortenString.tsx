import { FC } from "react";

export const ShortenString: FC<{ children?: string | number }> = ({ children }) =>
  children ? (
    <p className={"truncate max-w-[200px]"}>{children}</p>
  ) : (
    <p className={"w-full flex items-center justify-center"}>-</p>
  );
