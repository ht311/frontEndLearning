import Footer from "./Footer";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Footer> = {
    title: "components/common/Footer",
    component: Footer,
    parameters: {
        // https://storybook.js.org/docs/configure/story-layout
        layout: "padded",
    },
    // https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Footer>;

export const story: Story = {};
