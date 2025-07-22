import {MdCleanHands, MdCleaningServices} from "react-icons/md";
import {GiTakeMyMoney} from "react-icons/gi";
import styled from "styled-components";

const PromiseListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: default;
`

const PromiseTitle = styled.div`
    font-size: clamp(24px, 5vw, 36px);
    margin-top: 50px;
`

const PromiseContent = styled.div`
    margin-top: 50px;
    font-size: clamp(14px, 3vw, 20px);
    max-width: 900px;

    & > div {
        display: flex;
        padding: 10px;
        margin-bottom: 20px;
        gap: 10px;
        align-items: flex-start;

        @media (max-width: 600px) {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        svg {
            font-size: clamp(48px, 7vw, 90px);
        }

        & > div {
            flex: 1;
        }
    }
`

const PromiseContentTitle = styled.div`
    font-size: 28px;
`

const PromiseList = () => {
    return(
        <PromiseListWrapper>
            <PromiseTitle>저희는 약속합니다.</PromiseTitle>

            <PromiseContent>
                <div>
                    <MdCleaningServices size={90} style={{marginRight: '10px'}} />
                    <div>
                        <PromiseContentTitle>깨끗한 청소</PromiseContentTitle>
                        <div>숙련된 전문 인력이 최신 장비를 사용하여 먼지 하나 없이 깨끗하게 청소합니다.<br/>눈에 보이지 않는 곳까지 꼼꼼하게, 위생까지 생각한 마무리!</div>
                    </div>
                </div>
                <div>
                    <MdCleanHands size={90} style={{marginRight: '10px'}} />
                    <div>
                        <PromiseContentTitle>안전한 세제 사용</PromiseContentTitle>
                        <div>사람과 환경을 생각한 친환경 세제를 사용하여 안심하고 맡기실 수 있습니다.<br/>아이, 반려동물이 있는 가정도 걱정없이 청소하세요.</div>
                    </div>
                </div>
                <div>
                    <GiTakeMyMoney size={90} style={{marginRight: '10px'}} />
                    <div>
                        <PromiseContentTitle>정직한 가격</PromiseContentTitle>
                        <div>숨겨진 비용 없이 투명하게 안내해드립니다.<br/>정찰제로 믿을 수 있는 가격 정책을 지켜갑니다.</div>
                    </div>
                </div>
            </PromiseContent>
        </PromiseListWrapper>
    )
}

export default PromiseList
