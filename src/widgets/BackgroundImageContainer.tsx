import cx from "classnames";
import { FC, HTMLAttributes } from "react";

export interface BackgroundImageContainerProps extends HTMLAttributes<HTMLDivElement> {
  images?: { url: string; className?: string }[];
  darkenTop?: boolean;
  darkenBottom?: boolean;
}

export const BackgroundImageContainer: FC<BackgroundImageContainerProps> = ({
  images,
  darkenTop = true,
  darkenBottom = true,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cx("absolute top-0 left-0 w-full h-full -z-[1] overflow-clip", props.className)}
    >
      {darkenTop && (
        <div
          className={
            "z-10 absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b to-transparent from-vitreus-luminous-green"
          }
        />
      )}
      {props.children}
      {images?.map(({ url, className }, index) => (
        <img
          key={`${url}-${index}`}
          src={url}
          className={cx(
            "absolute h-full w-full top-0 left-0 right-0 bottom-0 object-cover",
            className,
          )}
          alt={`image-${index}`}
        />
      ))}
      {darkenBottom && (
        <div
          className={
            "z-10 absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent to-vitreus-luminous-green"
          }
        />
      )}
    </div>
  );
};
