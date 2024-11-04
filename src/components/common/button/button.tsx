import { FC, FormEvent } from 'react';
import { StyledButton } from './button.style';
import { ButtonStyleProps } from './props/buttonStyleProps';

interface Props {
    type?: 'submit';
    text: string;
    onClick?: () => void;
    style: ButtonStyleProps;
}

const Button: FC<Props> = ({ type, text, onClick, style }) => {
    return (
        <StyledButton 
            type={type}
            onClick={onClick}
            width={style.width}  
            height={style.height} 
            fontSize={style.fontSize} 
            fontColor={style.fontColor} 
            backgroundColor={style.backgroundColor} 
            marginTop={style.marginTop}
        >
            {text}
        </StyledButton>
    );
}

export default Button;