import cx from "classnames";
import { FC, HTMLAttributes, useCallback } from "react";
import { ConnectButton, useActiveAccount, useActiveWallet } from "thirdweb/react";

import { environment } from "@shared/config/environment.config.ts";
import { client, safeId, wallets } from "@shared/config/thirdweb.config.ts";
import { useTranslationService } from "@shared/services/translation/translation.service.ts";

interface UploadCurrentTranslationProps
  extends Omit<HTMLAttributes<HTMLInputElement>, "children" | "onClick"> {}

export const UploadCurrentTranslation: FC<UploadCurrentTranslationProps> = ({ ...props }) => {
  const { uploadTranslation } = useTranslationService();
  const wallet = useActiveWallet();
  const account = useActiveAccount();

  const handleClick = useCallback(async () => {
    if (!account) return;

    uploadTranslation(account);
  }, [account]);

  return wallet?.id === safeId ? (
    <button
      onClick={handleClick}
      className={cx(
        "!text-vitreus-gradient-from !font-bold !uppercase !text-p3 px-24 !py-[17px] !tracking-[1rem] !border !border-transparent !cursor-pointer !rounded-small !transition-all !duration-200 hover:!opacity-70 active:!border-white active:!opacity-100 !border-none !w-fit !flex !flex-row !items-center",
        props.className,
      )}
    >
      Upload Current Translation
    </button>
  ) : (
    <ConnectButton
      client={client}
      wallets={wallets}
      chain={environment.CHAIN}
      connectButton={{
        className:
          "!text-vitreus-gradient-from !font-bold !uppercase !text-p3 px-24 !py-[17px] !tracking-[1rem] !border !border-transparent !cursor-pointer !rounded-small !transition-all !duration-200 hover:!opacity-70 active:!border-white active:!opacity-100 !border-none !w-fit !flex !flex-row !items-center !bg-transparent",
      }}
    />
  );
};
