import { BrowserRouter } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { Layout } from './App.style';
import Landing from '../components/landing/landing';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Layout>
                <Landing />
            </Layout>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
