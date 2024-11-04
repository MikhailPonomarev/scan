import PricingCard from './card/pricingCard';
import { pricingCardsDataList } from './card/data/pricingCardsData';
import { CardsContainer, PricingSection, Title } from './pricing.style';

const Pricing = () => {
    const cards = pricingCardsDataList.map((it) => <PricingCard data={it.data} style={it.style} />);

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