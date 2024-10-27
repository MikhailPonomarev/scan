import { FC } from 'react';
import { StyledButton } from './button.style';
import { ButtonStyleProps } from './buttonStyleProps';

interface Props {
    text: string;
    style: ButtonStyleProps;
}

const Button: FC<Props> = ({ text, style }) => {
    return (
        <StyledButton 
            width={style.width}  
            height={style.height} 
            fontSize={style.fontSize} 
            fontColor={style.fontColor} 
            backgroundColor={style.backgroundColor} 
        >
            {text}
        </StyledButton>
    );
}

export default Button;