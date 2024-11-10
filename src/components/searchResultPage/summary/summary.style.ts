import styled from 'styled-components';
import { fonts, primaryColors, secondaryColors } from '../../../style/variables.style';

export const SummarySection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

export const SummaryTitle = styled.span`
    font-family: ${fonts.ferry};
    font-size: 20px;
    color: ${primaryColors.black};
`;

export const SummarySubTitle = styled.span`
    font-family: ${fonts.inter};
    font-size: 18px;
    color: ${secondaryColors.grey};
`;

export const CarouselContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Carousel = styled.div`
    display: flex;
    align-items: center;
    width: 1260px;
    height: 160px;
    border: 2px solid ${primaryColors.green};
    border-radius: 10px;
`;

export const CarouselHeading = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    padding-left: 28px;
    width: 135px;
    height: 100%;
    font-family: ${fonts.inter};
    font-size: 20px;
    color: ${primaryColors.white};
    background-color: ${primaryColors.green};
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
`;

export const CarouselItem = styled(CarouselHeading)`
    align-items: center;
    padding-left: 0px;
    height: 125px;
    font-size: 18px;
    color: ${primaryColors.black};
    background-color: ${primaryColors.white};
    border-right: 2px solid ${secondaryColors.lightGrey};
`;
