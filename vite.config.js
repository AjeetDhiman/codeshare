import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sanityClient from "./src/utils/sanityClient";

const { projectId } = sanityClient.config();
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
