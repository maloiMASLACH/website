import axios from "axios";
import { ResourceLanguage } from "i18next";
import {
  getContract,
  prepareContractCall,
  readContract,
  sendTransaction,
  type PrepareTransactionOptions,
  type PreparedTransaction,
} from "thirdweb";
import { Account } from "thirdweb/wallets";

import { environment } from "@shared/config/environment.config";
import { client } from "@shared/config/thirdweb.config";

import abi from "./abi.json";

export class Registry {
  private static contract = getContract({
    client,
    chain: environment.CHAIN,
    address: environment.REGISTRY_ADDRESS,
    abi: abi,
  });

  public static getCurrentData(
    options = { timeout: 5000, tryAmount: environment.IPFS_GATEWAYS.length * 10 },
  ): Promise<ResourceLanguage> {
    return new Promise((resolve, reject) => {
      const fetchData = () => {
        readContract({
          contract: Registry.contract,
          method: "getCurrentData",
          params: [],
        } as const)
          .then((cid: string) => {
            const get = (ipfsGateways: string[]) => {
              const gateway = ipfsGateways.pop();

              if (!gateway) {
                get([...environment.IPFS_GATEWAYS]);
                return;
              }

              axios
                .get<ResourceLanguage>(gateway.replace(environment.PLACE_HOLDER, cid))
                .then((response) => {
                  resolve(response.data);
                })
                .catch((error) => {
                  if (options.tryAmount <= 0) {
                    reject(error);
                    return;
                  }

                  options.tryAmount--;

                  if (ipfsGateways.length) {
                    get(ipfsGateways);
                  } else {
                    setTimeout(() => get([...environment.IPFS_GATEWAYS]), options.timeout);
                  }
                });
            };

            get([...environment.IPFS_GATEWAYS]);
          })
          .catch(reject);
      };

      fetchData();
    });
  }

  public static uploadNewVersion({
    cid,
    account,
  }: {
    cid: string;
    account: Account;
  }): Promise<void> {
    return new Promise((resolve, reject) => {
      prepareContractCall({
        contract: Registry.contract,
        method: "newVersion",
        params: [cid],
      } as PrepareTransactionOptions)
        .then((preparedTransaction: PreparedTransaction) => {
          sendTransaction({
            transaction: preparedTransaction,
            account,
          })
            .then(() => resolve())
            .catch(reject);
        })
        .catch(reject);
    });
  }
}
