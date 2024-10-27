import styled from 'styled-components';
import { fonts } from '../../../style/variables.style';

export const PricingSection = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
`;

export const Title = styled.span`
    font-family: ${fonts.ferry};
    font-size: 45px;
`;

export const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 35px;
    margin-top: 70px;
`;
