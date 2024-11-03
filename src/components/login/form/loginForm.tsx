import { AuthServices, AuthServicesContainer, AuthServicesTitle, Container, FormContainer, Input, InputContainer, InputLabel, RecoverPasswordLink } from './loginForm.style';
import { ReactComponent as LockSvg } from '../../../assets/login/form/lock.svg';
import Button from '../../common/button/button';
import { ButtonStyleProps } from '../../common/button/props/buttonStyleProps';
import { primaryColors, secondaryColors } from '../../../style/variables.style';
import { ReactComponent as GoogleSvg } from '../../../assets/login/form/google.svg';
import { ReactComponent as FacebookSvg } from '../../../assets/login/form/facebook.svg';
import { ReactComponent as YandexSvg } from '../../../assets/login/form/yandex.svg';

export const LoginForm = () => {
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
            {/* <LockSvg /> */}
            <FormContainer>
                <InputContainer>
                    <InputLabel htmlFor='login'>Логин или номер телефона:</InputLabel>
                    <Input id='login' type='text' required />
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor='password'>Пароль:</InputLabel>
                    <Input id='passord' type='password' required />
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