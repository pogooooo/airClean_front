import styled from "styled-components";
import Inquire from "./Inquire.jsx";
import { useState, useRef, useEffect } from "react";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f9f9f9;
    padding: 2rem 0 0 0;
`;

const WrapperTitle = styled.h2`
    font-size: clamp(24px, 5vw, 36px);
    margin-top: clamp(20px, 5vw, 50px);
    margin-bottom: 2rem;
    font-weight: 400;
    color: #333;
    text-align: center;
`;

const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 800px;
    margin-top: 20px;
    gap: 1rem;
`;

const OrderItem = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 1.5rem;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
    }

    svg {
        min-width: 50px;
        min-height: 50px;
        color: #008080;
        margin-right: 1.5rem;
    }
`;

const OrderText = styled.div`
    display: flex;
    flex-direction: column;
`;

const OrderTitle = styled.h3`
    font-size: clamp(18px, 2.5vw, 22px);
    font-weight: 400;
    color: #008080;
    margin-bottom: 0.5rem;
`;

const OrderDescription = styled.p`
    font-size: clamp(14px, 2vw, 16px);
    color: #555;
    line-height: 1.6;
`;

const PriceSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
`;

const PriceTitle = styled.h2`
    font-size: clamp(24px, 4vw, 36px);
    font-weight: 400;
    color: #333;
    margin-bottom: 2rem;
`;

const PriceList = styled.div`
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    width: 90%;
    max-width: 600px;
    padding: clamp(20px, 5vw, 30px);
    margin-bottom: 50px;

    & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.8rem 0;
        border-bottom: 1px solid #eee;
    }

    & > div:last-child {
        border-bottom: none;
    }

    & > div > div:first-child {
        font-size: clamp(16px, 2.5vw, 20px);
        font-weight: 400;
        color: #333;
    }

    & > div > div:last-child {
        font-size: clamp(16px, 2.5vw, 20px);
        font-weight: 400;
        color: #008080;
    }
`;

// 추가된 스타일: 사진 캐러셀
const BeforeAfterContainer = styled.div`
    width: 90%;
    max-width: 800px;
    margin: 3rem 0;

    & > h2 {
        text-align: center;
        font-size: clamp(24px, 4vw, 36px);
        font-weight: 400;
        color: #333;
        margin-bottom: 2rem;
    }
`;

const CarouselWrapper = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Carousel = styled.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
    transform: translateX(${props => -props.currentIndex * 100}%);
`;

const CarouselItem = styled.div`
    min-width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ImageWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px; // 사진 사이의 얇은 구분선
    width: 100%;
    background-color: #eee;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    display: block;
`;

const NavButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    z-index: 10;
    font-size: 24px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.8;

    &:hover {
        opacity: 1;
    }
`;

const PrevButton = styled(NavButton)`
    left: 10px;
`;

const NextButton = styled(NavButton)`
    right: 10px;
`;

const ServiceTemplate = ({ title, steps, prices, beforeAfterImages }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? beforeAfterImages.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === beforeAfterImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    // 자동 슬라이드 기능 추가
    useEffect(() => {
        if (!beforeAfterImages || beforeAfterImages.length <= 1) return;

        const intervalId = setInterval(() => {
            handleNext();
        }, 5000); // 5초마다 다음 사진으로 이동

        return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 정리
    }, [beforeAfterImages, currentIndex]);

    return (
        <Wrapper>
            <WrapperTitle>{title}</WrapperTitle>
            <SectionContainer>
                {steps.map((step, index) => (
                    <OrderItem key={index}>
                        {step.icon}
                        <OrderText>
                            <OrderTitle>{step.title}</OrderTitle>
                            <OrderDescription>{step.description}</OrderDescription>
                        </OrderText>
                    </OrderItem>
                ))}
            </SectionContainer>
            {/* 가격 안내 위에 배치되도록 순서 변경 */}
            {beforeAfterImages && beforeAfterImages.length > 0 && (
                <BeforeAfterContainer>
                    <h2>청소 전후 비교</h2>
                    <CarouselWrapper>
                        <Carousel currentIndex={currentIndex}>
                            {beforeAfterImages.map((pair, index) => (
                                <CarouselItem key={index}>
                                    <ImageWrapper>
                                        <Image src={pair.beforeImage.imageUrl} alt={pair.beforeImage.altText} />
                                        <Image src={pair.afterImage.imageUrl} alt={pair.afterImage.altText} />
                                    </ImageWrapper>
                                </CarouselItem>
                            ))}
                        </Carousel>
                        {beforeAfterImages.length > 1 && (
                            <>
                                <PrevButton onClick={handlePrev}>{"<"}</PrevButton>
                                <NextButton onClick={handleNext}>{">"}</NextButton>
                            </>
                        )}
                    </CarouselWrapper>
                </BeforeAfterContainer>
            )}
            <PriceSection>
                <PriceTitle>가격 안내</PriceTitle>
                <PriceList>
                    {prices.map((price, index) => (
                        <div key={index}>
                            <div>{price.item}</div>
                            <div>{price.cost}</div>
                        </div>
                    ))}
                </PriceList>
            </PriceSection>
            <Inquire />
        </Wrapper>
    );
};

export default ServiceTemplate;
