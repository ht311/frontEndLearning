/** @type { import('@storybook/react').Preview } */

const preview = {
    nextjs: {
        appDirectory: true,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
