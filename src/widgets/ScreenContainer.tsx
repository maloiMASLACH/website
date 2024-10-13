import cx from "classnames";
import { FC, HTMLAttributes } from "react";

export const ScreenContainer: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div
      {...props}
      className={cx(
        "relative w-full flex justify-center py-[200px] 2xl:py-[150px] 2xl:sm:py-[100px]",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
};
