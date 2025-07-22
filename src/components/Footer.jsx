import styled from "styled-components";

const FooterWrapper = styled.div`
    background-color: #024242;
    height: 300px;
    color: white;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: clamp(20px, 5vw, 40px);
    font-size: clamp(12px, 1.5vw, 18px);
    text-align: center;
`

const FooterHr = styled.hr`
    width: 50vw;
    max-width: 600px;
    margin-bottom: clamp(20px, 3vw, 30px);
`

const Footer = () => {
    return(
        <FooterWrapper>

            <FooterHr/>

            <div style={{marginBottom: '30px'}}>
                <div>사업자 번호/사업명 : 494-06-03301/청결에어클린</div>
                <div>대표명 : 최군욱</div>
                <div>위치 정보 : 서울특별시 영등포구 대림로34길 19-2 (대림동)</div>
                <div>이메일 : poggo201103@gmail.com</div>
                <div>연락처 : 010-8210-2098</div>
            </div>

            <div style={{color: 'gray'}}>@ 청결에어클린 2025 all rights reserved</div>
        </FooterWrapper>
    )
}

export default Footer
