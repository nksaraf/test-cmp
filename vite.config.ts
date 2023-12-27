import {defineConfig} from "@solidjs/start/config";
import legacy from '@vitejs/plugin-legacy';
import devtools from 'solid-devtools/vite';


import DynamicPublicDirectory from 'vite-multiple-assets';
import imagemin from 'unplugin-imagemin/vite';

export default defineConfig({
  start: {
    ssr: false
  },
  optimizeDeps:{
    exclude: ['rosetty-solid', 'rosetty']
  },
  plugins: [
    DynamicPublicDirectory(['node_modules/solid-start-cmp/public','public']),
    legacy({
      targets: ['defaults','not IE 11'],
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
