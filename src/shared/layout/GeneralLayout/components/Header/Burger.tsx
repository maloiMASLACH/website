import cx from "classnames";
import { FC, HTMLAttributes } from "react";

export interface BurgerProps extends HTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
}

export const Burger: FC<BurgerProps> = ({ isOpen, ...props }) => {
  return (
    <button {...props} className={cx("relative group", props.className)}>
      <div
        className={cx(
          "relative flex flex-col overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-gray-300 ring-vitreus-luminous-green-100 hover:ring-8  ring-opacity-30 duration-200 shadow-md",
          {
            ["ring-4"]: isOpen,
          },
        )}
      >
        <div
          className={cx("transform transition-all duration-150 overflow-hidden -translate-y-20", {
            ["translate-y-12"]: isOpen,
          })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 animate-bounce fill-vitreus-gradient-from"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path d="m12 6.586-8.707 8.707 1.414 1.414L12 9.414l7.293 7.293 1.414-1.414L12 6.586z" />
          </svg>
        </div>

        <div
          className={cx(
            "flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden -translate-y-12",
          )}
        >
          <div
            className={cx(
              "bg-vitreus-gradient-from mb-1.5 h-[2px] w-28 transform transition-all duration-300 origin-left",
              {
                ["translate-y-24"]: isOpen,
              },
            )}
          ></div>
          <div
            className={cx(
              "bg-vitreus-gradient-from mb-1.5 h-[2px] w-28 rounded transform transition-all duration-300 delay-75",
              {
                ["translate-y-24"]: isOpen,
              },
            )}
          ></div>
          <div
            className={cx(
              "bg-vitreus-gradient-from h-[2px] w-28 transform transition-all duration-300 origin-left delay-100",
              {
                ["translate-y-24"]: isOpen,
              },
            )}
          ></div>
        </div>
      </div>
    </button>
  );
};
