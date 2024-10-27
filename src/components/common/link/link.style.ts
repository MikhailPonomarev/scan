import styled from 'styled-components';
import { primaryColors } from '../../../style/variables.style';

export const StyledLink = styled.a<{ color?: string }>`
    color: ${(props) => props.color || primaryColors.black};
    text-decoration: none;
    cursor: pointer;
`;
