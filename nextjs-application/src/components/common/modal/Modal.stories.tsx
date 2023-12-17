import Modal from "./Modal";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Modal> = {
    title: "components/common/Modal",
    component: Modal,
    parameters: {
        // https://storybook.js.org/docs/configure/story-layout
        layout: "padded",
        nextjs: {
            appDirectory: true,
        },
    },
    // https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const story: Story = {
    args: {
        children: (
            <>
                <h2>タイトル</h2>
                <div>これはモーダルです</div>
            </>
        ),
    },
};
