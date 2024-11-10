import { 
    Banner,
    Document,
    Folders,
    Layout, 
    PicturesContainer, 
    SearchFormContainer, 
    SearchFormSubTitle, 
    SearchFormTextContainer, 
    SearchFormTitle
} from './searchPage.style';
import { ReactComponent as DocumentSvg } from '../../assets/searchPage/document.svg';
import { ReactComponent as FoldersSvg } from '../../assets/searchPage/folders.svg';
import { ReactComponent as SearchBannerSvg } from '../../assets/searchPage/search_banner.svg';
import SearchForm from './form/searchForm';

const SearchPage = () => {

    return (
        <Layout>
            <SearchFormContainer>
                <SearchFormTextContainer>
                    <SearchFormTitle>Найдите необходимые данные в пару кликов.</SearchFormTitle>
                    <SearchFormSubTitle>
                        Задайте параметры поиска.
                        <br></br>
                        Чем больше заполните, тем точнее поиск
                    </SearchFormSubTitle>
                </SearchFormTextContainer>
                <SearchForm />
            </SearchFormContainer>
            <PicturesContainer>
                <Document>
                    <DocumentSvg />
                </Document>
                <Folders>
                    <FoldersSvg />
                </Folders>
                <Banner>
                    <SearchBannerSvg />
                </Banner>
            </PicturesContainer>
        </Layout>
    );
}

export default SearchPage;