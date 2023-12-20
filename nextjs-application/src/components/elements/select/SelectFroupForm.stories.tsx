import SelectFroupForm from "./SelectFroupForm";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof SelectFroupForm> = {
    title: "components/elements/SelectFroupForm",
    component: SelectFroupForm,
    parameters: {
        // https://storybook.js.org/docs/configure/story-layout
        layout: "padded",
    },
    // https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof SelectFroupForm>;

export const story: Story = {
    args: {
        onChange: action(""),
        groupOptions: [
            {
                name: "groupName1",
                id: "id1",
                options: [
                    { value: "groupValue1-1", displayValue: "groupDisplayValue1-1" },
                    { value: "groupValue1-2", displayValue: "groupDisplayValue1-2" },
                    { value: "groupValue1-3", displayValue: "groupDisplayValue1-3" },
                ],
            },
            {
                name: "groupName2",
                id: "id2",
                options: [
                    { value: "groupValue2-1", displayValue: "groupDisplayValue2-1" },
                    { value: "groupValue2-2", displayValue: "groupDisplayValue2-2" },
                    { value: "groupValue2-3", displayValue: "groupDisplayValue2-3" },
                ],
            },
        ],
        selected: "groupValue1-2",
        required: true,
        selectName: "selectTestName",
    },
};
