import {FaRegCheckCircle, FaBath, FaSink, FaDoorClosed} from "react-icons/fa";
import {GiBroom, GiSofa} from "react-icons/gi";
import Inquire from "../components/Inquire.jsx";
import styled from "styled-components";
import {MdDone} from "react-icons/md";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const WrapperTitle = styled.div`
    font-size: clamp(20px, 5vw, 36px);
    margin-top: clamp(20px, 5vw, 50px);
`

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
`

const Order = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
`

const OrderTitle = styled.div`
    font-size: clamp(18px, 2.5vw, 28px);
`

const CleanPrice = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

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
    
`

const PriceTitle = styled.div`
    font-size: clamp(20px, 4vw, 36px);
    margin-top: clamp(20px, 5vw, 30px);
`

const HomeClean = () => {
    return(
        <Wrapper>
            <WrapperTitle>저희는 이렇게 "입주 청소" 합니다.</WrapperTitle>

            <CleanOrder>
                <div>
                    <FaRegCheckCircle size={70} />
                    <Order>
                        <OrderTitle>1. 사전 점검</OrderTitle>
                        <div>청소 전 전체 공간의 상태와 자재의 오염도를 확인하고, 청소 범위와 전기·수도 사용 가능 여부를 점검합니다. 고객 요청사항과 특이사항을 사전에 공유하여 맞춤 청소를 준비합니다.</div>
                    </Order>
                </div>

                <div>
                    <GiBroom size={70} />
                    <Order>
                        <OrderTitle>2. 먼지 제거 & 기본 정리</OrderTitle>
                        <div>천장, 벽면, 몰딩, 문틀 등 상부 먼지를 제거하고, 가구 설치 전 바닥과 벽의 구석을 진공청소기로 청소합니다. 창틀, 방충망, 창문 틈새까지 꼼꼼하게 정리합니다.</div>
                    </Order>
                </div>

                <div>
                    <FaBath size={70} />
                    <Order>
                        <OrderTitle>3. 욕실 청소</OrderTitle>
                        <div>변기, 세면대, 샤워부스의 찌든 때를 제거하고, 타일 틈의 곰팡이는 고압 스팀으로 소독합니다. 거울, 유리, 배수구까지 세척하고 물기 제거 후 마감합니다.</div>
                    </Order>
                </div>

                <div>
                    <FaSink size={70} />
                    <Order>
                        <OrderTitle>4. 주방 청소</OrderTitle>
                        <div>싱크대 상·하부장을 내부까지 청소하고, 후드와 가스레인지 주변의 기름때를 제거합니다. 타일 벽면과 수전, 배수구까지 살균 소독하여 위생을 유지합니다.</div>
                    </Order>
                </div>

                <div>
                    <GiSofa size={70} />
                    <Order>
                        <OrderTitle>5. 거실 · 방 청소</OrderTitle>
                        <div>조명, 스위치, 콘센트 외부를 닦고, 바닥 먼지 제거 후 광택 마감합니다. 장판이나 마루의 이음새를 청소하고, 고지대(에어컨, 커튼봉 등)도 놓치지 않고 정리합니다.</div>
                    </Order>
                </div>

                <div>
                    <FaDoorClosed size={70} />
                    <Order>
                        <OrderTitle>6. 베란다 · 현관 청소</OrderTitle>
                        <div>베란다 바닥과 창틀, 방충망을 꼼꼼히 닦고 곰팡이를 제거합니다. 신발장과 현관문, 손잡이까지 세척하며 바닥까지 마무리 청소합니다.</div>
                    </Order>
                </div>

                <div>
                    <MdDone size={70} />
                    <Order>
                        <OrderTitle>7. 마무리 점검</OrderTitle>
                        <div>전 구역을 재확인하며 미처리된 부분을 보완하고, 냄새 제거 및 창문 환기를 진행합니다. 고객 입회하에 최종 점검을 진행하며, 요청 시 전·후 사진도 제공합니다.</div>
                    </Order>
                </div>
            </CleanOrder>

            <CleanPrice>
                <PriceTitle>가격 안내</PriceTitle>

                <PriceList>
                    <div>
                        <div>벽걸이 에어컨</div>
                        <div>80,000원</div>
                    </div>
                    <div>
                        <div>스탠드 에어컨</div>
                        <div>100,000 ~ 130,000원</div>
                    </div>
                    <div>
                        <div>시스템 에어컨</div>
                        <div>80,000 ~ 140,000원</div>
                    </div>
                    <div>
                        <div>2in1 에어컨</div>
                        <div>180,000원</div>
                    </div>
                </PriceList>
            </CleanPrice>

            <Inquire/>
        </Wrapper>
    )
}

export default HomeClean
