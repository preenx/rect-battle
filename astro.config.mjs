import { defineConfig } from "astro/config";
import AstroPWA from "@vite-pwa/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    output: "static",
    site: "https://preenx.github.io/",
    integrations: [react(), AstroPWA()],
});
