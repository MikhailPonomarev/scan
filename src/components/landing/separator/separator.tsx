import { SeparatorContainer } from './separator.style';
import { ReactComponent as SeparatorLeftSvg } from '../../../assets/landing/separator/separator_left.svg';
import { ReactComponent as SeparatorRightSvg } from '../../../assets/landing/separator/separator_right.svg';

const Separator = () => {
    return (
        <SeparatorContainer>
            <SeparatorLeftSvg />
            <SeparatorRightSvg />
        </SeparatorContainer>
    );
}

export default Separator;