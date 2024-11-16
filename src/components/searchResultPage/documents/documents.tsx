import { primaryColors, secondaryColors } from '../../../style/variables.style';
import Button from '../../common/button/button';
import { ButtonStyleProps } from '../../common/button/props/buttonStyleProps';
import Link from '../../common/link/link';
import { 
    DocumentsSection, 
    DocumentsSectionTitle, 
    DocumentsContainer, 
    ShowMoreButtonContainer, 
    Document, 
    DocumentSourceContainer, 
    DocumentTitle, 
    DocumentBadge, 
    DocumentText,
    DocumentBottomContainer,
    DocumentContentWrapper
} from './documents.style';
import { ReactComponent as DocumentPictureSvg } from '../../../assets/searchResultPage/document_picture.svg';

const Documents = () => {
    const showMoreButtonStyle: ButtonStyleProps = {
        width: '305px',
        height: '60px',
        fontSize: '22px',
        $fontColor: primaryColors.white,
        $backgroundColor: secondaryColors.purple,
        $marginTop: '30px'
    };

    const readInSourceButtonStyle: ButtonStyleProps = {
        width: '225px',
        height: '46px',
        fontSize: '16px',
        $fontColor: primaryColors.black,
        $backgroundColor: secondaryColors.turquoise,
    };
    
    return (
        <DocumentsSection>
            <DocumentsSectionTitle>Список документов</DocumentsSectionTitle>
            <DocumentsContainer>
                <Document>
                    <DocumentContentWrapper>
                        <DocumentSourceContainer>
                            <span>13.09.2021</span>
                            <Link 
                                href='https://google.com' 
                                text='Комсомольская правда KP.RU' 
                                fontSize='16px' 
                                $fontColor={secondaryColors.grey}
                                textDecoration='underline'
                            />
                        </DocumentSourceContainer>
                        <DocumentTitle>Скиллфэктори - лучшая онлайн-школа для будущих айтишников</DocumentTitle>
                        <DocumentBadge>Технические новости</DocumentBadge>
                        <DocumentPictureSvg />
                        <DocumentText>
                            SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.
                            <br></br>
                            Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.
                        </DocumentText>
                    </DocumentContentWrapper>
                    <DocumentBottomContainer>
                        <Button text='Читать в источнике' style={readInSourceButtonStyle} />
                        <span>2 543 слова</span>
                    </DocumentBottomContainer>
                </Document>
                <Document>
                    <DocumentContentWrapper>
                        <DocumentSourceContainer>
                            <span>13.09.2021</span>
                            <Link 
                                href='https://google.com' 
                                text='Комсомольская правда KP.RU' 
                                fontSize='16px' 
                                $fontColor={secondaryColors.grey}
                                textDecoration='underline'
                            />
                        </DocumentSourceContainer>
                        <DocumentTitle>Скиллфэктори - лучшая онлайн-школа для будущих айтишников</DocumentTitle>
                        <DocumentBadge>Технические новости</DocumentBadge>
                        <DocumentPictureSvg />
                        <DocumentText>
                            SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.
                            <br></br>
                            Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.
                        </DocumentText>
                    </DocumentContentWrapper>
                    <DocumentBottomContainer>
                        <Button text='Читать в источнике' style={readInSourceButtonStyle} />
                        <span>2 543 слова</span>
                    </DocumentBottomContainer>
                </Document>
            </DocumentsContainer>
            <ShowMoreButtonContainer>
                <Button text='Показать больше' style={showMoreButtonStyle} />
            </ShowMoreButtonContainer>
        </DocumentsSection>
    );
}

export default Documents;