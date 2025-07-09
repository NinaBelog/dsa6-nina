import styled from "styled-components";

interface IButtonProps {
    appearance?: "primary"| "secondary";
    size?: "base"| "small";
    disabled?: boolean;
    loading?: boolean;
    iconBefore?: string;
    iconAfter?: string;
    text?:string;
}

const StyledButton = styled.button<IButtonProps>`
    border: 1px solid transperent;
    border-radius: ${(props) => props.theme.borderRadius.componentBase};
    display: inline-flex;
    flex-direction: row;
    gap: ${(props) => props.theme.spacing.inner.close};
    justify-content: center;
    align-items: center;
    padding: unset;
    transition: ${(props) => props.theme.animation.base};

    // APPEARANCE PROP
    ${(props) => props.appearance === "primary" && `

    &:enabled {
        background-color: ${props.theme.colors.bg.primary.loud.enabled};
        color: ${props.theme.colors.text.neutral.loud.enabled};
        border-color:${props.theme.colors.border.primary.loud.enabled};
    }
     &:hover {
        background-color: ${props.theme.colors.bg.primary.loud.hover};
        border-color: ${props.theme.colors.border.primary.loud.hover};
    }
      &:active {
        background-color: ${props.theme.colors.bg.primary.loud.active};
        border-color: ${props.theme.colors.border.primary.loud.active};
    }
        &:focus {
        box-shadow: ${props.theme.focus.primary};

    }
`}  

    ${(props) => props.appearance === "secondary" && `

        &:enabled {
            background-color: ${props.theme.colors.bg.neutral.calm.enabled};
            color: ${props.theme.colors.text.neutral.loud.enabled};
            border-color: ${props.theme.colors.border.neutral.calm.enabled};
        }
        &:hover {
            background-color: ${props.theme.colors.bg.neutral.calm.hover};
            border-color:${props.theme.colors.border.neutral.calm.hover};
        }
        &:active {
            background-color: ${props.theme.colors.bg.neutral.calm.active};
            border-color: ${props.theme.colors.border.neutral.calm.active};
        }
        &:focus {
            box-shadow: ${props.theme.focus.secondary};

    }
`}

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
            // Доделать операцию по вычитанию единицы
        width: ${props.theme.spacing.height.small}; 
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
    {text}
    </StyledButton>;
};
