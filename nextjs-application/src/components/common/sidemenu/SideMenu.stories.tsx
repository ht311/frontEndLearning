import SideMenu from "./SideMenu";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SideMenu> = {
    title: "components/common/SideMenu",
    component: SideMenu,
    parameters: {
        // https://storybook.js.org/docs/configure/story-layout
        layout: "padded",
    },
    // https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof SideMenu>;

export const story: Story = {};
