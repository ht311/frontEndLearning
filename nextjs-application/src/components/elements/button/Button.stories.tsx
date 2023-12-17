import { Button } from "./Button";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Button> = {
    title: "components/elements/Button",
    component: Button,
    parameters: {
        // https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
    // https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    // argTypes: {
    //     children: {
    //         control: {
    //             type: "inline-radio",
    //         },
    //         options: ["テキスト", ""],
    //     },
    // },
};
export default meta;

type Story = StoryObj<typeof Button>;

// https://storybook.js.org/docs/writing-stories/args
export const childrenに文字列を指定: Story = {
    args: {
        children: "ボタン",
        onClick: action("ボタンが押されました"),
    },
    render: (args) => <Button onClick={args.onClick}>{args.children}</Button>,
};

export const childrenにelementを指定: Story = {
    render: () => (
        <Button onClick={action("ボタンが押されました")}>
            <div>
                <p>foo,bar</p>
                <p>hoge,fuga</p>
            </div>
        </Button>
    ),
};
