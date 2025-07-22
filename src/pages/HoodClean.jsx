import { FaSprayCanSparkles, FaScrewdriver } from "react-icons/fa6";
import { GiWashingMachine } from "react-icons/gi";
import { MdSettingsSuggest, MdDone } from "react-icons/md";
import { TbGrill } from "react-icons/tb";
import Inquire from "../components/Inquire.jsx";
import styled from "styled-components";
import {FaRegCheckCircle} from "react-icons/fa";

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

const HoodClean = () => {
    return (
        <Wrapper>
            <WrapperTitle>저희는 이렇게 "주방 후드 청소" 합니다.</WrapperTitle>

            <CleanOrder>
                <div>
                    <FaRegCheckCircle size={70} />
                    <Order>
                        <OrderTitle>1. 사전 점검</OrderTitle>
                        <div>후드의 설치 방식, 오염 상태, 필터 구조 등을 확인하고 전원을 차단하여 안전하게 작업 준비합니다.</div>
                    </Order>
                </div>

                <div>
                    <FaScrewdriver size={70} />
                    <Order>
                        <OrderTitle>2. 커버 및 필터 분해</OrderTitle>
                        <div>후드 커버와 필터, 오일 트레이 등을 분리하여 내부 청소가 가능한 상태로 만듭니다.</div>
                    </Order>
                </div>

                <div>
                    <GiWashingMachine size={70} />
                    <Order>
                        <OrderTitle>3. 기름때 제거</OrderTitle>
                        <div>전용 세제와 고온수를 활용해 필터와 커버에 붙은 기름때와 찌든 때를 말끔히 제거합니다.</div>
                    </Order>
                </div>

                <div>
                    <TbGrill size={70} />
                    <Order>
                        <OrderTitle>4. 팬/모터 내부 청소</OrderTitle>
                        <div>내부의 송풍팬, 모터 주위에 붙은 먼지와 기름 찌꺼기를 정밀하게 닦아 성능을 회복시킵니다.</div>
                    </Order>
                </div>

                <div>
                    <FaSprayCanSparkles size={70} />
                    <Order>
                        <OrderTitle>5. 외관 세척 및 살균</OrderTitle>
                        <div>후드 본체 외부와 조작부를 세척하고, 친환경 살균제를 사용해 위생 상태를 최종 점검합니다.</div>
                    </Order>
                </div>

                <div>
                    <MdSettingsSuggest size={70} />
                    <Order>
                        <OrderTitle>6. 조립 및 작동 테스트</OrderTitle>
                        <div>분리한 부품을 건조 후 재조립하고, 전원을 연결하여 팬 작동 상태 및 소음 여부를 확인합니다.</div>
                    </Order>
                </div>

                <div>
                    <MdDone size={70} />
                    <Order>
                        <OrderTitle>7. 고객 확인</OrderTitle>
                        <div>청소 전후 차이점을 안내드리고, 고객 만족 여부를 확인합니다. 필요 시 사진 자료도 제공합니다.</div>
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

            <Inquire />
        </Wrapper>
    );
};

export default HoodClean;
