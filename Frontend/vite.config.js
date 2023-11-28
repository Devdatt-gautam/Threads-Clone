import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Threads-Clone-Frontend",
  server: {
    port: 3000,
    //get rid of cors errors
    proxy: {
      "/api": "https://threads-clone-8hjb.onrender.com",
    },
  },
});
