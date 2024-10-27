import styled from 'styled-components';
import { primaryColors, secondaryColors } from '../../../style/variables.style';

export const StyledButton = styled.button`
    width: 335px;
    height: 60px;
    font-size: 22px;
    border: none;
    border-radius: 5px;
    background-color: ${secondaryColors.purple};
    color: ${primaryColors.white};
    cursor: pointer;
`;
