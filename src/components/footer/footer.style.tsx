import styled from 'styled-components';
import { fonts, primaryColors } from '../../style/variables.style';

export const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 137px;
    padding-left: 60px;
    padding-right: 45px;
    font-family: ${fonts.inter};
    font-size: 14px;
    color: ${primaryColors.white};
    background-color: ${primaryColors.green};
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Address = styled.address`
    font-style: normal;
`;