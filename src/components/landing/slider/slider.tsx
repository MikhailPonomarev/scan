import { Card, CardsContainer, SliderSection, SliderContainer, Title } from './slider.style';
import { ReactComponent as TimeSvg } from '../../../assets/landing/slider/time.svg';
import { ReactComponent as SearchSvg } from '../../../assets/landing/slider/search.svg';
import { ReactComponent as ShieldSvg } from '../../../assets/landing/slider/shiled.svg';
import { ReactComponent as ChevronLeftSvg } from '../../../assets/landing/slider/chevron_left.svg';
import { ReactComponent as ChevronRightSvg } from '../../../assets/landing/slider/chevron_right.svg';

const Slider = () => {
    const cards = [
        (<Card>
            <TimeSvg />
            <span>Высокая и оперативная скорость обработки заявки</span>
        </Card>),
        (<Card>
            <SearchSvg />
            <span>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</span>
        </Card>),
        (<Card>
            <ShieldSvg />
            <span>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</span>
        </Card>),
    ];

    return (
        <SliderSection>
            <Title>Почему именно мы</Title>
            <SliderContainer>
                <ChevronLeftSvg />
                <CardsContainer>{cards}</CardsContainer>
                <ChevronRightSvg />
            </SliderContainer>
        </SliderSection>
    );
}

export default Slider;