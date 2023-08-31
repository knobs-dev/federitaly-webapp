import { defineConfig } from "unocss";
import presetUno from "@unocss/preset-uno";
import transformerVariantGroup from "@unocss/transformer-variant-group";

const colors = {};

const config = defineConfig({
  theme: {
    colors,
  },
  presets: [presetUno()],
  transformers: [transformerVariantGroup()],
});

export default config;
