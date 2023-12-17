import Header from "./Header";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Header> = {
    title: "Header",
    component: Header,
    parameters: {
        // https://storybook.js.org/docs/configure/story-layout
        layout: "padded",
    },
    // https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Header>;

export const story: Story = {
    args: {
        href: "https://github.com/",
        children: "GitHubに遷移します",
    },
};
