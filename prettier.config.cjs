/** @typedef  {import("prettier").Config} PrettierConfig*/

/** @type { PrettierConfig  } */
const config = {
  $schema: "http://json.schemastore.org/prettierrc",
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  bracketSameLine: false,
  jsxBracketSameLine: false,
  arrowParens: "always",
  endOfLine: "lf",
  singleAttributePerLine: false,
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^[./]",
    "",
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderBuiltinModulesToTop: true,
};

module.exports = config;
