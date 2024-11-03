import styled from 'styled-components';
import { PricingCardStyleProps } from './props/pricingCardProps';
import { fonts, primaryColors } from '../../../../style/variables.style';

export const Card = styled.div<PricingCardStyleProps>`
    display: flex;
    flex-direction: column;
    width: 415px;
    height: 540px;
    font-family: ${fonts.inter};
    color: ${(props) => props.fontColor};
    border: 2px solid ${(props) => props.accentColor};
    border-radius: 10px;
    box-shadow: 0px 0px 24px -4px rgba(66, 68, 90, 0.41);
`;

export const Header = styled.div<{ accentColor: string }>`
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 132px;
    padding-top: 30px;
    padding-left: 30px;
    background-color: ${(props) => props.accentColor};

    svg {
        position: absolute;
        right: 0px;
        width: 95px;
        height: 85px;
    }
`;

export const HeaderTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const HeaderTitle = styled.span`
    font-size: 30px;
`;

export const HeaderSubTitle = styled.span`
    font-size: 18px;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-top: 30px;
    padding-bottom: 24px;
    padding-left: 30px;
    color: ${primaryColors.black};
`;

export const PriceTextsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 13px;
`;

export const PriceText = styled.span`
    font-size: 30px;

    span {
        margin-left: 20px;
        text-decoration: line-through;
        opacity: 50%;
    }
`;

export const MonthlyPaymentText = styled.span`
    height: 24px;
    font-size: 18px;
`;

export const MonthlyPaymentWhitespace = styled.div`
    height: 24px;
`;

export const TermsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 60px;
`;

export const TermsTitle = styled.span`
    font-size: 20px;
`;

export const TermsListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

export const TermsItemContainer = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`;

export const TermsText = styled.span`
    font-size: 18px;
`;
