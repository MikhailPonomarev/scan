import Banner from './banner/banner';
import { Layout } from './landing.style';
import Pricing from './pricing/pricing';
import Separator from './separator/separator';
import Slider from './slider/slider';

const Landing = () => {
    return (
        <Layout>
            <Banner />
            <Slider />
            <Separator />
            <Pricing />
        </Layout>
    );
}

export default Landing;