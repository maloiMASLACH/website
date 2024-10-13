import axios from "axios";

import { environment } from "@shared/config/environment.config.ts";

export class IPFS {
  private static client = axios.create({
    baseURL: environment.PINATA_BASE_URL,
    headers: { Authorization: `Bearer ${environment.PINATA_JWT}` },
  });

  public static async upload(file: File) {
    const formData = new FormData();

    formData.append("file", file);
    const pinataMetadata = JSON.stringify({
      name: "en.json",
    });
    formData.append("pinataMetadata", pinataMetadata);
    const pinataOptions = JSON.stringify({
      cidVersion: 0,
    });
    formData.append("pinataOptions", pinataOptions);

    const response = await IPFS.client.post<{ IpfsHash: string }>(
      "/pinning/pinFileToIPFS",
      formData,
    );

    return response.data.IpfsHash;
  }
}
