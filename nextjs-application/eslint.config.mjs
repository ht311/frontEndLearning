import coreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";

const eslintConfig = [
    ...coreWebVitals,
    ...nextTypescript,
    prettier,
    {
        rules: {
            "no-undef": "off",
        },
    },
    {
        ignores: ["node_modules/**", "dist/**"],
    },
];

export default eslintConfig;
