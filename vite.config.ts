import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "@svgr/rollup";
import eslint from "vite-plugin-eslint";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [react(), svgr(), eslint(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      buffer: "buffer/",
    },
  },
  define: {
    "process.env": {},
    Buffer: ["buffer", "Buffer"],
  },
  optimizeDeps: {
    include: ["buffer"],
  },
});
