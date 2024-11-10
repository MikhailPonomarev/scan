import { 
    BannerContainer, 
    BannerSubTitle, 
    BannerTextContainer, 
    BannerTitle,
    Layout, 
} from './searchResultPage.style';
import { ReactComponent as BannerSvg } from '../../assets/searchResultPage/banner.svg';
import Summary from './summary/summary';
import Documents from './documents/documents';

const SearchResultPage = () => {
    return (
        <Layout>
            <BannerContainer>
                <BannerTextContainer>
                    <BannerTitle>Ищем. Скоро будут результаты</BannerTitle>
                    <BannerSubTitle>Поиск может занять некоторое время, просим сохранять терпение.</BannerSubTitle>
                </BannerTextContainer>
                <BannerSvg />
            </BannerContainer>
            <Summary />
            <Documents />
        </Layout>
    );
}

export default SearchResultPage;