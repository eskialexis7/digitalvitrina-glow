import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/digitalvitrina-glow/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});