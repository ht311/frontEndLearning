import { LinkBlank } from "./LinkBlank";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LinkBlank> = {
    title: "components/elements/LinkBlank",
    component: LinkBlank,
    parameters: {
        // https://storybook.js.org/docs/configure/story-layout
        layout: "padded",
    },
    // https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof LinkBlank>;

export const story: Story = {
    args: {
        href: "https://github.com/",
        children: "GitHubに遷移します",
    },
};
