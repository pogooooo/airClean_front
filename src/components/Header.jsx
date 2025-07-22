import styled from 'styled-components';
import logo from '../assets/logo.png'
import { RxHamburgerMenu } from "react-icons/rx";
import {Link} from "react-router-dom";
import {useState} from "react";

const HeaderWrapper = styled.div`
    background-color: white;
    height: 50px;
    font-size: 24px;
    
    display: flex;
    justify-content: space-between;

    align-items: center;
    position: relative;
    padding: 0 10px;
`

const LogoArea = styled.div`
    display: flex;
    align-items: center;
    
    & > img {
        height: 50px;
        margin-right: 10px;
        margin-left: 20px;
    }
    
    & > a {
        color: black;
        text-decoration: none;
    }
`

const MenuArea = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 1050px) {
        display: none;
    }
    
    & > a, & > div{
        color: black;
        text-decoration: none;
        margin-left: 10px;
        margin-right: 10px;
    }
`

const MobileMenu = styled.div`
    display: none;

    @media (max-width: 1050px) {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 50px;
        right: 10px;
        background-color: white;
        border: 1px solid #ccc;
        border-radius: 10px;
        z-index: 1000;
        padding: 10px;

        & > a, & > div {
            padding: 5px 10px;
            text-decoration: none;
            color: black;
            white-space: nowrap;
            cursor: pointer;
        }
    }
`;

const Hamburger = styled.div`
    display: none;

    @media (max-width: 1050px) {
        display: block;
        font-size: 28px;
        cursor: pointer;
        margin-right: 10px;
    }
`;

const InquiryButton = styled.div`
    margin-left: 10px;
    margin-right: 10px;
    white-space: nowrap;
    cursor: pointer;
`;

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <HeaderWrapper>
            <LogoArea>
                <img src={logo} />
                <Link to='/'>청결에어클린</Link>
            </LogoArea>

            <MenuArea>
                <Link to='/airConditionor'>에어컨 청소</Link>
                <Link to='/washer'>세탁기 청소</Link>
                <Link to='/homeClean'>입주 청소</Link>
                <Link to='/airPurifier'>공기청정기 청소</Link>
                <Link to='/mattressClean'>매트리스 청소</Link>
                <Link to='/hoodClean'>후드 청소</Link>
                <Link to='/groutWork'>줄눈 시공</Link>
                <Link to="/inquire">문의하기→</Link>
            </MenuArea>

            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <RxHamburgerMenu />
            </Hamburger>

            <MobileMenu style={{ display: isOpen ? 'flex' : 'none' }}>
                <Link to='/airConditionor'>에어컨 청소</Link>
                <Link to='/washer'>세탁기 청소</Link>
                <Link to='/homeClean'>입주 청소</Link>
                <Link to='/airPurifier'>공기청정기 청소</Link>
                <Link to='/mattressClean'>매트리스 청소</Link>
                <Link to='/hoodClean'>후드 청소</Link>
                <Link to='/groutWork'>줄눈 시공</Link>
                <Link to="/inquire">문의하기</Link>
            </MobileMenu>
        </HeaderWrapper>
    )
}

export default Header
