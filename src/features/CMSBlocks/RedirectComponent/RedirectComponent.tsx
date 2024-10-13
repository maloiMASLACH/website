import { FC, useEffect } from "react";

export const RedirectComponent: FC<{ to: string }> = ({ to }) => {
  useEffect(() => {
    window.location.replace(to);
  }, []);

  return null;
};
