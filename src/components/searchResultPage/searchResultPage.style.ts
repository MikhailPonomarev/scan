import styled from 'styled-components';
import { fonts, primaryColors } from '../../style/variables.style';

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 110px;
`;

export const BannerContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const BannerTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 35px;
    width: 510px;
    color: ${primaryColors.black};
`;

export const BannerTitle = styled.span`
    margin-top: 45px;
    font-family: ${fonts.ferry};
    font-size: 40px;
`;

export const BannerSubTitle = styled.span`
    font-family: ${fonts.inter};
    font-size: 20px;
`;
