import { FaTools, FaRegCheckCircle, FaSoap } from "react-icons/fa";
import { IoWater } from "react-icons/io5";
import { FaWind } from "react-icons/fa6";
import { AiFillTool } from "react-icons/ai";
import ServiceTemplate from "../components/ServiceTemplate.jsx"; // 템플릿 컴포넌트 import

import airconBefore1 from "../assets/airConditionor/aircon_before_1.png";
import airconAfter1 from "../assets/airConditionor/aircon_after_1.png";
import airconBefore2 from "../assets/airConditionor/aircon_before_2.png";
import airconAfter2 from "../assets/airConditionor/aircon_after_2.png";
import airconBefore3 from "../assets/airConditionor/aircon_before_3.png";
import airconAfter3 from "../assets/airConditionor/aircon_after_3.png";

const AirConditionor = () => {
    // 템플릿에 전달할 데이터를 준비합니다.
    const serviceTitle = `저희는 이렇게 "에어컨 청소" 합니다.`;

    const cleanSteps = [
        { icon: <FaRegCheckCircle />, title: "1. 사전 점검", description: "청소 전 제품의 종류(벽걸이형, 스탠드형 등)를 확인하고 작동 테스트를 통해 이상 유무를 점검한 뒤, 전기를 차단하고 주변 환경을 정리하며 가구 및 바닥을 비닐로 안전하게 커버링합니다." },
        { icon: <FaTools />, title: "2. 분해 작업", description: "에어컨 외부 커버를 분리하고, 필터, 루버, 송풍팬, 냉각핀 등 주요 부품을 노출시켜 내부 오염 상태를 확인합니다." },
        { icon: <FaSoap />, title: "3. 필터 & 커버 세척", description: "필터는 중성세제와 브러시로 세척하고, 분리된 커버와 루버는 개별 세척한 후 햇볕 또는 전용 건조기를 이용해 완전히 건조합니다." },
        { icon: <IoWater />, title: "4. 고압세척 & 살균", description: "냉각핀과 송풍팬을 고압수로 세척하고 내부 곰팡이와 먼지를 제거한 뒤, 스팀 살균 또는 소독제를 분사하여 위생적으로 마무리합니다." },
        { icon: <FaWind />, title: "5. 건조 & 탈취", description: "에어건과 자연 환기를 통해 에어컨 내부를 완전히 건조시키고, 살균 후 냄새 제거 및 탈취 처리를 통해 쾌적한 사용 환경을 만듭니다." },
        { icon: <AiFillTool />, title: "6. 조립 & 작동 점검", description: "분해했던 부품을 다시 조립한 후, 작동 상태를 테스트하고 청소 전후를 비교하여 고객에게 확인받습니다." },
    ];

    const priceList = [
        { item: "벽걸이 에어컨", cost: "80,000원" },
        { item: "스탠드 에어컨", cost: "100,000 ~ 130,000원" },
        { item: "시스템 에어컨", cost: "80,000 ~ 140,000원" },
        { item: "2in1 에어컨", cost: "180,000원" },
    ];

    const beforeAfterImages = [
        {
            beforeImage: { imageUrl: airconBefore1, altText: "에어컨 1 청소 전" },
            afterImage: { imageUrl: airconAfter1, altText: "에어컨 1 청소 후" }
        },
        {
            beforeImage: { imageUrl: airconBefore2, altText: "에어컨 2 청소 전" },
            afterImage: { imageUrl: airconAfter2, altText: "에어컨 2 청소 후" }
        },
        {
            beforeImage: { imageUrl: airconBefore3, altText: "에어컨 3 청소 전" },
            afterImage: { imageUrl: airconAfter3, altText: "에어컨 3 청소 후" }
        }
    ];

    return (
        <ServiceTemplate
            title={serviceTitle}
            steps={cleanSteps}
            prices={priceList}
            beforeAfterImages={beforeAfterImages}
        />
    );
};

export default AirConditionor;
