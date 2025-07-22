import styled from "styled-components";
import { IoIosCheckbox, IoIosCheckboxOutline } from "react-icons/io";
import {useState} from "react";
import axios from "axios";

const InquireWrapper = styled.div`
    background-color: #008080;
    width: 100%;
    color: white;
    font-size: 28px;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const InquireTitle = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: clamp(24px, 4vw, 36px);
`

const InquireInput = styled.div`
    & > div {
        display: flex;
        justify-content: space-between;
        height: auto;
        width: 30vw;
        min-width: 330px;
        padding: 5px;
        gap: 10px;
        
        & > input, textarea {
            flex: 1;                  /* 인풋이 남은 공간을 차지하도록 */
            height: 30px;
            padding: 5px;
            border: none;
            border-radius: 4px;
            font-size: 20px;
            font-family: "Do Hyeon", sans-serif;
        }
        & input:focus, textarea:focus {
            outline: none;
            box-shadow: none;
        }
        
        & > textarea {
            height: 100px;
        }
        
        & > div {
            width: 17%;
            display: flex;
            align-items: center;
            font-size: clamp(16px, 1.3vw, 24px);
        }
    }
`

const OptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    border-bottom: 3px solid white;
    margin-bottom: 30px;
    padding: 10px;
    
    & > div{
        display: flex;
        align-items: flex-start;
        padding: 5px;
    }
`

const Category = styled.div`
    width: auto;
    border-right: 3px solid white;
    display: inline-flex;
    white-space: nowrap;
    padding-right: 10px;
    margin-right: 10px;
    font-size: clamp(12px, 1.3vw, 24px);
`

const OptionList = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    & > div {
        margin-right: 20px;
    }
`

const ServiceItem = styled.div`
    display: inline-flex;
    white-space: nowrap;
    cursor: pointer;
    width: auto;
    font-size: clamp(12px, 1.3vw, 24px);

  svg {
    font-size: clamp(16px, 1.5vw, 28px);
    margin-right: 5px;
  }
`

const SubmitButton = styled.div`
    background-color: white;
    color: #008080;
    padding: clamp(8px, 2vw, 14px) clamp(20px, 4vw, 40px);
    font-size: clamp(16px, 2vw, 24px); 
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 50px;
`

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

            <InquireInput>
                <div>
                    <div>성함</div>
                    <input value={formData.name} onChange={handleInputChange("name")}/>
                </div>

                <div>
                    <div>연락처</div>
                    <input value={formData.phone} onChange={handleInputChange("phone")}/>
                </div>

                <div>
                    <div>이메일</div>
                    <input value={formData.email} onChange={handleInputChange("email")}/>
                </div>

                <div>
                    <div>상세내용</div>
                    <textarea value={formData.message} onChange={handleInputChange("message")}/>
                </div>

            </InquireInput>

            <OptionWrapper>
                {Object.entries(serviceOptions).map(([category, items]) => (
                    <div key={category}>
                        <Category>{category}</Category>
                        <OptionList>
                            {items.map((item) => (
                                <ServiceItem key={item} onClick={() => toggleService(item)}>
                                    <span>{item}</span>
                                    {formData.services[item] ? <IoIosCheckbox /> : <IoIosCheckboxOutline />}
                                </ServiceItem>
                            ))}
                        </OptionList>
                    </div>
                ))}
            </OptionWrapper>

            <SubmitButton onClick={handleSubmit}>문의 보내기 →</SubmitButton>
        </InquireWrapper>
    )
}

export default Inquire
