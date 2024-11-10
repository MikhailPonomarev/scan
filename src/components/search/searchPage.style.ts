import styled from 'styled-components';
import { fonts, primaryColors, secondaryColors } from '../../style/variables.style';

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

export const SearchFormLayout = styled.div`
    display: flex;
    height: 545px;
    padding-top: 35px;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 30px;
    font-family: ${fonts.inter};
    font-size: 18px;
    border-radius: 10px;
    box-shadow: 0px 0px 24px -4px rgba(66, 68, 90, 0.41);
`;

export const SearchFormGrid = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    column-gap: 15px;
`;

export const FormInputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Label = styled.label``;

export const Input = styled.input<{ $width: '240px' | '175px' }>`
    width: ${(props) => props.$width};
    height: 45px;
    border: 1px solid ${secondaryColors.lightGrey};
    border-radius: 5px;
`;

export const DatePickerContainer = styled.div`
    display: flex;
    gap: 20px;
`;

export const FormCheckboxesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    cursor: pointer;
`;

export const Checkbox = styled.div`
    width: 20px;
    height: 20px;
    border: 1px solid ${primaryColors.black};
`;

export const SearchButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    gap: 10px;
    margin-top: auto;

    span {
        font-size: 14px;
        color: ${secondaryColors.grey};
    }
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
