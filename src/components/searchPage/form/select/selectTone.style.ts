import styled from 'styled-components';
import { primaryColors, secondaryColors } from '../../../../style/variables.style';

export const SelectToneContainerButton = styled.button`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 246px;
    height: 50px;
    padding: 0px 10px;
    font-size: 18px;
    background-color: ${primaryColors.white};
    border-radius: 5px;
    border: 1px solid ${secondaryColors.lightGrey};
    cursor: pointer;
`;

export const SelectCurrentItem = styled.div``;

export const SelectMenu = styled.ul`
    position: absolute;
    top: 100%;
    right: 0;
    min-width: 135px;
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    background-color: ${primaryColors.white};
    border: 1px solid ${secondaryColors.lightGrey};
    border-radius: 5px;
    z-index: 1000;
`;

export const SelectMenuItem = styled.li`
    padding: 8px;
    font-size: 18px;
    text-align: start;
    transition: background-color 0.3s ease, color 0.3s ease;
    cursor: pointer;

    &:hover {
        color: ${primaryColors.white};
        background-color: ${secondaryColors.purple};
        border-radius: 5px;
    }
`;
