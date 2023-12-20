import Table from "./Table";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Table> = {
    title: "components/elements/Table",
    component: Table,
    parameters: {
        // https://storybook.js.org/docs/configure/story-layout
        layout: "padded",
    },
    // https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Table>;

export const story: Story = {
    args: {
        head: ["カラム1", "カラム2", "カラム3"],
        body: [
            [
                <a key={1 - 1} href={"/"}>
                    リンク1-1
                </a>,
                <div key={1 - 2}>カラム1-2</div>,
                "カラム1-3",
            ],
            [
                <a key={2 - 1} href={"/"}>
                    リンク2-1
                </a>,
                <div key={2 - 2}>カラム2-2</div>,
                "カラム2-3",
            ],
            [
                <a key={3 - 1} href={"/"}>
                    リンク3-1
                </a>,
                <div key={3 - 2}>カラム3-2</div>,
                "カラム3-3",
            ],
        ],
    },
};
