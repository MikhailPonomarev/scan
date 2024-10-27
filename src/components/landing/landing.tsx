import Banner from './banner/banner';
import { LandingSection } from './landing.style';
import Pricing from './pricing/pricing';
import Separator from './separator/separator';
import Slider from './slider/slider';

const Landing = () => {
    return (
        <LandingSection>
            <Banner />
            <Slider />
            <Separator />
            <Pricing />
        </LandingSection>
    );
}

export default Landing;