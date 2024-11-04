import { useNavigate } from 'react-router-dom';
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

    const navigate = useNavigate();

    const handleLogoClick = () => navigate('/');

    const handleLoginButtonClick = () => navigate('/login');

    return (
        <StyledHeader>
            <HeaderLogo onClick={handleLogoClick} />
            <Navigation>
                <ul>
                    {navLinks.map((it) => <li key={it}><Link href='/' text={it} fontColor={primaryColors.black} /></li>)}
                </ul>
            </Navigation>
            <AuthContainer>
                <Link href='/' text={'Зарегистрироваться'} fontColor={primaryColors.black} opacity={'40%'} />
                <Divider />
                <Button text='Войти' onClick={handleLoginButtonClick} style={loginButtonStyle} />
            </AuthContainer>
        </StyledHeader>
    );
}

export default Header;