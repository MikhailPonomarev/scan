import { ReactComponent as BannerSvg } from '../../../assets/login/banner.svg';
import { BannerContainer, Title } from './loginPageBanner.style';

const LoginPageBanner = () => {
    return (
        <BannerContainer>
            <Title>
                Для оформления подписки на тариф, необходимо авторизоваться.
            </Title>
            <BannerSvg />
        </BannerContainer>
    );
}

export default LoginPageBanner;