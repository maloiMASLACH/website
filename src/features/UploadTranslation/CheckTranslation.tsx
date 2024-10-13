import cx from "classnames";
import { FC, HTMLAttributes, SyntheticEvent, useCallback } from "react";

import { useTranslationService } from "@shared/services/translation/translation.service.ts";

interface UploadTranslationProps
  extends Omit<HTMLAttributes<HTMLInputElement>, "children" | "onClick"> {}

export const CheckTranslation: FC<UploadTranslationProps> = ({ ...props }) => {
  const { changeResource } = useTranslationService();

  const handleClick = useCallback((e: SyntheticEvent<HTMLInputElement>) => {
    if (!e.currentTarget.files?.[0]) return;

    changeResource(e.currentTarget.files?.[0]);
  }, []);

  return (
    <label
      className={cx(
        "!text-vitreus-gradient-from !font-bold !uppercase !text-p3 px-24 !py-[17px] !tracking-[1rem] !border !border-transparent !cursor-pointer !rounded-small !transition-all !duration-200 hover:!opacity-70 active:!border-white active:!opacity-100 !border-none !w-fit !flex !flex-row !items-center",
        props.className,
      )}
    >
      Check Translation
      <input {...props} type={"file"} onChange={handleClick} className={"hidden"} />
    </label>
  );
};
