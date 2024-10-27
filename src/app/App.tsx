import { BrowserRouter } from "react-router-dom";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
