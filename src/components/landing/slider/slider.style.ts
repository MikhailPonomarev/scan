import styled from 'styled-components';
import { fonts } from '../../../style/variables.style';

export const SliderSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 70px;
    margin-top: 110px;
`;

export const Title = styled.span`
    font-family: ${fonts.ferry};
    font-size: 45px;
`;

export const SliderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
        cursor: pointer;
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    gap: 30px;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px 20px;
    width: 350px;
    height: 200px;
    border-radius: 10px;
    box-shadow: 0px 0px 40px -10px rgba(0, 0, 0, 0.1);

    span {
        width: 330px;
        font-family: ${fonts.inter};
        font-size: 18px;
    }
`;
