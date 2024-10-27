import { ReactComponent as HeaderLogo } from '../../assets/header/header_logo.svg';
import Link from '../common/link/link';
import { AuthContainer, Divider, LoginBtn, Navigation, StyledHeader } from './header.style';

const Header = () => {
    const navLinks = ['Главная', 'Тарифы', 'FAQ'];

    return (
        <StyledHeader>
            <HeaderLogo />
            <Navigation>
                <ul>
                    {navLinks.map((it) => <li key={it}><Link href='/' text={it} /></li>)}
                </ul>
            </Navigation>
            <AuthContainer>
                <Link href='/' text={'Зарегистрироваться'} />
                <Divider />
                <LoginBtn>Войти</LoginBtn>
            </AuthContainer>
        </StyledHeader>
    );
}

export default Header;