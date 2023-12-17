import { ErrorDiv } from "./ErrorDiv";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ErrorDiv> = {
    title: "components/elements/ErrorDiv",
    component: ErrorDiv,
    parameters: {
        // https://storybook.js.org/docs/configure/story-layout
        layout: "padded",
    },
    // https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ErrorDiv>;

// https://storybook.js.org/docs/writing-stories/args
export const childrenに文字列を指定: Story = {
    args: {
        children: "エラーメッセージを指定します",
    },
    render: (args) => <ErrorDiv>{args.children}</ErrorDiv>,
};

export const childrenにelementを指定: Story = {
    render: () => (
        <ErrorDiv>
            <div>
                <p>elementでエラーメッセージを</p>
                <p>指定します</p>
            </div>
        </ErrorDiv>
    ),
};
