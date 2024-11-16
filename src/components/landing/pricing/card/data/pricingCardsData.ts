import { ReactComponent as LampSvg } from '../../../../../assets/landing/pricing/lamp.svg';
import { ReactComponent as TargetSvg } from '../../../../../assets/landing/pricing/target.svg';
import { ReactComponent as LaptopSvg } from '../../../../../assets/landing/pricing/laptop.svg';
import { primaryColors, secondaryColors } from '../../../../../style/variables.style';
import { PricingCardProps } from '../props/pricingCardProps';

const beginner: PricingCardProps = {
    data: {
        title: 'Beginner',
        subTitle: 'Для небольшого исследования',
        picture: LampSvg,
        newPrice: '799',
        oldPrice: '1 200',
        monthlyPrice: '150',
        termsList: ['Безлимитная история запросов', 'Безопасная сделка', 'Поддержка 24/7'],
    },
    style: {
        $fontColor: primaryColors.black,
        $accentcolor: secondaryColors.orange,
    },
};

const pro: PricingCardProps = {
    data: {
        title: 'Pro',
        subTitle: 'Для HR и фрилансеров',
        picture: TargetSvg,
        newPrice: '1 299',
        oldPrice: '2 600',
        monthlyPrice: '279',
        termsList: ['Все пункты тарифа Beginner', 'Экспорт истории', 'Рекомендации по приоритетам'],
    },
    style: {
        $fontColor: primaryColors.black,
        $accentcolor: secondaryColors.turquoise,
    },
};

const business: PricingCardProps = {
    data: {
        title: 'Business',
        subTitle: 'Для корпоративных клиентов',
        picture: LaptopSvg,
        newPrice: '2 379',
        oldPrice: '3 700',
        termsList: [
            'Все пункты тарифа Pro',
            'Безлимитное количество запросов',
            'Приоритетная поддержка',
        ],
    },
    style: {
        $fontColor: primaryColors.white,
        $accentcolor: primaryColors.black,
    },
};

export const pricingCardsDataList: PricingCardProps[] = [beginner, pro, business];
