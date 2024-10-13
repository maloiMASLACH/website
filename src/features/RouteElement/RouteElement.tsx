import { FC } from "react";
import { Link } from "react-router-dom";

export const RouteElement: FC<{ name: string; route: string }> = ({ name, route }) => {
  return (
    <Link to={route}>
      {" "}
      <p className="text-compliq-middle">{name}</p>
    </Link>
  );
};
