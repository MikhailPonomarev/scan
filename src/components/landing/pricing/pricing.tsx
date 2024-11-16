import PricingCard from './card/pricingCard';
import { pricingCardsDataList } from './card/data/pricingCardsData';
import { CardsContainer, PricingSection, Title } from './pricing.style';
import { ButtonStyleProps } from '../../common/button/props/buttonStyleProps';
import { primaryColors, secondaryColors } from '../../../style/variables.style';
import Button from '../../common/button/button';
import { useAppSelector } from '../../../redux/hook';
import { selectIsAuthorized } from '../../../redux/selector/authSelector';

const Pricing = () => {
    const isAuthorized = useAppSelector(selectIsAuthorized);

    const goToAccountPageButton: ButtonStyleProps = {
        width: '355px',
        height: '60px',
        $marginTop: 'auto',
        fontSize: '20px',
        $fontColor: primaryColors.black,
        $backgroundColor: '#D2D2D2',
    }

    const moreButtonStyle: ButtonStyleProps = {
        width: '355px',
        height: '60px',
        $marginTop: 'auto',
        fontSize: '20px',
        $fontColor: primaryColors.white,
        $backgroundColor: secondaryColors.purple,
    };

    const goToAccountPageBtn = <Button text='Перейти в личный кабинет' style={goToAccountPageButton}/>;

    const moreBtn = <Button text='Подробнее' style={moreButtonStyle}/>;

    const cards = pricingCardsDataList.map((it) => {
        return (
            <PricingCard data={it.data} style={it.style}>
                {(it.data.title === 'Beginner' && isAuthorized) ? goToAccountPageBtn : moreBtn}
            </PricingCard>
        );
    });

    return (
        <PricingSection>
            <Title>наши тарифы</Title>
            <CardsContainer>
                {cards}
            </CardsContainer>
        </PricingSection>
    );
}

export default Pricing;