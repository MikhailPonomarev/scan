import styled from 'styled-components';
import { ButtonStyleProps } from './props/buttonStyleProps';

export const StyledButton = styled.button<ButtonStyleProps>`
    margin-top: ${(props) => props.$marginTop};
    padding: 0px;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    font-size: ${(props) => props.fontSize};
    color: ${(props) => props.$fontColor};
    background-color: ${(props) => props.$backgroundColor};
    opacity: ${(props) => (props.$isDisabled ? '50%' : '100%')};
    border: none;
    border-radius: 5px;
    cursor: ${(props) => (props.$isDisabled ? 'not-allowed' : 'pointer')};
`;
