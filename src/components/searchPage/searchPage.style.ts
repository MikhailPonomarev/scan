import styled from 'styled-components';
import { fonts, primaryColors } from '../../style/variables.style';

export const Layout = styled.div`
    display: flex;
    margin-top: 20px;
    margin-bottom: 65px;
`;

export const SearchFormContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 45px;
    width: 870px;
    color: ${primaryColors.black};
`;

export const SearchFormTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-top: 45px;
    width: 810px;
`;

export const SearchFormTitle = styled.span`
    font-family: ${fonts.ferry};
    font-size: 40px;
`;

export const SearchFormSubTitle = styled.span`
    font-family: ${fonts.inter};
    font-size: 20px;
`;

export const PicturesContainer = styled.div`
    position: relative;
    display: flex;
`;

export const Document = styled.div`
    position: absolute;
    top: 100px;
`;

export const Folders = styled.div`
    position: absolute;
    top: 120px;
    left: 270px;
`;

export const Banner = styled.div`
    position: absolute;
    bottom: 0px;
    left: 75px;
`;
