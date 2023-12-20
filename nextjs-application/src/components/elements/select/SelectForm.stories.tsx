import SelectForm from "./SelectForm";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof SelectForm> = {
    title: "components/elements/SelectForm",
    component: SelectForm,
    parameters: {
        // https://storybook.js.org/docs/configure/story-layout
        layout: "padded",
    },
    // https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof SelectForm>;

export const story: Story = {
    args: {
        onChange: action(""),
        options: [
            { value: "value1", displayValue: "displayValue1" },
            { value: "value2", displayValue: "displayValue2" },
            { value: "value3", displayValue: "displayValue3" },
        ],
        selected: "value2",
        required: true,
        selectName: "selectTestName",
    },
};
