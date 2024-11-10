import { Address, StyledFooter, TextContainer } from './footer.style';
import { ReactComponent as FooterLogo } from '../../assets/footer/footer_logo.svg';
import Link from '../common/link/link';
import { primaryColors } from '../../style/variables.style';

const Footer = () => {
    return (
        <StyledFooter>
            <FooterLogo />
            <TextContainer>
                <Address>
                    г. Москва, Цветной б-р, 4
                    <br></br>
                    <Link href='tel:+74957712111' text='+7 495 771 21 11' fontSize='14px' fontColor={primaryColors.white}/>
                    <br></br>
                    <Link href='mailto:info@skan.ru' text='info@skan.ru' fontSize='14px' fontColor={primaryColors.white}/>
                </Address>
                <span>Copyright. 2024</span>
            </TextContainer>
        </StyledFooter>
    );
}

export default Footer;