import { defineConfig } from "@solidjs/start/config";
import legacy from "@vitejs/plugin-legacy";
import devtools from "solid-devtools/vite";

// import imagemin from "unplugin-imagemin/vite";

const app = defineConfig({
  start: {
    ssr: false,
  },
  optimizeDeps: {
    exclude: ["rosetty-solid", "rosetty"],
  },
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    devtools({
      /* features options - all disabled by default */
      autoname: true, // e.g. enable autoname
      locator: true,
    }),
    // imagemin({
    //   mode: 'sharp',
    //   beforeBundle: false,
    //   // Default configuration options for compressing different pictures
    //   compress: {
    //     jpg: {
    //       quality: 50,
    //     },
    //     jpeg: {
    //       quality: 70,
    //     },
    //     png: {
    //       quality: 70,
    //     },
    //     webp: {
    //       quality: 70,
    //     },
    //   },
    // }),
  ],
});

app.addRouter({
  mode: "static",
  name: "solid-start-cmp",
  dir: "node_modules/solid-start-cmp/public",
  base: "/",
});

export default app;
