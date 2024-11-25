import styled from 'styled-components';
import { fonts, secondaryColors, primaryColors } from '../../../style/variables.style';
import { DatePicker } from '@mui/x-date-pickers';
import 'react-dropdown/style.css';

export const Layout = styled.div`
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

export const FormGrid = styled.div`
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

export const Input = styled.input`
    width: 240px;
    height: 45px;
    border: 1px solid ${secondaryColors.lightGrey};
    border-radius: 5px;
`;

export const DatePickerContainer = styled.div`
    display: flex;
    gap: 20px;
`;

export const StyledDatePicker = styled(DatePicker)`
    width: 175px;
    height: 45px;
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
