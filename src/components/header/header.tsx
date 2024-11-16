import { useNavigate } from 'react-router-dom';
import { ReactComponent as HeaderLogo } from '../../assets/header/header_logo.svg';
import { ReactComponent as AvatarSvg } from '../../assets/header/avatar.svg';
import { primaryColors, secondaryColors } from '../../style/variables.style';
import Button from '../common/button/button';
import { ButtonStyleProps } from '../common/button/props/buttonStyleProps';
import Link from '../common/link/link';
import { 
    AccountContainer, 
    AccountUserContainer, 
    AuthContainer, 
    Divider, 
    LimitsContainer, 
    LimitRowNumber, 
    LimitRowText, 
    Navigation, 
    StyledHeader, 
    UserName, 
    LimitsGrid, 
    RightSideContainer
} from './header.style';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { selectIsAuthorized } from '../../redux/selector/authSelector';
import { logout } from '../../redux/slice/authSlice';
import { selectCompanyLimit, selectUsedCompanyCount } from '../../redux/selector/accountInfoSelector';
import { landingRoute, loginPageRoute } from '../../app/routes';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const isAuthorized = useAppSelector(selectIsAuthorized);
    const usedCompanyCount = useAppSelector(selectUsedCompanyCount);
    const companyLimit = useAppSelector(selectCompanyLimit);

    const handleLogoClick = () => navigate(landingRoute);

    const handleLoginButtonClick = () => navigate(loginPageRoute);

    const handleLogoutButtonClick = () => {
        dispatch(logout());
        navigate(landingRoute);
    }

    const navLinks = ['Главная', 'Тарифы', 'FAQ'];

    const loginButtonStyle: ButtonStyleProps = {
        width: '65px',
        height: '26px',
        fontSize: '14px',
        $fontColor: primaryColors.black,
        $backgroundColor: secondaryColors.turquoise,
    };

    const logoutButtonStyle: ButtonStyleProps = {
        width: '32px',
        height: '12px',
        fontSize: '10px',
        $fontColor: secondaryColors.lightGrey,
        $backgroundColor: primaryColors.white,
    };

    return (
        <StyledHeader>
            <HeaderLogo onClick={handleLogoClick} />
            <RightSideContainer>
                <Navigation>
                    <ul>
                        {navLinks.map((it) => {
                            return (
                                <li key={it}>
                                    <Link href='/' text={it} fontSize='14px' $fontColor={primaryColors.black} />
                                </li>
                            );
                        })}
                    </ul>
                </Navigation>
                {isAuthorized ? (
                    <>
                        <LimitsContainer>
                            <LimitsGrid>
                                <LimitRowText>Использовано компаний</LimitRowText>
                                <LimitRowNumber $color={primaryColors.black}>{usedCompanyCount}</LimitRowNumber>
                                <LimitRowText>Лимит по компаниям</LimitRowText>
                                <LimitRowNumber $color='#8AC540'>{companyLimit}</LimitRowNumber>
                            </LimitsGrid>
                        </LimitsContainer>
                        <AccountContainer>
                            <AccountUserContainer>
                                <UserName>Алексей А.</UserName>
                                <Button text='Выйти' onClick={handleLogoutButtonClick} style={logoutButtonStyle} />
                            </AccountUserContainer>
                            <AvatarSvg />
                        </AccountContainer>
                    </>
                    ) : (
                        <AuthContainer>
                            <Link href='/' text='Зарегистрироваться' fontSize='14px' $fontColor={secondaryColors.grey} />
                            <Divider />
                            <Button text='Войти' onClick={handleLoginButtonClick} style={loginButtonStyle} />
                        </AuthContainer>
                    )
                }
            </RightSideContainer>
        </StyledHeader>
    );
}

export default Header;