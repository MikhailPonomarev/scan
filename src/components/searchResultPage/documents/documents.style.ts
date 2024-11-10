import styled from 'styled-components';
import { fonts, primaryColors, secondaryColors } from '../../../style/variables.style';

export const DocumentsSection = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 105px;
`;

export const DocumentsSectionTitle = styled.span`
    font-family: ${fonts.ferry};
    font-size: 30px;
    color: ${primaryColors.black};
`;

export const DocumentsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
`;

export const Document = styled.div`
    display: flex;
    flex-direction: column;
    width: 640px;
    height: 695px;
    padding-top: 20px;
    padding-bottom: 35px;
    /* padding-left: 30px; */
    /* padding-right: 30px; */
    font-family: ${fonts.inter};
    font-size: 16px;
    color: ${secondaryColors.grey};
    border-radius: 10px;
    box-shadow: 0px 0px 24px -4px rgba(66, 68, 90, 0.41);

    svg {
        margin-top: 14px;
    }
`;

export const DocumentContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 20px;
`;

export const DocumentSourceContainer = styled.div`
    display: flex;
    gap: 15px;
`;

export const DocumentTitle = styled.span`
    margin-top: 24px;
    width: 540px;
    font-size: 26px;
    letter-spacing: 1px;
    color: ${primaryColors.black};
`;

export const DocumentBadge = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 14px;
    width: 160px;
    height: 22px;
    font-size: 12px;
    color: ${primaryColors.black};
    background-color: ${secondaryColors.orange};
    border-radius: 5px;
`;

export const DocumentText = styled.p`
    margin-top: 20px;
    margin-bottom: 0px;
    width: 580px;
`;

export const DocumentBottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0px 20px;
`;

export const ShowMoreButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;
