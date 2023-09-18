import { StyledButton, StyledButtonProps } from "../components/StyledButton";
import { ComponentMeta, Story } from "@storybook/react";

export default {
    // グループ名
    title: 'components/StyledButton'
    // 使用するcomponent
    , component: StyledButton
} as ComponentMeta<typeof StyledButton>

export const Primary: Story<StyledButtonProps> = (props) => {
    return (
        <StyledButton {...props} variant="primary">
            Primary
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