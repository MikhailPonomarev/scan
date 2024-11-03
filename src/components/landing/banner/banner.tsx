import Button from '../../common/button/button';
import { BannerSection, LeftSideContainer, SubTitle, TextContainer, Title } from './banner.style';
import { ReactComponent as BannerSvg } from '../../../assets/landing/banner/banner.svg';
import { ButtonStyleProps } from '../../common/button/props/buttonStyleProps';
import { primaryColors, secondaryColors } from '../../../style/variables.style';

const Banner = () => {
    const buttonStyle: ButtonStyleProps = {
        width: '335px',
        height: '65px',
        fontSize: '22px',
        fontColor: primaryColors.white,
        backgroundColor: secondaryColors.purple
    };

    return (
        <BannerSection>
            <LeftSideContainer>
                <TextContainer>
                    <Title>сервис по поиску публикаций о компании по его ИНН</Title>
                    <SubTitle>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</SubTitle>
                </TextContainer>
                <Button text={'Запросить данные'} style={buttonStyle}/>
            </LeftSideContainer>
            <BannerSvg />
        </BannerSection>
    );
}

export default Banner;