import HeaderPresenter from "./HeaderPresenter";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HeaderPresenter> = {
    title: "components/common/Header",
    component: HeaderPresenter,
    parameters: {
        // https://storybook.js.org/docs/configure/story-layout
        layout: "padded",
    },
    // https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof HeaderPresenter>;

export const story: Story = {
    args: {
        userName:"userName"
    },
};
