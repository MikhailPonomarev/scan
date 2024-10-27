import styled from 'styled-components';
import { primaryColors } from '../../../style/variables.style';

export const StyledLink = styled.a<{ fontColor?: string }>`
    color: ${(props) => props.fontColor || primaryColors.black};
    text-decoration: none;
    cursor: pointer;
`;
