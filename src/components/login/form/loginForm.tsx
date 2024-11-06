import { 
    AuthServices, 
    AuthServicesContainer, 
    AuthServicesTitle, 
    Container, 
    FormContainer, 
    Input, 
    InputContainer, 
    InputLabel, 
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
import { FormEvent, useState } from 'react';
import { authorize } from '../../../redux/slice/authSlice';
import { selectError, selectIsLoading } from '../../../redux/selector/authSelector';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const isLoading = useAppSelector(selectIsLoading);
    const error = useAppSelector(selectError);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        await dispatch(authorize({ login, password }));
        navigate('/');
    };

    const buttonStyleProps: ButtonStyleProps = {
        width: '380px',
        height: '60px',
        fontSize: '22px',
        fontColor: primaryColors.white,
        backgroundColor: secondaryColors.purple,
        marginTop: '30px'
    }

    return (
        <Container>
            <LockSvg />
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
                <Button type='submit' text='Войти' style={buttonStyleProps} />
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