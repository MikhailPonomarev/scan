import LoginPageBanner from './banner/loginPageBanner';
import LoginForm from './form/loginForm';
import { Layout } from './loginPage.style';

const LoginPage = () => {
    return (
        <Layout>
            <LoginPageBanner />
            <LoginForm />
        </Layout>
    );
}

export default LoginPage;