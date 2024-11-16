import styled from 'styled-components';
import { fonts, primaryColors, secondaryColors } from '../../../style/variables.style';

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 525px;
    width: 430px;
    padding-top: 25px;
    font-family: ${fonts.inter};
    font-size: 16px;
    border-radius: 10px;
    box-shadow: 0px 0px 24px -4px rgba(66, 68, 90, 0.41);

    & > svg {
        position: absolute;
        top: -60px;
        left: -50px;
        z-index: 2;
    }
`;

export const LoadingSpinnerContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 80%;
    z-index: 1;

    svg {
        width: 150px;
        height: 150px;
    }
`;

export const OptionsContainer = styled.div`
    display: flex;
    gap: 15px;
    height: 30px;
`;

export const Option = styled.div<{ width: string; $isActive: boolean }>`
    display: flex;
    justify-content: center;
    width: ${(props) => props.width};
    color: ${(props) => (props.$isActive ? primaryColors.green : secondaryColors.lightGrey)};
    border-bottom: 2px solid
        ${(props) => (props.$isActive ? primaryColors.green : secondaryColors.lightGrey)};
    cursor: pointer;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    width: 380px;
    font-family: ${fonts.inter};
    font-size: 14px;
    color: ${secondaryColors.grey};

    div:nth-of-type(2) {
        margin-top: 20px;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const InputLabel = styled.label``;

export const Input = styled.input`
    width: 380px;
    height: 45px;
    border: 1px solid ${secondaryColors.lightGrey};
    border-radius: 5px;
    font-size: 16px;
    color: ${primaryColors.black};
`;

export const RecoverPasswordLink = styled.a`
    margin-top: 20px;
    color: ${secondaryColors.purple};
`;

export const AuthServicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-self: start;
    margin-top: 30px;
    margin-left: 25px;
`;

export const AuthServicesTitle = styled.span`
    color: ${secondaryColors.grey};
`;

export const AuthServices = styled.div`
    display: flex;
    gap: 10px;

    svg {
        cursor: pointer;
    }
`;
