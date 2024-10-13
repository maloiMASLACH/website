import { sepolia, arbitrumSepolia, arbitrum } from "thirdweb/chains";

const PLACE_HOLDER = "{cid}";
const IPFS_GATEWAYS = [
  `https://ipfs.nftstorage.link/ipfs/${PLACE_HOLDER}`,
  `https://cloudflare-ipfs.com/ipfs/${PLACE_HOLDER}`,
  `https://ipfs.w3s.link/ipfs/${PLACE_HOLDER}`,
  `https://ipfs.nftstorage.link/ipfs/${PLACE_HOLDER}`,
  `https://gateway.pinata.cloud/ipfs/${PLACE_HOLDER}`,
  `https://ipfs.io/ipfs/${PLACE_HOLDER}`,
];

export const environment = {
  isDao: window.location.host.includes("update"),
  isDev: import.meta.env.VITE_NODE_ENV === "development",
  isLocalTranslation: import.meta.env.VITE_IS_LOCAL_TRANSLATION === "true",
  REGISTRY_ADDRESS: import.meta.env.VITE_REGISTRY_ADDRESS,
  // PINATA_API_KEY: import.meta.env.VITE_PINATA_API_KEY,
  // PINATA_SECRET_KEY: import.meta.env.VITE_PINATA_SECRET_KEY,
  PINATA_JWT: import.meta.env.VITE_PINATA_JWT,
  PINATA_BASE_URL: import.meta.env.VITE_PINATA_BASE_URL,
  // RPC: import.meta.env.VITE_RPC,
  IPFS: import.meta.env.VITE_IPFS,
  THIRDWEB_CLIENT_ID: import.meta.env.VITE_THIRDWEB_CLIENT_ID,
  CHAIN: { sepolia, arbitrumSepolia, arbitrum }[import.meta.env.VITE_CHAIN as never],
  PLACE_HOLDER:
    import.meta.env.VITE_PLACE_HOLDER !== "" && import.meta.env.VITE_PLACE_HOLDER
      ? import.meta.env.VITE_PLACE_HOLDER
      : PLACE_HOLDER,
  IPFS_GATEWAYS: (import.meta.env.VITE_IPFS_GATEWAYS &&
  import.meta.env.VITE_IPFS_GATEWAYS !== "" &&
  import.meta.env.VITE_IPFS_GATEWAYS?.split(", ").length > 0
    ? import.meta.env.VITE_IPFS_GATEWAYS?.split(", ")
    : IPFS_GATEWAYS) as string[],
  TAGS_AMOUNT: Number(import.meta.env.VITE_TAGS_AMOUNT),

  // Supabase
  SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
  SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY,
};
