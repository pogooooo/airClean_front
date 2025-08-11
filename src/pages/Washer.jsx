import { FaRegCheckCircle, FaSoap, FaTools } from "react-icons/fa";
import { IoWater } from "react-icons/io5";
import { MdAutorenew } from "react-icons/md";
import { BiCheck } from "react-icons/bi";
import ServiceTemplate from "../components/ServiceTemplate.jsx"; // 템플릿 컴포넌트 import

const Washer = () => {
    // 템플릿에 전달할 데이터를 준비합니다.
    const serviceTitle = `저희는 이렇게 "세탁기 청소" 합니다.`;

    const cleanSteps = [
        { icon: <FaRegCheckCircle />, title: "1. 사전 점검", description: "작업 전 세탁기 외관 상태를 확인하고, 기종과 용량(통돌이 또는 드럼)을 파악합니다. 작동 여부를 테스트한 후 전원과 수도를 차단하며, 작업 공간을 확보하고 바닥은 비닐 등으로 보호합니다." },
        { icon: <FaTools />, title: "2. 분해 작업", description: "세탁기의 상단 커버, 세제함, 도어, 고무 패킹 등을 분리합니다. 통돌이는 탈수통과 세탁통을, 드럼은 도어 고무패킹과 내부 통을 분리합니다. 이후 내부의 곰팡이, 세제 찌꺼기, 오염 상태를 육안으로 점검합니다." },
        { icon: <FaSoap />, title: "3. 부품별 세척", description: "분리된 부품들(세탁통, 세제함, 커버 등)은 전용 세제를 사용해 세척하며, 곰팡이와 석회질, 세제 찌꺼기 등을 제거합니다. 틈새까지 꼼꼼히 닦기 위해 고압분사 및 브러시를 사용하고, 필요한 경우 고온 스팀으로 살균합니다." },
        { icon: <IoWater />, title: "4. 내부 본체 청소", description: "세탁기 본체 내부 벽면과 모터 주변의 오염을 제거하고, 배수구 및 배수펌프 필터에 끼어 있는 이물질도 청소합니다. 세균이나 악취 원인이 되는 물 때 등을 제거하고, 친환경 약품을 활용해 스팀 또는 살균제를 도포합니다." },
        { icon: <MdAutorenew />, title: "5. 재조립 및 외부 마감", description: "모든 부품을 완전히 건조한 뒤 원래대로 조립합니다. 외관은 깨끗이 닦고, 디스플레이와 손잡이까지 마무리합니다. 이후 작동 테스트를 통해 급수, 배수, 회전 등의 기능이 정상적으로 작동하는지 확인합니다." },
        { icon: <BiCheck />, title: "6. 고객 확인 및 안내", description: "고객 요청 시 청소 전과 후의 비교 사진을 제공하며, 향후 세탁기 관리 요령과 적절한 청소 주기도 안내합니다. 작업 중 고장이나 이상이 발견될 경우, 고객에게 사전 안내를 드립니다." },
    ];

    // 이 가격표는 Washer에 맞는 내용으로 변경해야 합니다.
    const priceList = [
        { item: "벽걸이 에어컨", cost: "80,000원" },
        { item: "스탠드 에어컨", cost: "100,000 ~ 130,000원" },
        { item: "시스템 에어컨", cost: "80,000 ~ 140,000원" },
        { item: "2in1 에어컨", cost: "180,000원" },
    ];

    return (
        <ServiceTemplate
            title={serviceTitle}
            steps={cleanSteps}
            prices={priceList}
        />
    );
};

export default Washer;
