import Submit from "./Submit";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Submit> = {
    title: "components/elements/Submit",
    component: Submit,
    parameters: {
        // https://storybook.js.org/docs/configure/story-layout
        layout: "padded",
    },
    // https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Submit>;

export const story: Story = {
    args: {
        value: "submitTest",
    },
};
