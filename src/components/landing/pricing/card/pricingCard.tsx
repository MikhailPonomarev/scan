import { FC, ReactNode } from 'react';
import { PricingCardProps } from './props/pricingCardProps';
import { 
    Body, 
    Card, 
    Header, 
    HeaderTextContainer, 
    MonthlyPaymentText, 
    PriceText, 
    PriceTextsContainer, 
    HeaderSubTitle, 
    HeaderTitle, 
    TermsContainer, 
    TermsTitle, 
    TermsListContainer, 
    TermsItemContainer, 
    TermsText, 
    MonthlyPaymentWhitespace 
} from './pricingCard.style';
import { ReactComponent as GreenMark } from '../../../../assets/landing/pricing/green_mark.svg';

const PricingCard: FC<PricingCardProps & { children: ReactNode }> = ({ data, style, children }) => {
    const HeaderSvg = data.picture;

    const rouble = ' ₽';

    const terms = data.termsList.map((it) => {
        return (
            <TermsItemContainer>
                <GreenMark />
                <TermsText>{it}</TermsText>
            </TermsItemContainer>
        );
    });

    return (
        <Card $fontColor={style.$fontColor} $accentcolor={style.$accentcolor}>
            <Header accentColor={style.$accentcolor!}>
                <HeaderTextContainer>
                    <HeaderTitle>{data.title}</HeaderTitle>
                    <HeaderSubTitle>{data.subTitle}</HeaderSubTitle>
                </HeaderTextContainer>
                <HeaderSvg />
            </Header>
            <Body>
                <PriceTextsContainer>
                    <PriceText>
                        {data.newPrice + rouble}
                        <span>{data.oldPrice + rouble}</span>
                    </PriceText>
                    {data.monthlyPrice ? 
                        (<MonthlyPaymentText>
                            или {data.monthlyPrice}{rouble}/мес. при рассрочке на 24 мес.
                        </MonthlyPaymentText>)
                            :
                        <MonthlyPaymentWhitespace />
                    }
                </PriceTextsContainer>
                <TermsContainer>
                    <TermsTitle>В тариф входит:</TermsTitle>
                    <TermsListContainer>{terms}</TermsListContainer>
                </TermsContainer>
                {children}
            </Body>
        </Card>
    );
}

export default PricingCard;