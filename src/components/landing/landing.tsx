import Banner from './banner/banner';
import { LandingWrapper } from './landing.style';
import Slider from './slider/slider';

const Landing = () => {
    return (
        <LandingWrapper>
            <Banner />
            <Slider />
        </LandingWrapper>
    );
}

export default Landing;