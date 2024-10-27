import Banner from './banner/banner';
import { LandingWrapper } from './landing.style';
import Separator from './separator/separator';
import Slider from './slider/slider';

const Landing = () => {
    return (
        <LandingWrapper>
            <Banner />
            <Slider />
            <Separator />
        </LandingWrapper>
    );
}

export default Landing;