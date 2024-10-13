import { FC } from "react";

export interface RoundedIndexProps {
  index: number;
  leadingZeros?: number;
}

export const RoundedIndex: FC<RoundedIndexProps> = ({ index, leadingZeros = 2 }) => {
  return (
    <div
      className={
        "rounded-full bg-whitelabel-main flex items-center justify-center w-32 h-32 text-white flex-shrink-0 "
      }
    >
      <span className={"text-p2"}>
        {String(index).length > leadingZeros
          ? index
          : ("0".repeat(leadingZeros) + index).slice(-leadingZeros)}
      </span>
    </div>
  );
};
