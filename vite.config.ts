// vite.config.ts
import * as packageJson from "./package.json"
import dts from "vite-plugin-dts"
import { defineConfig } from "vite"
import { resolve } from "path"

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  server: {
    proxy: {
      "/graphql": {
        target: "https://b2b-admin.orienteed.lan",
        changeOrigin: true,
        secure: false,
      },
    },
  },

  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "b2bstore-bigcommerce-adapter",
      fileName: "b2bstore-bigcommerce-adapter",
    },
    rollupOptions: {
      external: Object.keys(packageJson.peerDependencies),
    },
  },
  plugins: [dts()],
})
