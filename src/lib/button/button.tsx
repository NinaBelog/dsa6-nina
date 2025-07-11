import styled from "styled-components";
import { Icon, iconsType } from "../icon";

interface IButtonProps {
    appearance?: "primary"| "secondary";
    size?: "base"| "small";
    disabled?: boolean;
    loading?: boolean;
    iconBefore?: iconsType;
    iconAfter?: iconsType;
    text?:string;
}

const StyledButton = styled.button<IButtonProps>`
    border-radius: ${(props) => props.theme.borderRadius.componentBase};
    display: inline-flex;
    flex-direction: row;
    gap: ${(props) => props.theme.spacing.inner.close};
    justify-content: center;
    align-items: center;
    padding: unset;
    transition: ${(props) => props.theme.animation.base};
    }

    // APPEARANCE PROP
    ${(props) => props.appearance === "primary" && `
    &:enabled {
        background-color: ${props.theme.colors.bg.primary.loud.enabled};
        color: ${props.theme.colors.text.neutral.loud.enabled};
        border: 1px solid ${props.theme.colors.border.primary.loud.enabled};
    }
     &:hover {
        background-color: ${props.theme.colors.bg.primary.loud.hover};
        border: 1px solid ${props.theme.colors.border.primary.loud.hover};
    }
      &:active {
        background-color: ${props.theme.colors.bg.primary.loud.active};
        border: 1px solid ${props.theme.colors.border.primary.loud.active};
    }
        &:focus {
        box-shadow: ${props.theme.focus.primary};
    }
    `}

    ${(props) => props.appearance === "secondary" && `
        &:enabled {
            background-color: ${props.theme.colors.bg.neutral.calm.enabled};
            color: ${props.theme.colors.text.neutral.loud.enabled};
            border: 1px solid ${props.theme.colors.border.neutral.calm.enabled};
        }
        &:hover {
            background-color: ${props.theme.colors.bg.neutral.calm.hover};
            border: 1px solid ${props.theme.colors.border.neutral.calm.hover};
        }
        &:active {
            background-color: ${props.theme.colors.bg.neutral.calm.active};
            border: 1px solid ${props.theme.colors.border.neutral.calm.active};
        }
        &:focus {
            box-shadow: ${props.theme.focus.secondary};
            }
`
    }

    ${(props) =>
		props.disabled &&
		`   &:disabled {
            background-color: ${props.theme.colors.bg.neutral.calm.disabled};
            border:1px solid ${props.theme.colors.border.neutral.calm.disabled};
            color: ${props.theme.colors.text.neutral.calm.disabled};
            cursor: not-allowed;
            }`}


// SIZE
    ${(props) =>
		props.size === "base" &&
		`
        height: ${props.theme.spacing.height.base};
        padding: 0 ${props.theme.spacing.padding.xl};
        font-size: ${props.theme.typography.fontSize.component.small};
        line-height: ${props.theme.typography.lineHeight.component.small};
        font-weight: ${props.theme.typography.fontWeight.component.small};
        `}

    ${(props) =>
		props.size === "small" &&
		`
        height: ${props.theme.spacing.height.small};
        padding: 0 ${props.theme.spacing.padding.m};
        line-height: ${props.theme.typography.lineHeight.component.small};
        font-weight: ${props.theme.typography.fontWeight.component.small};
            `}
            `;

export const Button: React.FC<IButtonProps> = ({
            appearance = "primary", 
            size = "base",
            disabled,
            loading,
            iconBefore,
            iconAfter,
            text = "Hello",
}) => {
    return <StyledButton  
            appearance={appearance}
            size = {size}
            disabled={disabled}
            loading={loading}
            iconBefore={iconBefore}
            iconAfter={iconAfter}
    >
    {iconBefore && <Icon size={size === "base" ? 20 : 16} iconName={iconBefore}/>}
    {text}
    {iconAfter && <Icon size={size === "base" ? 20 : 16} iconName={iconAfter}/>}
    </StyledButton>;
};
