import { FaRegCheckCircle, FaPaintRoller, FaCheckCircle } from "react-icons/fa";
import { GiBrickWall } from "react-icons/gi";
import { MdCleaningServices, MdConstruction } from "react-icons/md";
import { TbWashTumbleDry } from "react-icons/tb";
import Inquire from "../components/Inquire.jsx";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const WrapperTitle = styled.div`
    font-size: clamp(20px, 5vw, 36px);
    margin-top: clamp(20px, 5vw, 50px);
`;

const CleanOrder = styled.div`
    display: flex;
    justify-content: center;
    width: 50vw;
    min-width: 300px;
    flex-wrap: wrap;
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 16px;

    & > div {
        border: 1px solid black;
        padding: 20px;
        display: flex;
        align-items: center;
        margin: 10px;
        width: 100%;
        border-radius: 10px;
    }
`;

const Order = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
`;

const OrderTitle = styled.div`
    font-size: clamp(18px, 2.5vw, 28px);
`;

const CleanPrice = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const PriceList = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    width: 40vw;
    min-width: 320px;
    font-size: clamp(16px, 2.5vw, 24px);
    padding: clamp(10px, 3vw, 20px);
    margin-bottom: 50px;

    & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        margin-bottom: 10px;
    }

    & > div::before {
        content: "";
        position: absolute;
        top: 50%;
        left: clamp(80px, 30%, 140px);
        right: clamp(80px, 30%, 140px);
        border-bottom: 1px dashed #aaa;
        transform: translateY(-50%);
        z-index: 0;
    }

    & > div > div:first-child,
    & > div > div:last-child {
        background: white;
        z-index: 1;
    }
`;

const PriceTitle = styled.div`
    font-size: clamp(20px, 4vw, 36px);
    margin-top: clamp(20px, 5vw, 30px);
`;

const GroutWork = () => {
    return (
        <Wrapper>
            <WrapperTitle>저희는 이렇게 "줄눈 시공" 합니다.</WrapperTitle>

            <CleanOrder>
                <div>
                    <FaRegCheckCircle size={70} />
                    <Order>
                        <OrderTitle>1. 사전 점검</OrderTitle>
                        <div>타일 상태와 기존 줄눈 오염, 곰팡이 여부를 확인하고, 고객 요청사항과 시공 색상을 확인합니다.</div>
                    </Order>
                </div>

                <div>
                    <MdCleaningServices size={70} />
                    <Order>
                        <OrderTitle>2. 기존 줄눈 제거</OrderTitle>
                        <div>기존 줄눈, 실리콘, 곰팡이, 먼지를 제거하고 홈을 다시 파내어 시공 밀착력을 높입니다.</div>
                    </Order>
                </div>

                <div>
                    <TbWashTumbleDry size={70} />
                    <Order>
                        <OrderTitle>3. 타일 표면 세척 및 건조</OrderTitle>
                        <div>줄눈 주변과 타일 표면의 이물질을 닦고, 완전 건조시켜 시공 불량을 방지합니다.</div>
                    </Order>
                </div>

                <div>
                    <FaPaintRoller size={70} />
                    <Order>
                        <OrderTitle>4. 줄눈제 혼합</OrderTitle>
                        <div>고급 줄눈제를 균일하게 혼합하며 고객이 요청한 색상과 점도를 맞춥니다.</div>
                    </Order>
                </div>

                <div>
                    <MdConstruction size={70} />
                    <Order>
                        <OrderTitle>5. 줄눈 시공</OrderTitle>
                        <div>줄눈제를 타일 틈새에 고르게 주입하고, 평탄하게 누르며 코너도 정밀하게 마감합니다.</div>
                    </Order>
                </div>

                <div>
                    <GiBrickWall size={70} />
                    <Order>
                        <OrderTitle>6. 표면 정리</OrderTitle>
                        <div>시공 후 타일 표면에 남은 줄눈제를 제거하고 광택 손상 없이 정리합니다.</div>
                    </Order>
                </div>

                <div>
                    <FaCheckCircle size={70} />
                    <Order>
                        <OrderTitle>7. 최종 점검 및 안내</OrderTitle>
                        <div>색상, 마감 상태를 점검하고 완전 경화까지 24시간 이상 건조를 안내드립니다.</div>
                    </Order>
                </div>
            </CleanOrder>

            <CleanPrice>
                <PriceTitle>가격 안내</PriceTitle>

                <PriceList>
                    <div>
                        <div>욕실 전체</div>
                        <div>120,000원 ~</div>
                    </div>
                    <div>
                        <div>부분 시공</div>
                        <div>40,000 ~ 60,000원</div>
                    </div>
                </PriceList>
            </CleanPrice>

            <Inquire />
        </Wrapper>
    );
};

export default GroutWork;
