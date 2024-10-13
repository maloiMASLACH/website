import cx from "classnames";
import { images } from "@shared/assets";
import { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ExpanderProps {
  title: string;
  isDefaultOpen?: boolean;
  children?: ReactNode | ReactNode[];
}

export const Expander = ({ title, isDefaultOpen, children }: ExpanderProps) => {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);

  return (
    <div className="w-full flex flex-col  py-[12px]">
      <div
        className="w-full flex min-h-[24px] justify-between cursor-pointer text-white"
        onClick={() => setIsOpen((value) => !value)}
      >
        <span className=" text-[18px]">{title}</span>
        <div
          className={cx("text-white w-[20xp] h-[20px]", {
            "rotate-180": isOpen,
          })}
        >
          <images.expanderArrow />
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="content"
              initial={{ marginTop: "-150%" }}
              animate={{ marginTop: "0%" }}
              exit={{ marginTop: "-150%" }}
            >
              <div className="mt-[10px] flex w-full flex-col gap-4">{children}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
