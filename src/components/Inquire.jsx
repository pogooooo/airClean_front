import styled from "styled-components";
import { IoIosCheckbox, IoIosCheckboxOutline } from "react-icons/io";
import {useState} from "react";
import axios from "axios";

const InquireWrapper = styled.div`
    background-color: #008080;
    width: 100%;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem 0;
`;

const InquireTitle = styled.h2`
    margin-top: clamp(2rem, 5vw, 3rem);
    margin-bottom: clamp(2rem, 5vw, 3rem);
    font-size: clamp(24px, 5vw, 36px);
    font-weight: 400;
    text-align: center;
`;

const InquireForm = styled.div`
    width: 90%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & > label {
        font-size: clamp(14px, 3vw, 18px);
        margin-left: 0.25rem;
    }

    & > input, textarea {
        width: 100%;
        padding: 0.75rem;
        border: none;
        border-radius: 8px;
        font-size: clamp(16px, 3.5vw, 20px);
        font-family: "Do Hyeon", sans-serif;
        box-sizing: border-box;
        color: black;
    }

    & input:focus, textarea:focus {
        outline: 2px solid white;
        box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
    }

    & > textarea {
        height: 100px;
        resize: vertical;
    }
`;

const OptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 600px;
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 2px solid white;
    gap: 1.5rem;
`;

const OptionGroup = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 500px) {
        flex-direction: row;
        align-items: flex-start;
    }
`;

const Category = styled.div`
    white-space: nowrap;
    padding-right: 1rem;
    margin-bottom: 0.5rem;
    font-size: clamp(14px, 3vw, 18px);

    @media (min-width: 500px) {
        border-right: 2px solid white;
        margin-right: 1rem;
        margin-bottom: 0;
        padding-bottom: 0;
    }
`;

const OptionList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
`;

const ServiceItem = styled.div`
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
    cursor: pointer;
    font-size: clamp(14px, 3vw, 18px);
    
    svg {
        font-size: clamp(16px, 4vw, 24px);
        margin-right: 5px;
    }
`;

const SubmitButton = styled.button`
    background-color: white;
    color: #008080;
    border: none;
    padding: clamp(12px, 3vw, 18px) clamp(24px, 6vw, 48px);
    font-size: clamp(16px, 4vw, 24px);
    border-radius: 10px;
    cursor: pointer;
    margin-top: 2rem;
    margin-bottom: clamp(2rem, 5vw, 3rem);
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: #f0f0f0;
    }
`;

const serviceOptions = {
    "가전 청소": ["에어컨 청소", "세탁기 청소", "공기청정기 청소"],
    "공간 청소": ["입주 청소"],
    "생활용품 청소": ["주방후드 청소", "매트리스 청소"],
    "시공/보수": ["줄눈 시공"],
};

const Inquire = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        services: {},
    });

    const handleInputChange = (field) => (e) => {
        setFormData({ ...formData, [field]: e.target.value });
    };

    const toggleService = (serviceName) => {
        setFormData((prev) => ({
            ...prev,
            services: {
                ...prev.services,
                [serviceName]: !prev.services[serviceName],
            },
        }));
    };

    const handleSubmit = async () => {
        try {
            const res = await axios.post("http://localhost:3000/send-email", formData);
            if (res.status === 200) {
                alert("문의가 접수되었습니다!");
            } else {
                alert("문의를 접수하는데 실패했습니다. 다시 시도해 주세요.");
            }
        } catch (err) {
            console.error(err);
            alert("오류 발생");
        }
    };

    return(
        <InquireWrapper>
            <InquireTitle>쉽고 빠르게 문의하기</InquireTitle>

            <InquireForm>
                <InputGroup>
                    <label htmlFor="name">성함</label>
                    <input id="name" value={formData.name} onChange={handleInputChange("name")}/>
                </InputGroup>

                <InputGroup>
                    <label htmlFor="phone">연락처</label>
                    <input id="phone" value={formData.phone} onChange={handleInputChange("phone")}/>
                </InputGroup>

                <InputGroup>
                    <label htmlFor="email">이메일</label>
                    <input id="email" value={formData.email} onChange={handleInputChange("email")}/>
                </InputGroup>

                <InputGroup>
                    <label htmlFor="message">상세내용</label>
                    <textarea id="message" value={formData.message} onChange={handleInputChange("message")}/>
                </InputGroup>
            </InquireForm>

            <OptionWrapper>
                {Object.entries(serviceOptions).map(([category, items]) => (
                    <OptionGroup key={category}>
                        <Category>{category}</Category>
                        <OptionList>
                            {items.map((item) => (
                                <ServiceItem key={item} onClick={() => toggleService(item)}>
                                    {formData.services[item] ? <IoIosCheckbox /> : <IoIosCheckboxOutline />}
                                    <span>{item}</span>
                                </ServiceItem>
                            ))}
                        </OptionList>
                    </OptionGroup>
                ))}
            </OptionWrapper>

            <SubmitButton onClick={handleSubmit}>문의 보내기 →</SubmitButton>
        </InquireWrapper>
    );
};

export default Inquire;
