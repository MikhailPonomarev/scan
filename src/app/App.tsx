import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { Layout } from './App.style';
import Landing from '../components/landing/landing';
import LoginPage from '../components/login/loginPage';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import SearchPage from '../components/searchPage/searchPage';
import SearchResultPage from '../components/searchResultPage/searchResultPage';
import { landingRoute, loginPageRoute, searchFormRoute, searchResultRoute } from './routes';

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Header />
                <Layout>
                    <Routes>
                        <Route path={landingRoute} element={<Landing />} />
                        <Route path={loginPageRoute} element={<LoginPage />} />
                        <Route path={searchFormRoute} element={<SearchPage />} />
                        <Route path={searchResultRoute} element={<SearchResultPage />} />
                    </Routes>
                </Layout>
            </Provider>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
