import cx from "classnames";
import { FC, HTMLAttributes } from "react";
import { PageLoader as UIPageLoader } from "vit-ui-kit";

export const PageLoader: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  return (
    <UIPageLoader containerProps={props} className={cx("m-auto w-full h-screen", className)} />
  );
};
