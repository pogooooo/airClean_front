import { FaSprayCanSparkles } from "react-icons/fa6";
import { GiVacuumCleaner, GiWaterDrop } from "react-icons/gi";
import { MdSettingsSuggest, MdDone } from "react-icons/md";
import { PiToiletPaperBold } from "react-icons/pi";
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

const MattressClean = () => {
    return (
        <Wrapper>
            <WrapperTitle>저희는 이렇게 "매트리스 청소" 합니다.</WrapperTitle>

            <CleanOrder>
                <div>
                    <FaRegCheckCircle size={70} />
                    <Order>
                        <OrderTitle>1. 사전 점검</OrderTitle>
                        <div>매트리스의 오염 상태, 곰팡이 유무, 소재 및 구조를 확인하고 청소 가능 여부를 점검합니다.</div>
                    </Order>
                </div>

                <div>
                    <GiVacuumCleaner size={70} />
                    <Order>
                        <OrderTitle>2. 표면 먼지 제거</OrderTitle>
                        <div>강력한 흡입력의 진공청소기로 매트리스 표면의 먼지, 진드기, 머리카락 등을 제거합니다.</div>
                    </Order>
                </div>

                <div>
                    <FaSprayCanSparkles size={70} />
                    <Order>
                        <OrderTitle>3. 세정제 분사</OrderTitle>
                        <div>전용 친환경 세정제를 고르게 분사하여 살균 및 탈취 처리를 진행합니다.</div>
                    </Order>
                </div>

                <div>
                    <GiWaterDrop size={70} />
                    <Order>
                        <OrderTitle>4. 물세척 및 오염 제거</OrderTitle>
                        <div>심한 오염은 저압의 물 분사 및 스크러버로 부분 세척하여 얼룩과 냄새를 제거합니다.</div>
                    </Order>
                </div>

                <div>
                    <PiToiletPaperBold size={70} />
                    <Order>
                        <OrderTitle>5. 물기 제거 및 건조</OrderTitle>
                        <div>전문 장비로 잔여 수분을 제거하고, 건조 시간을 단축시키기 위해 송풍기를 사용합니다.</div>
                    </Order>
                </div>

                <div>
                    <MdSettingsSuggest size={70} />
                    <Order>
                        <OrderTitle>6. 마무리 점검 및 안내</OrderTitle>
                        <div>청소 후 재오염 여부를 확인하고, 관리 요령 및 권장 청소 주기를 안내해드립니다.</div>
                    </Order>
                </div>

                <div>
                    <MdDone size={70} />
                    <Order>
                        <OrderTitle>7. 고객 확인</OrderTitle>
                        <div>청소 전후 비교 설명을 드리고, 고객의 최종 확인 및 요청 사항을 점검합니다.</div>
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

export default MattressClean;
