import { FC } from 'react';
import { StyledLink } from './link.style';

interface Props {
    href: string;
    text: string;
    color?: string;
}

const Link: FC<Props> = ({ href, text, color }) => {
    return (
        <StyledLink href={href} color={color}>{text}</StyledLink>
    );
}

export default Link;