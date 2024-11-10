import { FC } from 'react';
import { StyledLink } from './link.style';

interface Props {
    href: string;
    text: string;
    fontSize: string;
    fontColor: string;
    textDecoration?: 'underline';
}

const Link: FC<Props> = ({ href, text, fontColor, fontSize, textDecoration }) => {
    return (
        <StyledLink href={href} $fontSize={fontSize} $fontColor={fontColor} $textDecoration={textDecoration}>
            {text}
        </StyledLink>
    );
}

export default Link;