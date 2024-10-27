import styled from 'styled-components';
import { fonts } from '../../../style/variables.style';

export const BannerContainer = styled.section`
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    height: 620px;
`;

export const LeftSideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 70px;
    padding-top: 45px;
    max-width: 745px;
`;

export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Title = styled.span`
    font-family: ${fonts.ferry};
    font-size: 60px;
`;

export const SubTitle = styled.span`
    max-width: 520px;
    font-family: ${fonts.inter};
    font-size: 20px;
`;
