import styled from "styled-components";
import { Icon, iconsType } from "../icon";

interface IButtonIconProps {
    appearance?: "primary"| "secondary";
    size: "base";
    disabled?: boolean;
    loading?: boolean;
    icon: iconsType;
}

const StyledButtonIcon = styled.button<IButtonIconProps>`
    border-radius: ${(props) => props.theme.borderRadius.componentBase};
    display: inline-flex;
    flex-direction: row;
    gap: ${(props) => props.theme.spacing.inner.close};
    justify-content: center;
    align-items: center;
    //padding: unset;
    transition: ${(props) => props.theme.animation.base};

    // APPEARANCE PROP
    ${(props) => props.appearance === "primary" && `
    &:enabled {
        background-color: ${props.theme.colors.bg.primary.loud.enabled};
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
        width: ${props.theme.spacing.height.base};
        `}

export const ButtonIcon: React.FC<IButtonIconProps> = ({
            appearance = "primary", 
            size = "base",
            disabled,
            loading,
            icon,
})  => {
            return <StyledButtonIcon  
                    appearance={appearance}
                    size = {size}
                    disabled={disabled}
                    loading={loading}
                    icon={icon}
        >
            {icon && <Icon size={20} iconName={icon} />}
    </StyledButtonLink>;
};
