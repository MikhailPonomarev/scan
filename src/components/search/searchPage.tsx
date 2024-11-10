import { 
    Banner,
    Checkbox,
    CheckboxContainer,
    DatePickerContainer,
    Document,
    Folders,
    FormCheckboxesContainer,
    FormInputsContainer,
    Input,
    InputContainer,
    Label,
    Layout, 
    PicturesContainer, 
    SearchFormLayout, 
    SearchFormContainer, 
    SearchFormSubTitle, 
    SearchFormTextContainer, 
    SearchFormTitle, 
    SearchFormGrid,
    SearchButtonContainer
} from './searchPage.style';
import { ReactComponent as DocumentSvg } from '../../assets/search/document.svg';
import { ReactComponent as FoldersSvg } from '../../assets/search/folders.svg';
import { ReactComponent as SearchBannerSvg } from '../../assets/search/search_banner.svg';
import { ButtonStyleProps } from '../common/button/props/buttonStyleProps';
import { primaryColors, secondaryColors } from '../../style/variables.style';
import Button from '../common/button/button';

const SearchPage = () => {
    const searchButtonStyle: ButtonStyleProps = {
        width: '305px',
        height: '60px',
        fontSize: '22px',
        fontColor: primaryColors.white,
        backgroundColor: secondaryColors.purple,
    };

    return (
        <Layout>
            <SearchFormContainer>
                <SearchFormTextContainer>
                    <SearchFormTitle>Найдите необходимые данные в пару кликов.</SearchFormTitle>
                    <SearchFormSubTitle>
                        Задайте параметры поиска.
                        <br></br>
                        Чем больше заполните, тем точнее поиск
                    </SearchFormSubTitle>
                </SearchFormTextContainer>
                <SearchFormLayout>
                    <SearchFormGrid>
                        <FormInputsContainer>
                            <InputContainer>
                                <Label>ИНН компании *</Label>
                            <   Input $width='240px' />
                            </InputContainer>
                            <InputContainer>
                                <Label>Тональность</Label>
                                <Input $width='240px' />
                            </InputContainer>
                            <InputContainer>
                                <Label>Количество документов в выдаче *</Label>
                                <Input $width='240px' />
                            </InputContainer>
                            <InputContainer>
                                <Label>Диапазон поиска *</Label>
                                <DatePickerContainer>
                                    <Input $width='175px' />
                                    <Input $width='175px' />
                                </DatePickerContainer>
                            </InputContainer>
                        </FormInputsContainer>
                        <FormCheckboxesContainer>
                            <CheckboxContainer>
                                <Checkbox role='checkbox' tabIndex={0} aria-checked='false' aria-labelledby='checkbox-name' />
                                <Label id='checkbox-name'>Признак максимальной полноты</Label>
                            </CheckboxContainer>
                            <CheckboxContainer>
                                <Checkbox role='checkbox' tabIndex={0} aria-checked='false' aria-labelledby='checkbox-name' />
                                <Label id='checkbox-name'>Упоминания в бизнес-контексте</Label>
                            </CheckboxContainer>
                            <CheckboxContainer>
                                <Checkbox role='checkbox' tabIndex={0} aria-checked='false' aria-labelledby='checkbox-name' />
                                <Label id='checkbox-name'>Главная роль в публикации</Label>
                            </CheckboxContainer>
                            <CheckboxContainer>
                                <Checkbox role='checkbox' tabIndex={0} aria-checked='false' aria-labelledby='checkbox-name' />
                                <Label id='checkbox-name'>Публикации только с риск-факторами</Label>
                            </CheckboxContainer>
                            <CheckboxContainer>
                                <Checkbox role='checkbox' tabIndex={0} aria-checked='false' aria-labelledby='checkbox-name' />
                                <Label id='checkbox-name'>Включать технические новости рынков</Label>
                            </CheckboxContainer>
                            <CheckboxContainer>
                                <Checkbox role='checkbox' tabIndex={0} aria-checked='false' aria-labelledby='checkbox-name' />
                                <Label id='checkbox-name'>Включать анонсы и календари</Label>
                            </CheckboxContainer>
                            <CheckboxContainer>
                                <Checkbox role='checkbox' tabIndex={0} aria-checked='false' aria-labelledby='checkbox-name' />
                                <Label id='checkbox-name'>Включать сводки новостей</Label>
                            </CheckboxContainer>
                            <SearchButtonContainer>
                                <Button text='Поиск' style={searchButtonStyle} />
                                <span>* Обязательные к заполнению поля</span>
                            </SearchButtonContainer>
                        </FormCheckboxesContainer>
                    </SearchFormGrid>
                </SearchFormLayout>
            </SearchFormContainer>
            <PicturesContainer>
                <Document>
                    <DocumentSvg />
                </Document>
                <Folders>
                    <FoldersSvg />
                </Folders>
                <Banner>
                    <SearchBannerSvg />
                </Banner>
            </PicturesContainer>
        </Layout>
    );
}

export default SearchPage;