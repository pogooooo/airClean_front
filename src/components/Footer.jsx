import styled from "styled-components";

const FooterWrapper = styled.div`
    background-color: #024242;
    color: white;
    padding: clamp(2rem, 5vw, 4rem) clamp(1rem, 5vw, 2rem);
    text-align: center;
`;

const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
`;

const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: clamp(12px, 1.5vw, 16px);
    line-height: 1.5;
    margin-bottom: 2rem;
    
    & > div {
        white-space: nowrap;
    }
`;

const Copyright = styled.div`
    color: #a0a0a0;
    font-size: clamp(10px, 1.3vw, 14px);
`;

const Footer = () => {
    return(
        <FooterWrapper>
            <FooterContent>
                <ContactInfo>
                    <div>사업자 번호/사업명 : 494-06-03301 / 청결에어클린</div>
                    <div>대표명 : 최군욱</div>
                    <div>위치 정보 : 서울특별시 영등포구 대림로34길 19-2 (대림동)</div>
                    <div>이메일 : choigunuk@naver.com</div>
                    <div>연락처 : 010-8210-2098</div>
                </ContactInfo>
                <Copyright>© 청결에어클린 2025 all rights reserved</Copyright>
            </FooterContent>
        </FooterWrapper>
    )
}

export default Footer;
