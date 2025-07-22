import {FaFan, FaRegCheckCircle} from "react-icons/fa";
import {GiVacuumCleaner} from "react-icons/gi";
import {MdDone, MdSettingsSuggest} from "react-icons/md";
import Inquire from "../components/Inquire.jsx";
import styled from "styled-components";
import {BsFilterSquare} from "react-icons/bs";
import {LuPanelTopOpen} from "react-icons/lu";

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

const AirPurifier = () => {
    return(
        <Wrapper>
            <WrapperTitle>저희는 이렇게 "공기청정기 청소" 합니다.</WrapperTitle>

            <CleanOrder>
                <div>
                    <FaRegCheckCircle size={70} />
                    <Order>
                        <OrderTitle>1. 사전 점검</OrderTitle>
                        <div>제품의 기종, 구조, 사용 연수 등을 확인한 뒤, 전원을 차단하고 외관 상태와 공기 흡입/배출 방향을 점검합니다.</div>
                    </Order>
                </div>

                <div>
                    <GiVacuumCleaner size={70} />
                    <Order>
                        <OrderTitle>2. 외부 분해 및 먼지 제거</OrderTitle>
                        <div>전면 커버와 필터 커버 등을 분리한 후, 진공청소기나 에어건을 이용해 내부 먼지와 오염물을 제거합니다.</div>
                    </Order>
                </div>

                <div>
                    <BsFilterSquare size={70} />
                    <Order>
                        <OrderTitle>3. 필터 세척 및 교체</OrderTitle>
                        <div>프리필터는 세척 후 건조하고, HEPA나 활성탄 필터는 교체하거나 에어건으로 먼지를 털어줍니다.</div>
                    </Order>
                </div>

                <div>
                    <FaFan size={70} />
                    <Order>
                        <OrderTitle>4. 내부 팬 및 센서 청소</OrderTitle>
                        <div>송풍팬의 날개 틈과 먼지/냄새 센서를 부드럽게 닦아내며, 곰팡이나 세균이 있을 경우 살균 세척합니다.</div>
                    </Order>
                </div>

                <div>
                    <LuPanelTopOpen size={70} />
                    <Order>
                        <OrderTitle>5. 외관 마감 및 조립</OrderTitle>
                        <div>본체 외관과 조작부를 깨끗하게 닦고, 분리된 부품을 조립한 뒤 배출구 풍량 및 작동 상태를 점검합니다.</div>
                    </Order>
                </div>

                <div>
                    <MdSettingsSuggest size={70} />
                    <Order>
                        <OrderTitle>6. 작동 점검 및 안내</OrderTitle>
                        <div>전원을 연결하여 풍량과 센서 작동 여부를 확인한 후, 필터 교체 주기와 사용 시 유의사항을 안내드립니다.</div>
                    </Order>
                </div>

                <div>
                    <MdDone size={70} />
                    <Order>
                        <OrderTitle>7. 고객 확인</OrderTitle>
                        <div>청소 전후 비교 설명을 제공하고, 고객 요청 시 사진 자료도 공유해드리며, 만족 여부를 최종 확인합니다.</div>
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

export default AirPurifier
