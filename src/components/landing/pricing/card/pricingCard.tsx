import { FC } from 'react';
import { PricingCardProps } from './props/pricingCardProps';
import { Body, Card, Header, HeaderTextContainer, MonthlyPaymentText, PriceText, PriceTextsContainer, HeaderSubTitle, HeaderTitle, TermsContainer, TermsTitle, TermsListContainer, TermsItemContainer, TermsText, MonthlyPaymentWhitespace } from './pricingCard.style';
import { ReactComponent as GreenMark } from '../../../../assets/landing/pricing/green_mark.svg';
import Button from '../../../common/button/button';
import { ButtonStyleProps } from '../../../common/button/props/buttonStyleProps';
import { primaryColors, secondaryColors } from '../../../../style/variables.style';

const PricingCard: FC<PricingCardProps> = ({ data, style }) => {
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

    const buttonStyle: ButtonStyleProps = {
        width: '355px',
        height: '60px',
        marginTop: 'auto',
        fontSize: '20px',
        fontColor: primaryColors.white,
        backgroundColor: secondaryColors.purple
    };


    return (
        <Card fontColor={style.fontColor} accentColor={style.accentColor}>
            <Header accentColor={style.accentColor!}>
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
                <Button text='Подробнее' style={buttonStyle}/>
            </Body>
        </Card>
    );
}

export default PricingCard;