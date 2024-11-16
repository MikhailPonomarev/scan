import { FC } from 'react';
import { StyledButton } from './button.style';
import { ButtonStyleProps } from './props/buttonStyleProps';

interface Props {
    type?: 'submit';
    text: string;
    isDisabled?: boolean;
    onClick?: () => void;
    style: ButtonStyleProps;
}

const Button: FC<Props> = ({ type, text, isDisabled, onClick, style }) => {
    return (
        <StyledButton
            disabled={isDisabled}
            type={type}
            onClick={onClick}
            width={style.width}  
            height={style.height} 
            fontSize={style.fontSize} 
            $fontColor={style.$fontColor} 
            $backgroundColor={style.$backgroundColor} 
            $marginTop={style.$marginTop}
            $isDisabled={isDisabled}
        >
            {text}
        </StyledButton>
    );
}

export default Button;