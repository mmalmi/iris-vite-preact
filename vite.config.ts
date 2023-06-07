import preact from "@preact/preset-vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  /* preact/compat paths */
  alias: {
    react: "preact/compat",
    "react-dom": "preact/compat",
  },
});
