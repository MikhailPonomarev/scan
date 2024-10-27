import { FC } from 'react';
import { StyledLink } from './link.style';

interface Props {
    href: string;
    text: string;
    fontColor: string;
    opacity?: string;
}

const Link: FC<Props> = ({ href, text, fontColor, opacity }) => {
    return (
        <StyledLink href={href} fontColor={fontColor} opacity={opacity}>
            {text}
        </StyledLink>
    );
}

export default Link;