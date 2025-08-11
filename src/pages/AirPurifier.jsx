import { FaFan, FaRegCheckCircle } from "react-icons/fa";
import { GiVacuumCleaner } from "react-icons/gi";
import { MdDone, MdSettingsSuggest } from "react-icons/md";
import { BsFilterSquare } from "react-icons/bs";
import { LuPanelTopOpen } from "react-icons/lu";
import ServiceTemplate from "../components/ServiceTemplate.jsx"; // 템플릿 컴포넌트 import

const AirPurifier = () => {
    // 템플릿에 전달할 데이터를 준비합니다.
    const serviceTitle = `저희는 이렇게 "공기청정기 청소" 합니다.`;

    const cleanSteps = [
        { icon: <FaRegCheckCircle />, title: "1. 사전 점검", description: "제품의 기종, 구조, 사용 연수 등을 확인한 뒤, 전원을 차단하고 외관 상태와 공기 흡입/배출 방향을 점검합니다." },
        { icon: <GiVacuumCleaner />, title: "2. 외부 분해 및 먼지 제거", description: "전면 커버와 필터 커버 등을 분리한 후, 진공청소기나 에어건을 이용해 내부 먼지와 오염물을 제거합니다." },
        { icon: <BsFilterSquare />, title: "3. 필터 세척 및 교체", description: "프리필터는 세척 후 건조하고, HEPA나 활성탄 필터는 교체하거나 에어건으로 먼지를 털어줍니다." },
        { icon: <FaFan />, title: "4. 내부 팬 및 센서 청소", description: "송풍팬의 날개 틈과 먼지/냄새 센서를 부드럽게 닦아내며, 곰팡이나 세균이 있을 경우 살균 세척합니다." },
        { icon: <LuPanelTopOpen />, title: "5. 외관 마감 및 조립", description: "본체 외관과 조작부를 깨끗하게 닦고, 분리된 부품을 조립한 뒤 배출구 풍량 및 작동 상태를 점검합니다." },
        { icon: <MdSettingsSuggest />, title: "6. 작동 점검 및 안내", description: "전원을 연결하여 풍량과 센서 작동 여부를 확인한 후, 필터 교체 주기와 사용 시 유의사항을 안내드립니다." },
        { icon: <MdDone />, title: "7. 고객 확인", description: "청소 전후 비교 설명을 제공하고, 고객 요청 시 사진 자료도 공유해드리며, 만족 여부를 최종 확인합니다." },
    ];

    // 이 가격표는 AirPurifier에 맞는 내용으로 변경해야 합니다.
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

export default AirPurifier;
