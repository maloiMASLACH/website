import cx from "classnames";
import { FC, HTMLAttributes } from "react";

const Wrapper: FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => (
  <div
    {...props}
    className={cx(
      "flex flex-row flex-wrap w-fit text-ws-p1 text-vitreus-gradient-from gap-12",
      className,
    )}
  >
    {children}
  </div>
);

export const List: FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  if (Array.isArray(children)) {
    return (
      <Wrapper {...props}>
        {children.map((child, index) => (
          <li key={index} className={"flex items-center gap-12"}>
            <div className={"w-6 h-6 rounded-full bg-vitreus-gradient-from"} />
            {child}
          </li>
        ))}
      </Wrapper>
    );
  }

  return (
    <Wrapper {...props}>
      <li className={"flex items-center gap-12"}>
        <div className={"w-6 h-6 rounded-full bg-vitreus-gradient-from"} />
        {children}
      </li>
    </Wrapper>
  );
};
