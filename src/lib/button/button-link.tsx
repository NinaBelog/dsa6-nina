import styled from "styled-components";
import { Icon, iconsType } from "../icon";

interface IButtonLinkProps {
    appearance?: "primary";
    size?: "base"| "small";
    disabled?: boolean;
    loading?: boolean;
    iconBefore?: iconsType;
    iconAfter?: iconsType;
    text?:string;
}

const StyledButtonLink = styled.button<IButtonLinkProps>`
    display: inline-flex;
    flex-direction: row;
    gap: ${(props) => props.theme.spacing.inner.close};
    justify-content: center;
    align-items: center;
    padding: 0;
    transition: ${(props) => props.theme.animation.base};
    border:none;
    background: none;
    }

    // APPEARANCE PROP
    ${(props) => props.appearance === "primary" && `
    &:enabled {
        color: ${props.theme.colors.text.link.loud.enabled};
    }
     &:hover {
       color: ${props.theme.colors.text.link.loud.hover};
    }
      &:active {
        color: ${props.theme.colors.text.link.loud.active};
    }
        &:focus {
        box-shadow: ${props.theme.focus.primary};
    }
    `}


    ${(props) =>
		props.disabled &&
		`   &:disabled {
            color: ${props.theme.colors.text.neutral.calm.disabled};
            cursor: not-allowed;
            }`}


// SIZE
    ${(props) =>
		props.size === "base" &&
		`
        font-size: ${props.theme.typography.fontSize.component.small};
        line-height: ${props.theme.typography.lineHeight.component.small};
        font-weight: ${props.theme.typography.fontWeight.component.small};
        `}

    ${(props) =>
		props.size === "small" &&
		`
        line-height: ${props.theme.typography.lineHeight.component.small};
        font-weight: ${props.theme.typography.fontWeight.component.small};
            `}
            `;

export const ButtonLink: React.FC<IButtonLinkProps> = ({
            appearance = "primary", 
            size = "base",
            disabled,
            loading,
            iconBefore,
            iconAfter,
            text = "Hello",
}) => {
    return <StyledButtonLink  
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
    </StyledButtonLink>;
};
