import { createThirdwebClient } from "thirdweb";
import { createWallet } from "thirdweb/wallets";

import { environment } from "@shared/config/environment.config.ts";

export const safeId = "global.safe";
export const client = createThirdwebClient({ clientId: environment.THIRDWEB_CLIENT_ID });
export const wallets = [createWallet(safeId)];
