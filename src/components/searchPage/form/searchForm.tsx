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
    Layout 
} from './searchForm.style';

const SearchForm = () => {
    const inputsNames = ['ИНН компании *', 'Тональность', 'Количество документов в выдаче *'];

    const inputs = inputsNames.map((it) => {
        return (
            <InputContainer>
                <Label>{it}</Label>
                <Input $width='240px' />
            </InputContainer>
        );
    });

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
                    {inputs}
                    <InputContainer>
                        <Label>Диапазон поиска *</Label>
                        <DatePickerContainer>
                            <Input $width='175px' />
                            <Input $width='175px' />
                        </DatePickerContainer>
                    </InputContainer>
                </FormInputsContainer>
                <FormCheckboxesContainer>
                    {checkboxes}
                    <SearchButtonContainer>
                        <Button text='Поиск' style={searchButtonStyle} />
                        <span>* Обязательные к заполнению поля</span>
                    </SearchButtonContainer>
                </FormCheckboxesContainer>
            </FormGrid>
        </Layout>
    );
}

export default SearchForm;