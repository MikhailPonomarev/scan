import { BrowserRouter } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { Layout } from './App.style';
import Landing from '../components/landing/landing';
import LoginPage from '../components/login/loginPage';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Layout>
                <Landing />
                <LoginPage />
            </Layout>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
