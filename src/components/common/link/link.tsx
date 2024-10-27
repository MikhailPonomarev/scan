import { FC } from 'react';
import { StyledLink } from './link.style';

interface Props {
    href: string;
    text: string;
    fontColor?: string;
}

const Link: FC<Props> = ({ href, text, fontColor: color }) => {
    return (
        <StyledLink href={href} fontColor={color}>{text}</StyledLink>
    );
}

export default Link;