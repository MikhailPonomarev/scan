import styled from 'styled-components';
import { fonts } from '../../../style/variables.style';

export const BannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 790px;

    svg {
        margin-top: 15px;
        margin-left: 110px;
    }
`;

export const Title = styled.span`
    font-family: ${fonts.ferry};
    font-size: 40px;
`;