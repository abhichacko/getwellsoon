import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import sass from "sass";


export default defineConfig({
  base: "/getwellsoon",
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});