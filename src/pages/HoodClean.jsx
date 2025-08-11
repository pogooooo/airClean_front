import { FaSprayCanSparkles, FaScrewdriver } from "react-icons/fa6";
import { GiWashingMachine } from "react-icons/gi";
import { MdSettingsSuggest, MdDone } from "react-icons/md";
import { TbGrill } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";
import ServiceTemplate from "../components/ServiceTemplate.jsx"; // 템플릿 컴포넌트 import

const HoodClean = () => {
    // 템플릿에 전달할 데이터를 준비합니다.
    const serviceTitle = `저희는 이렇게 "주방 후드 청소" 합니다.`;

    const cleanSteps = [
        { icon: <FaRegCheckCircle />, title: "1. 사전 점검", description: "후드의 설치 방식, 오염 상태, 필터 구조 등을 확인하고 전원을 차단하여 안전하게 작업 준비합니다." },
        { icon: <FaScrewdriver />, title: "2. 커버 및 필터 분해", description: "후드 커버와 필터, 오일 트레이 등을 분리하여 내부 청소가 가능한 상태로 만듭니다." },
        { icon: <GiWashingMachine />, title: "3. 기름때 제거", description: "전용 세제와 고온수를 활용해 필터와 커버에 붙은 기름때와 찌든 때를 말끔히 제거합니다." },
        { icon: <TbGrill />, title: "4. 팬/모터 내부 청소", description: "내부의 송풍팬, 모터 주위에 붙은 먼지와 기름 찌꺼기를 정밀하게 닦아 성능을 회복시킵니다." },
        { icon: <FaSprayCanSparkles />, title: "5. 외관 세척 및 살균", description: "후드 본체 외부와 조작부를 세척하고, 친환경 살균제를 사용해 위생 상태를 최종 점검합니다." },
        { icon: <MdSettingsSuggest />, title: "6. 조립 및 작동 테스트", description: "분리한 부품을 건조 후 재조립하고, 전원을 연결하여 팬 작동 상태 및 소음 여부를 확인합니다." },
        { icon: <MdDone />, title: "7. 고객 확인", description: "청소 전후 차이점을 안내드리고, 고객 만족 여부를 확인합니다. 필요 시 사진 자료도 제공합니다." },
    ];

    // 이 가격표는 HoodClean에 맞는 내용으로 변경해야 합니다.
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

export default HoodClean;
