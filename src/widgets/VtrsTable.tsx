import { FC, ReactNode } from "react";

import { IconSquare } from "./IconSquare";

export const VtrsTable: FC<{
  Icon: ReactNode;
  title: ReactNode;
  button: ReactNode;
}> = ({ Icon, title, button }) => {
  return (
    <table>
      <tbody>
        <td>
          <IconSquare Icon={Icon} className="bg-transparent m-0 fill-whitelabel-main" />
        </td>
        <td>{title}</td>
        <td>{button}</td>
      </tbody>
    </table>
  );
};
