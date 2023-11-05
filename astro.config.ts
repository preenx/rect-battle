import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
    output: 'static',
    site: "https://preenx.github.io/rect-battle/",
    integrations: [mdx()],
})