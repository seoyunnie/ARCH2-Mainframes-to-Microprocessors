import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [mdx(), react(), icon()],
  site: "https://seoyunnie.github.io",
  base: "/ARCH2-Mainframes-to-Microprocessors",
});
