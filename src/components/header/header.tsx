import { useNavigate } from 'react-router-dom';
import { ReactComponent as HeaderLogo } from '../../assets/header/header_logo.svg';
import { ReactComponent as AvatarSvg } from '../../assets/header/avatar.svg';
import { primaryColors, secondaryColors } from '../../style/variables.style';
import Button from '../common/button/button';
import { ButtonStyleProps } from '../common/button/props/buttonStyleProps';
import Link from '../common/link/link';
import { AccountContainer, AccountUserContainer, AuthContainer, Divider, Navigation, StyledHeader, UserName } from './header.style';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { selectIsAuthorized } from '../../redux/selector/authSelector';
import { logout } from '../../redux/slice/authSlice';

const Header = () => {
    const navLinks = ['Главная', 'Тарифы', 'FAQ'];

    const loginButtonStyle: ButtonStyleProps = {
        width: '65px',
        height: '26px',
        fontSize: '14px',
        fontColor: primaryColors.black,
        backgroundColor: secondaryColors.turquoise,
    };

    const logoutButtonStyle: ButtonStyleProps = {
        width: '32px',
        height: '12px',
        fontSize: '10px',
        fontColor: secondaryColors.lightGrey,
        backgroundColor: primaryColors.white,
    };

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isAuthorized = useAppSelector(selectIsAuthorized);

    const handleLogoClick = () => navigate('/');

    const handleLoginButtonClick = () => navigate('/login');

    const handleLogoutButtonClick = () => dispatch(logout());

    return (
        <StyledHeader>
            <HeaderLogo onClick={handleLogoClick} />
            <Navigation>
                <ul>
                    {navLinks.map((it) => <li key={it}><Link href='/' text={it} fontColor={primaryColors.black} /></li>)}
                </ul>
            </Navigation>
            {isAuthorized ? (
                    <AccountContainer>
                        <AccountUserContainer>
                            <UserName>Алексей А.</UserName>
                            <Button text='Выйти' onClick={handleLogoutButtonClick} style={logoutButtonStyle} />
                        </AccountUserContainer>
                        <AvatarSvg />
                    </AccountContainer>
                ) : (
                    <AuthContainer>
                        <Link href='/' text='Зарегистрироваться' fontColor={primaryColors.black} opacity={'40%'} />
                        <Divider />
                        <Button text='Войти' onClick={handleLoginButtonClick} style={loginButtonStyle} />
                    </AuthContainer>
                )
            }
        </StyledHeader>
    );
}

export default Header;