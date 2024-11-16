import { 
    AuthServices, 
    AuthServicesContainer, 
    AuthServicesTitle, 
    Container, 
    FormContainer, 
    Input, 
    InputContainer, 
    InputLabel, 
    LoadingSpinnerContainer, 
    Option, 
    OptionsContainer, 
    RecoverPasswordLink 
} from './loginForm.style';
import { ReactComponent as LockSvg } from '../../../assets/login/form/lock.svg';
import Button from '../../common/button/button';
import { ButtonStyleProps } from '../../common/button/props/buttonStyleProps';
import { primaryColors, secondaryColors } from '../../../style/variables.style';
import { ReactComponent as GoogleSvg } from '../../../assets/login/form/google.svg';
import { ReactComponent as FacebookSvg } from '../../../assets/login/form/facebook.svg';
import { ReactComponent as YandexSvg } from '../../../assets/login/form/yandex.svg';
import { ReactComponent as SpinningDotsSvg } from '../../../assets/common/spinning_dots.svg';
import { FormEvent, useEffect, useState } from 'react';
import { authorize } from '../../../redux/slice/authSlice';
import { selectIsAuthorized, selectIsLoading } from '../../../redux/selector/authSelector';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { useNavigate } from 'react-router-dom';
import { getAccountInfo } from '../../../redux/slice/accountInfoSlice';
import { getItemFromLocalStorage } from '../../../util/localStorage';
import { landingRoute } from '../../../app/routes';

const LoginForm = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

    const isLoading = useAppSelector(selectIsLoading);
    const isAuthorized = useAppSelector(selectIsAuthorized);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (login.length > 0 && password.length > 0) {
            setIsButtonDisabled(false);
        }

        if (login.length === 0 && password.length === 0) {
            setIsButtonDisabled(true);
        }

        if (login.length > 0 && password.length === 0) {
            setIsButtonDisabled(true);
        }

        if (login.length === 0 && password.length > 0) {
            setIsButtonDisabled(true);
        }
    }, [login.length, password.length]);

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        await dispatch(authorize({ login, password }));
        await dispatch(getAccountInfo(getItemFromLocalStorage('accessToken')!));
    };

    useEffect(() => {
        if (isAuthorized) {
            navigate(landingRoute);
        }
    }, [isAuthorized, navigate]);

    const buttonStyleProps: ButtonStyleProps = {
        width: '380px',
        height: '60px',
        fontSize: '22px',
        $fontColor: primaryColors.white,
        $backgroundColor: secondaryColors.purple,
        $marginTop: '30px'
    }

    return (
        <Container>
            <LockSvg />
            {isLoading && (
                <LoadingSpinnerContainer>
                    <SpinningDotsSvg />
                </LoadingSpinnerContainer>
            )}
            <OptionsContainer>
                <Option width='150px' $isActive={true}>Войти</Option>
                <Option width='210px' $isActive={false}>Зарегистрироваться</Option>
            </OptionsContainer>
            <FormContainer onSubmit={handleLogin}>
                <InputContainer>
                    <InputLabel htmlFor='login'>Логин или номер телефона:</InputLabel>
                    <Input 
                        id='login' 
                        type='text' 
                        required 
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor='password'>Пароль:</InputLabel>
                    <Input 
                        id='passord' 
                        type='password' 
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </InputContainer>
                <Button isDisabled={isButtonDisabled} type='submit' text='Войти' style={buttonStyleProps} />
            </FormContainer>
            <RecoverPasswordLink href='/' >Восстановить пароль</RecoverPasswordLink>
            <AuthServicesContainer>
                <AuthServicesTitle>Войти через:</AuthServicesTitle>
                <AuthServices>
                    <GoogleSvg />
                    <FacebookSvg />
                    <YandexSvg />
                </AuthServices>
            </AuthServicesContainer>
        </Container>
    );
}

export default LoginForm;