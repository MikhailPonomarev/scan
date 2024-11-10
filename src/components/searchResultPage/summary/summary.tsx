import { 
    Carousel, 
    CarouselContainer, 
    CarouselHeading, 
    CarouselItem, 
    SummarySection, 
    SummarySubTitle, 
    SummaryTitle 
} from './summary.style';
import { ReactComponent as ChevronGreyLeft } from '../../../assets/common/chevron_grey_left.svg';
import { ReactComponent as ChevronGreyRight } from '../../../assets/common/chevron_grey_right.svg';

const Summary = () => {
    return (
        <SummarySection>
            <SummaryTitle>Общая сводка</SummaryTitle>
            <SummarySubTitle>Найдено 4 221 вариантов</SummarySubTitle>
            <CarouselContainer>
                <ChevronGreyLeft />
                <Carousel>
                    <CarouselHeading>
                        <span>Период</span>
                        <span>Всего</span>
                        <span>Риски</span>
                    </CarouselHeading>
                    <CarouselItem>
                        <span>10.09.2021</span>
                        <span>5</span>
                        <span>0</span>
                    </CarouselItem>
                    <CarouselItem>
                        <span>10.09.2021</span>
                        <span>5</span>
                        <span>0</span>
                    </CarouselItem>
                </Carousel>
                <ChevronGreyRight />
            </CarouselContainer>
        </SummarySection>
    );
}

export default Summary;