import cx from "classnames";
import { FC, HTMLAttributes, useCallback } from "react";

import { useTranslationService } from "@shared/services/translation/translation.service.ts";

interface GetCurrentTranslationProps
  extends Omit<HTMLAttributes<HTMLInputElement>, "children" | "onClick"> {}

export const GetCurrentTranslation: FC<GetCurrentTranslationProps> = ({ ...props }) => {
  const { downloadCurrentTranslation } = useTranslationService();

  const handleClick = useCallback(async () => {
    downloadCurrentTranslation();
  }, []);

  return (
    <button
      onClick={handleClick}
      className={cx(
        "!text-vitreus-gradient-from !font-bold !uppercase !text-p3 px-24 !py-[17px] !tracking-[1rem] !border !border-transparent !cursor-pointer !rounded-small !transition-all !duration-200 hover:!opacity-70 active:!border-white active:!opacity-100 !border-none !w-fit !flex !flex-row !items-center",
        props.className,
      )}
    >
      Get Current Translation
    </button>
  );
};
