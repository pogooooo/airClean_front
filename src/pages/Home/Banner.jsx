import styled from "styled-components";
import logo from "../../assets/logo.png";
import banner from '../../assets/banner.png'

const BannerWrapper = styled.div`
    background-image: url(${banner});
    width: 100%;
    height: clamp(400px, 80vh, 700px);
    background-size: cover;
    background-attachment: fixed;
    overflow: hidden;
    
    display: flex;
    align-items: center;
    justify-content: center;
`

const BannerModal = styled.div`
    width: clamp(280px, 60vw, 500px);
    height: clamp(200px, 40vh, 300px);
    background-color: white;
    border-radius: 10px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: default;
`

const ModalTitle = styled.div`
    display: flex;
    margin-top: 30px;
    font-size: clamp(14px, 2vw, 18px);
    
    & > img {
        height: clamp(20px, 4vw, 30px);
    }
    
    & > div {
        height: 30px;
        display: flex;
        align-items: center;
    }
`

const ModalContent = styled.div`
    font-size: clamp(18px, 3vw, 36px);
    margin-top: 30px;
`

const ModalButton = styled.div`
    background-color: #008080;
    width: clamp(100px, 30vw, 150px);
    height: clamp(40px, 8vh, 50px);
    color: white;
    font-size: clamp(14px, 2vw, 24px);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin-top: 30px;
    cursor: pointer;
`

const Banner = () => {
    return(
        <BannerWrapper>
            <BannerModal>
                <ModalTitle>
                    <img src={logo}/>
                    <div>청결에어클린</div>
                </ModalTitle>
                <ModalContent>세상이 아름다운 것은<br/>청소하기 때문입니다.</ModalContent>
                <ModalButton>문의하기 →</ModalButton>
            </BannerModal>
        </BannerWrapper>
    )
}

export default Banner
