import { StyledButton, StyledButtonProps } from "../components/StyledButton";
import { ComponentMeta, ComponentStory, Story } from "@storybook/react";
import { action } from "@storybook/addon-actions"
import { useState } from "react";

export default {
    // グループ名
    title: 'components/StyledButton'
    // 使用するcomponent
    , component: StyledButton
    , argTypes: {
        // propsに渡すvariantをStorybookから変更可能にするため追加
        variant: {
            // ラジオ設定可
            contorol: { type: 'radio' } // なぜかラジオにならない
            , options: ['primary', 'success', 'transparent']
        }
        , children: {
            // テキストボックスで入力可
            contorol: { type: 'text' }
        }
    }
} as ComponentMeta<typeof StyledButton>

// テンプレートcomponentの定義
// storybookから渡されたpoprsをそのままbuttonに渡す
const Template: ComponentStory<typeof StyledButton> = (args) => <StyledButton {...args} />

// bindを呼び出しstoryを作成
export const TemplateTest = Template.bind({})

TemplateTest.args = {
    variant: 'primary'
    , children: 'primary'
}

// action出力用の関数
const incrementAction = action('increment')

export const Primary: Story<StyledButtonProps> = (props) => {
    const [count, setCount] = useState(0)
    const onClick = (e: React.MouseEvent) => {
        incrementAction(e, count)
        setCount(n => n + 1)
    }

    return (
        <StyledButton {...props} variant="primary" onClick={onClick}>
            Primary
            Count:{count}
        </StyledButton>
    )
}

export const Success: Story<StyledButtonProps> = (props) => {
    return (
        <StyledButton {...props} variant="success">
            Success
        </StyledButton>
    )
}

export const Transparent: Story<StyledButtonProps> = (props) => {
    return (
        <StyledButton {...props} variant="transparent">
            Transparent
        </StyledButton>
    )
}