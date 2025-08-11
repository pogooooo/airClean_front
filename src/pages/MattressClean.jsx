import { FaSprayCanSparkles } from "react-icons/fa6";
import { GiVacuumCleaner, GiWaterDrop } from "react-icons/gi";
import { MdSettingsSuggest, MdDone } from "react-icons/md";
import { PiToiletPaperBold } from "react-icons/pi";
import { FaRegCheckCircle } from "react-icons/fa";
import ServiceTemplate from "../components/ServiceTemplate.jsx"; // 템플릿 컴포넌트 import

const MattressClean = () => {
    // 템플릿에 전달할 데이터를 준비합니다.
    const serviceTitle = `저희는 이렇게 "매트리스 청소" 합니다.`;

    const cleanSteps = [
        { icon: <FaRegCheckCircle />, title: "1. 사전 점검", description: "매트리스의 오염 상태, 곰팡이 유무, 소재 및 구조를 확인하고 청소 가능 여부를 점검합니다." },
        { icon: <GiVacuumCleaner />, title: "2. 표면 먼지 제거", description: "강력한 흡입력의 진공청소기로 매트리스 표면의 먼지, 진드기, 머리카락 등을 제거합니다." },
        { icon: <FaSprayCanSparkles />, title: "3. 세정제 분사", description: "전용 친환경 세정제를 고르게 분사하여 살균 및 탈취 처리를 진행합니다." },
        { icon: <GiWaterDrop />, title: "4. 물세척 및 오염 제거", description: "심한 오염은 저압의 물 분사 및 스크러버로 부분 세척하여 얼룩과 냄새를 제거합니다." },
        { icon: <PiToiletPaperBold />, title: "5. 물기 제거 및 건조", description: "전문 장비로 잔여 수분을 제거하고, 건조 시간을 단축시키기 위해 송풍기를 사용합니다." },
        { icon: <MdSettingsSuggest />, title: "6. 마무리 점검 및 안내", description: "청소 후 재오염 여부를 확인하고, 관리 요령 및 권장 청소 주기를 안내해드립니다." },
        { icon: <MdDone />, title: "7. 고객 확인", description: "청소 전후 비교 설명을 드리고, 고객의 최종 확인 및 요청 사항을 점검합니다." },
    ];

    // 이 가격표는 MattressClean에 맞는 내용으로 변경해야 합니다.
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

export default MattressClean;
