import { InputTextForm } from "./InputTextForm";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InputTextForm> = {
    title: "components/elements/InputTextForm",
    component: InputTextForm,
    parameters: {
        // https://storybook.js.org/docs/configure/story-layout
        layout: "padded",
    },
    // https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof InputTextForm>;

export const バリデート無し: Story = {
    args: {
        inputName: "elementName",
        placeholder: "入力してください",
        required: false,
        pattern: undefined,
        errorMessage: "エラーメッセージ",
    },
};

export const バリデートあり: Story = {
    args: {
        inputName: "elementName",
        placeholder: "5文字より多く入力するとエラーメッセージが表示されます",
        required: false,
        pattern: ".{0,5}",
        errorMessage: "エラーメッセージ",
    },
};
