import Button from '../../common/button/button';
import { BannerSection, LeftSideContainer, SubTitle, TextContainer, Title } from './banner.style';
import { ReactComponent as BannerSvg } from '../../../assets/landing/banner/banner.svg';
import { ButtonStyleProps } from '../../common/button/props/buttonStyleProps';
import { primaryColors, secondaryColors } from '../../../style/variables.style';
import { useAppSelector } from '../../../redux/hook';
import { selectIsAuthorized } from '../../../redux/selector/authSelector';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const isAuthorzied = useAppSelector(selectIsAuthorized);
    const navigate = useNavigate();

    const buttonStyle: ButtonStyleProps = {
        width: '335px',
        height: '65px',
        fontSize: '22px',
        $fontColor: primaryColors.white,
        $backgroundColor: secondaryColors.purple
    };

    const handleRequestDataButton = () => navigate('search-result');

    return (
        <BannerSection>
            <LeftSideContainer>
                <TextContainer>
                    <Title>сервис по поиску публикаций о компании по его ИНН</Title>
                    <SubTitle>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</SubTitle>
                </TextContainer>
                {isAuthorzied && <Button text={'Запросить данные'} style={buttonStyle} onClick={handleRequestDataButton} />}
            </LeftSideContainer>
            <BannerSvg />
        </BannerSection>
    );
}

export default Banner;