import Button from '../../common/button/button';
import { BannerContainer, LeftSideWrapper, SubTitle, TextContent, Title } from './banner.style';
import { ReactComponent as BannerSvg } from '../../../assets/landing/banner_svg.svg';

const Banner = () => {
    return (
        <BannerContainer>
            <LeftSideWrapper>
                <TextContent>
                    <Title>сервис по поиску публикаций о компании по его ИНН</Title>
                    <SubTitle>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</SubTitle>
                </TextContent>
                <Button text={'Запросить данные'} />
            </LeftSideWrapper>
            <BannerSvg />
        </BannerContainer>
    );
}

export default Banner;