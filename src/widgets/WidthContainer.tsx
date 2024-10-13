import cx from "classnames";
import { FC, HTMLAttributes } from "react";

type ContentMaxWidth = "max-w-[1296px]";

interface WidthContainerProps extends HTMLAttributes<HTMLDivElement> {
  contentMaxWidth?: ContentMaxWidth;
}

export const WidthContainer: FC<WidthContainerProps> = ({
  contentMaxWidth = "max-w-[1296px]",
  ...props
}) => {
  return (
    <div {...props} className={cx("w-full px-20", contentMaxWidth, props.className)}>
      {props.children}
    </div>
  );
};
