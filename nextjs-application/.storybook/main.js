/** @type { import('@storybook/nextjs').StorybookConfig } */
const path = require('path');
const config = {
    // stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
        "@storybook/addon-controls",
    ],
    framework: {
        name: "@storybook/nextjs",
        options: {},
    },
    staticDirs: ["../public"],
    docs: {
        autodocs: "tag",
    },
    webpackFinal: async (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            // "@app": path.resolve(__dirname, "app"),
            // "@util": path.resolve(__dirname, "util"),
            // "@types": path.resolve(__dirname, "types"),
            // "@api": path.resolve(__dirname, "api"),
            // "@components": path.resolve(__dirname, "components"),
            // "@contexts": path.resolve(__dirname, "contexts"),
            // "@lib": path.resolve(__dirname, "lib"),
            // "@styles": path.resolve(__dirname, "styles"),
            // "@hooks": path.resolve(__dirname, "hooks"),
            //"@": path.resolve(__dirname, '../src'),
            "@app": path.resolve(__dirname, "../src/app"),
            "@util": path.resolve(__dirname, "../src/util"),
            "@types": path.resolve(__dirname, "../src/types"),
            "@api": path.resolve(__dirname, "../src/api"),
            "@components": path.resolve(__dirname, "../src/components"),
            "@contexts": path.resolve(__dirname, "../src/contexts"),
            "@lib": path.resolve(__dirname, "../src/lib"),
            "@styles": path.resolve(__dirname, "../src/styles"),
            "@hooks": path.resolve(__dirname, "../src/hooks"),
        }
        return config
    }
};
export default config;
