import styled from 'styled-components';
import { ButtonStyleProps } from './props/buttonStyleProps';

export const StyledButton = styled.button<ButtonStyleProps>`
    margin-top: ${(props) => props.marginTop};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    font-size: ${(props) => props.fontSize};
    border: none;
    border-radius: 5px;
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.fontColor};
    cursor: pointer;
`;
