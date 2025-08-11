import { FaRegCheckCircle, FaBath, FaSink, FaDoorClosed } from "react-icons/fa";
import { GiBroom, GiSofa } from "react-icons/gi";
import { MdDone } from "react-icons/md";
import ServiceTemplate from "../components/ServiceTemplate.jsx"; // 템플릿 컴포넌트 import

const HomeClean = () => {
    // 템플릿에 전달할 데이터를 준비합니다.
    const serviceTitle = `저희는 이렇게 "입주 청소" 합니다.`;

    const cleanSteps = [
        { icon: <FaRegCheckCircle />, title: "1. 사전 점검", description: "청소 전 전체 공간의 상태와 자재의 오염도를 확인하고, 청소 범위와 전기·수도 사용 가능 여부를 점검합니다. 고객 요청사항과 특이사항을 사전에 공유하여 맞춤 청소를 준비합니다." },
        { icon: <GiBroom />, title: "2. 먼지 제거 & 기본 정리", description: "천장, 벽면, 몰딩, 문틀 등 상부 먼지를 제거하고, 가구 설치 전 바닥과 벽의 구석을 진공청소기로 청소합니다. 창틀, 방충망, 창문 틈새까지 꼼꼼하게 정리합니다." },
        { icon: <FaBath />, title: "3. 욕실 청소", description: "변기, 세면대, 샤워부스의 찌든 때를 제거하고, 타일 틈의 곰팡이는 고압 스팀으로 소독합니다. 거울, 유리, 배수구까지 세척하고 물기 제거 후 마감합니다." },
        { icon: <FaSink />, title: "4. 주방 청소", description: "싱크대 상·하부장을 내부까지 청소하고, 후드와 가스레인지 주변의 기름때를 제거합니다. 타일 벽면과 수전, 배수구까지 살균 소독하여 위생을 유지합니다." },
        { icon: <GiSofa />, title: "5. 거실 · 방 청소", description: "조명, 스위치, 콘센트 외부를 닦고, 바닥 먼지 제거 후 광택 마감합니다. 장판이나 마루의 이음새를 청소하고, 고지대(에어컨, 커튼봉 등)도 놓치지 않고 정리합니다." },
        { icon: <FaDoorClosed />, title: "6. 베란다 · 현관 청소", description: "베란다 바닥과 창틀, 방충망을 꼼꼼히 닦고 곰팡이를 제거합니다. 신발장과 현관문, 손잡이까지 세척하며 바닥까지 마무리 청소합니다." },
        { icon: <MdDone />, title: "7. 마무리 점검", description: "전 구역을 재확인하며 미처리된 부분을 보완하고, 냄새 제거 및 창문 환기를 진행합니다. 고객 입회하에 최종 점검을 진행하며, 요청 시 전·후 사진도 제공합니다." },
    ];

    // 이 가격표는 HomeClean에 맞는 내용으로 변경해야 합니다.
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

export default HomeClean;
