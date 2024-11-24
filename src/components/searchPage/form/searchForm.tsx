import { useNavigate } from 'react-router-dom';
import { primaryColors, secondaryColors } from '../../../style/variables.style';
import Button from '../../common/button/button';
import { ButtonStyleProps } from '../../common/button/props/buttonStyleProps';
import { 
    Checkbox,
    CheckboxContainer,
    DatePickerContainer,
    FormCheckboxesContainer,
    FormInputsContainer, 
    Input, 
    InputContainer, 
    Label, 
    SearchButtonContainer, 
    FormGrid,
    Layout, 
    StyledDatePicker
} from './searchForm.style';
import { searchResultRoute } from '../../../app/routes';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/de';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { useState } from 'react';
import { Dayjs } from 'dayjs';


const SearchForm = () => {
    const navigate = useNavigate();

    const handleSearchButtonClick = () => navigate(searchResultRoute);

    const [dateStart, setDateStart] = useState<Dayjs | null>(null);
    const [dateEnd, setDateEnd] = useState<Dayjs | null>(null);

    const checkboxesNames = [
        'Признак максимальной полноты', 
        'Упоминания в бизнес-контексте',
        'Главная роль в публикации',
        'Публикации только с риск-факторами',
        'Включать технические новости рынков',
        'Включать анонсы и календари',
        'Включать сводки новостей'
    ];

    const checkboxes = checkboxesNames.map((it) => {
        return (
            <CheckboxContainer>
                <Checkbox role='checkbox' tabIndex={0} aria-checked='false' aria-labelledby='checkbox-name' />
                <Label id='checkbox-name'>{it}</Label>
            </CheckboxContainer>
        );
    });

    const searchButtonStyle: ButtonStyleProps = {
        width: '305px',
        height: '60px',
        fontSize: '22px',
        $fontColor: primaryColors.white,
        $backgroundColor: secondaryColors.purple,
    };
    
    return (
        <Layout>
            <FormGrid>
                <FormInputsContainer>
                    <InputContainer>
                        <Label>ИНН компании *</Label>
                        <Input />
                    </InputContainer>
                    <InputContainer>
                        <Label>Тональность</Label>
                        <Input />
                    </InputContainer>
                    <InputContainer>
                        <Label>Количество документов в выдаче *</Label>
                        <Input />
                    </InputContainer>
                    <InputContainer>
                        <Label>Диапазон поиска *</Label>
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='de'>
                            <DatePickerContainer>
                                <StyledDatePicker 
                                    label='Дата начала'
                                    value={dateStart}
                                    onChange={(newDate) => setDateStart(newDate)}
                                />
                                <StyledDatePicker 
                                    label='Дата конца'
                                    value={dateEnd}
                                    onChange={(newDate) => setDateEnd(newDate)}
                                />
                            </DatePickerContainer>
                        </LocalizationProvider>
                    </InputContainer>
                </FormInputsContainer>
                <FormCheckboxesContainer>
                    {checkboxes}
                    <SearchButtonContainer>
                        <Button text='Поиск' style={searchButtonStyle} onClick={handleSearchButtonClick} />
                        <span>* Обязательные к заполнению поля</span>
                    </SearchButtonContainer>
                </FormCheckboxesContainer>
            </FormGrid>
        </Layout>
    );
}

export default SearchForm;