import { useState } from 'react';
import { SelectCurrentItem, SelectMenu, SelectMenuItem, SelectToneContainerButton } from './selectTone.style';
import { ReactComponent as SelectArrowDownSvg } from '../../../../assets/searchPage/select_arrow_down.svg';

const SelectTone = () => {
    const tones = ['Любая', 'Позитивная', 'Негативная']

    const [currentItem, setCurrentItem] = useState<string>(tones[0]);
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const handleSelectButtonClick = () => showMenu ? setShowMenu(false) : setShowMenu(true);

    const handleSelectMenuItemClick = (item: string) => {
        setCurrentItem(item);
        setShowMenu(false);
    };

    const selectMenuItems = tones.map((it) => {
        return (
            <SelectMenuItem key={it} onClick={() => handleSelectMenuItemClick(it)}>{it}</SelectMenuItem>
        );
    });

    return (
        <SelectToneContainerButton onClick={handleSelectButtonClick}>
            <SelectCurrentItem>{currentItem}</SelectCurrentItem>
            <SelectArrowDownSvg />
            {showMenu && (<SelectMenu>{selectMenuItems}</SelectMenu>)}
        </SelectToneContainerButton>
    );
}

export default SelectTone;