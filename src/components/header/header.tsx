import { ReactComponent as HeaderLogo } from '../../assets/header/header_logo.svg';
import { primaryColors, secondaryColors } from '../../style/variables.style';
import Button from '../common/button/button';
import { ButtonStyleProps } from '../common/button/props/buttonStyleProps';
import Link from '../common/link/link';
import { AuthContainer, Divider, Navigation, StyledHeader } from './header.style';

const Header = () => {
    const navLinks = ['Главная', 'Тарифы', 'FAQ'];

    const loginButtonStyle: ButtonStyleProps = {
        width: '65px',
        height: '26px',
        fontSize: '14px',
        fontColor: primaryColors.black,
        backgroundColor: secondaryColors.turquoise
    };

    return (
        <StyledHeader>
            <HeaderLogo />
            <Navigation>
                <ul>
                    {navLinks.map((it) => <li key={it}><Link href='/' text={it} fontColor={primaryColors.black} /></li>)}
                </ul>
            </Navigation>
            <AuthContainer>
                <Link href='/' text={'Зарегистрироваться'} fontColor={primaryColors.black} opacity={'40%'} />
                <Divider />
                <Button text='Войти' style={loginButtonStyle} />
            </AuthContainer>
        </StyledHeader>
    );
}

export default Header;