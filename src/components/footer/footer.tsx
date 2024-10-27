import { Address, StyledFooter, TextContent } from './footer.style';
import { ReactComponent as FooterLogo } from '../../assets/footer/footer_logo.svg';
import Link from '../common/link/link';
import { primaryColors } from '../../style/variables.style';

const Footer = () => {
    return (
        <StyledFooter>
            <FooterLogo />
            <TextContent>
                <Address>
                    г. Москва, Цветной б-р, 4
                    <br></br>
                    <Link href='tel:+74957712111' text='+7 495 771 21 11' color={primaryColors.white}/>
                    <br></br>
                    <Link href='mailto:info@skan.ru' text='info@skan.ru' color={primaryColors.white}/>
                </Address>
                <span>Copyright. 2024</span>
            </TextContent>
        </StyledFooter>
    );
}

export default Footer;