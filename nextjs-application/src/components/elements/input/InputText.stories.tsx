import { useState } from "react";
import { InputText, InputTextProps } from "./InputText";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InputText> = {
    title: "components/elements/InputText",
    component: InputText,
    parameters: {
        // https://storybook.js.org/docs/configure/story-layout
        layout: "padded",
    },
    // https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof InputText>;

const ButtonWithHooks = (args: InputTextProps): JSX.Element => {
    const [value, setValue] = useState(args.value);
    const onChenge = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    return (
        <InputText
            inputName={args.inputName}
            value={value}
            placeholder={args.placeholder}
            onChange={onChenge}
        ></InputText>
    );
};

export const story: Story = {
    args: {
        inputName: "elementName",
        value: "",
        placeholder: "入力してください",
    },
    render: (args) => (
        <ButtonWithHooks
            inputName={args.inputName}
            value={args.value}
            placeholder={args.placeholder}
        ></ButtonWithHooks>
    ),
};
