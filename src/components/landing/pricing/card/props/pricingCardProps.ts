import { FunctionComponent, SVGProps } from 'react';

export interface PricingCardProps {
    data: PricingCardDataProps;
    style: PricingCardStyleProps;
}

interface PricingCardDataProps {
    title: string;
    subTitle: string;
    picture: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;
    newPrice: string;
    oldPrice: string;
    monthlyPrice?: string;
    termsList: string[];
}

export interface PricingCardStyleProps {
    fontColor?: string;
    accentColor?: string;
}
