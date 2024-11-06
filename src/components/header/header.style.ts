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

    svg {
        cursor: pointer;
    }
`;

export const RightSideContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 780px;
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

export const LimitsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 175px;
    height: 65px;
    background-color: #f4f4f4;
    border-radius: 5px;
`;

export const LimitsGrid = styled.div`
    display: grid;
    grid-template-columns: 125px 28px;
    grid-auto-rows: minmax(17px, 17px);
    gap: 5px;
    align-items: center;
`;

export const LimitRowText = styled.span`
    display: flex;
    justify-content: flex-end;
    font-size: 10px;
    color: ${secondaryColors.grey};
`;

export const LimitRowNumber = styled.span<{ $color: string }>`
    font-weight: bold;
    color: ${(props) => props.$color};
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

export const AccountContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 110px;
    height: 32px;
`;

export const AccountUserContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
`;

export const UserName = styled.span`
    color: ${primaryColors.black};
`;
