import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import tsconfigPaths from 'vite-tsconfig-paths'
// import svgr from "vite-plugin-svgr";
// import path from "path"

export default defineConfig({
  plugins: [
    react(),
    // svgr(),
    // tsconfigPaths()
  ],
//   resolve: {
//       alias: {
//         "@": path.resolve(__dirname, "./src/*"),
// }
// }
});
