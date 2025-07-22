import styled from "styled-components";
import { FaTools, FaRegCheckCircle, FaSoap } from "react-icons/fa";
import { IoWater } from "react-icons/io5";
import { FaWind } from "react-icons/fa6";
import { AiFillTool } from "react-icons/ai";
import Inquire from "../components/Inquire.jsx";

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

const AirConditionor = () => {
    return(
        <Wrapper>
            <WrapperTitle>저희는 이렇게 "에어컨 청소" 합니다.</WrapperTitle>

            <CleanOrder>
                <div>
                    <FaRegCheckCircle size={70}/>
                    <Order>
                        <OrderTitle>1. 사전 점검</OrderTitle>
                        <div>청소 전 제품의 종류(벽걸이형, 스탠드형 등)를 확인하고 작동 테스트를 통해 이상 유무를 점검한 뒤, 전기를 차단하고 주변 환경을 정리하며 가구 및 바닥을 비닐로 안전하게 커버링합니다.</div>
                    </Order>
                </div>

                <div>
                    <FaTools size={70}/>
                    <Order>
                        <OrderTitle>2. 분해 작업</OrderTitle>
                        <div>에어컨 외부 커버를 분리하고, 필터, 루버, 송풍팬, 냉각핀 등 주요 부품을 노출시켜 내부 오염 상태를 확인합니다.</div>
                    </Order>
                </div>

                <div>
                    <FaSoap size={70}/>
                    <Order>
                        <OrderTitle>3. 필터 & 커버 세척</OrderTitle>
                        <div>필터는 중성세제와 브러시로 세척하고, 분리된 커버와 루버는 개별 세척한 후 햇볕 또는 전용 건조기를 이용해 완전히 건조합니다.</div>
                    </Order>
                </div>

                <div>
                    <IoWater size={70}/>
                    <Order>
                        <OrderTitle>4. 고압세척 & 살균</OrderTitle>
                        <div>냉각핀과 송풍팬을 고압수로 세척하고 내부 곰팡이와 먼지를 제거한 뒤, 스팀 살균 또는 소독제를 분사하여 위생적으로 마무리합니다.</div>
                    </Order>
                </div>

                <div>
                    <FaWind size={70}/>
                    <Order>
                        <OrderTitle>5. 건조 & 탈취</OrderTitle>
                        <div>에어건과 자연 환기를 통해 에어컨 내부를 완전히 건조시키고, 살균 후 냄새 제거 및 탈취 처리를 통해 쾌적한 사용 환경을 만듭니다.</div>
                    </Order>
                </div>

                <div>
                    <AiFillTool size={70}/>
                    <Order>
                        <OrderTitle>6. 조립 & 작동 점검</OrderTitle>
                        <div>분해했던 부품을 다시 조립한 후, 작동 상태를 테스트하고 청소 전후를 비교하여 고객에게 확인받습니다.</div>
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

export default AirConditionor
