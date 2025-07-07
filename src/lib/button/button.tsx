import styled from "styled-components";

interface IButtonProps {
    appearance?: "primary"| "secondary";
    disabled?: boolean;
    loading?: boolean;
    iconBefore?: string;
    iconAfter?: string;
    text?:string;
}

const StyledButton = styled.button<IButtonProps>`
    border: none;
    display: inline-flex;
    flex-direction: row;
    gap: ${(props) => props.theme.spacing.inner.close};
    justify-content: center;
    align-items: center;
    padding: unset;
    transition: ${(props) => props.theme.animation.base};
    &:focus {
        box-shadow: ${(props) => props.theme.focus}; 
    }

   ${(props) => props.appearance === "primary" && `

    &:enabled {
        background-color: ${props.theme.colors.bg.primary.loud.enabled};
        color: ${props.theme.colors.text.neutral.loud.enabled};
        border: 1px solid ${props.theme.colors.border.primary.loud.enabled};
    }
`}
`;

export const Button: React.FC<IButtonProps> = ({
    appearance = "primary", 
    disabled,
    loading,
    iconBefore,
    iconAfter,
    text = "Hello",
}) => {
    return <StyledButton  
    appearance={appearance}
    disabled={disabled}
    loading={loading}
    iconBefore={iconBefore}
    iconAfter={iconAfter}
    >
    {text}
    </StyledButton>;
};
