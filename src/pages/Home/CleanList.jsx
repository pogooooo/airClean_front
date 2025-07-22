import styled from "styled-components";

const CleanListWrapper = styled.div`
    background-color: #008080;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CleanListTitle = styled.div`
    font-size: clamp(24px, 4vw, 36px);
    margin-top: 50px;
`

const CleanListContent = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: black;
    width: 100%;
    margin: 50px 0;
    gap: 20px;
    
    & > div {
        background-color: white;
        flex: 1 1 200px;
        max-width: 230px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 30px;
    }
`

const CleanListContentTitle = styled.div`
    font-size: clamp(20px, 2.5vw, 28px);
    margin-top: 20px;
    margin-bottom: 20px;
`

const CleanListContentMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 150px;
    font-size: clamp(14px, 2vw, 20px);

    &::before {
        content: "";
        flex-grow: 1;
        border-bottom: 5px dotted #aaa;
        margin-right: 10px; /* 텍스트와 점선 사이 간격 */
    }
`

const CleanList = () => {
    return(
        <CleanListWrapper>
            <CleanListTitle>저희는 이런 청소를 합니다.</CleanListTitle>

            <CleanListContent>
                <div>
                    <CleanListContentTitle>가전 청소</CleanListContentTitle>
                    <div>
                        <CleanListContentMenu>에어컨 청소</CleanListContentMenu>
                        <CleanListContentMenu>세탁기 청소</CleanListContentMenu>
                        <CleanListContentMenu>공기청정기 청소</CleanListContentMenu>
                    </div>
                </div>

                <div>
                    <CleanListContentTitle>공간 청소</CleanListContentTitle>
                    <div>
                        <CleanListContentMenu>입주 청소</CleanListContentMenu>
                    </div>
                </div>

                <div>
                    <CleanListContentTitle>생활용품 청소</CleanListContentTitle>
                    <div>
                        <CleanListContentMenu>주방 후드 청소</CleanListContentMenu>
                        <CleanListContentMenu>매트리스 청소</CleanListContentMenu>
                    </div>
                </div>

                <div>
                    <CleanListContentTitle>시공/보수</CleanListContentTitle>
                    <div>
                        <CleanListContentMenu>줄눈 시공</CleanListContentMenu>
                    </div>
                </div>
            </CleanListContent>
        </CleanListWrapper>
    )
}

export default CleanList
