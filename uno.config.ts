import presetUno from "@unocss/preset-uno";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import { defineConfig } from "unocss";

const colors = {};

const config = defineConfig({
  theme: {
    colors,
  },
  presets: [presetUno()],
  transformers: [transformerVariantGroup()],
});

export default config;
