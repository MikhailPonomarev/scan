import { FC } from 'react';
import { StyledButton } from './button.style';

const Button: FC<{ text: string }> = ({ text }) => {
    return (
        <StyledButton>{text}</StyledButton>
    );
}

export default Button;