import styled from 'styled-components';
import { fonts, primaryColors, secondaryColors } from '../../style/variables.style';

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 60px;
    padding-right: 60px;
    height: 93px;
    font-family: ${fonts.inter};
    font-size: 14px;
`;

export const Navigation = styled.nav`
    ul {
        display: flex;
        gap: 50px;
        margin: 0;
        padding: 0;
        list-style: none;
    }
`;

export const AuthContainer = styled.div`
    display: flex;
    gap: 18px;
    align-items: center;
`;

export const Divider = styled.div`
    width: 2px;
    height: 26px;
    background-color: ${primaryColors.green};
`;

export const LoginBtn = styled.button`
    width: 65px;
    height: 26px;
    background-color: ${secondaryColors.turquoise};
    border-radius: 5px;
    border: none;
    cursor: pointer;
`;