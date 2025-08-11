import { FaRegCheckCircle, FaPaintRoller, FaCheckCircle } from "react-icons/fa";
import { GiBrickWall } from "react-icons/gi";
import { MdCleaningServices, MdConstruction } from "react-icons/md";
import { TbWashTumbleDry } from "react-icons/tb";
import ServiceTemplate from "../components/ServiceTemplate.jsx"; // 템플릿 컴포넌트 import

const GroutWork = () => {
    const serviceTitle = `저희는 이렇게 "줄눈 시공" 합니다.`;

    const cleanSteps = [
        { icon: <FaRegCheckCircle />, title: "1. 사전 점검", description: "타일 상태와 기존 줄눈 오염, 곰팡이 여부를 확인하고, 고객 요청사항과 시공 색상을 확인합니다." },
        { icon: <MdCleaningServices />, title: "2. 기존 줄눈 제거", description: "기존 줄눈, 실리콘, 곰팡이, 먼지를 제거하고 홈을 다시 파내어 시공 밀착력을 높입니다." },
        { icon: <TbWashTumbleDry />, title: "3. 타일 표면 세척 및 건조", description: "줄눈 주변과 타일 표면의 이물질을 닦고, 완전 건조시켜 시공 불량을 방지합니다." },
        { icon: <FaPaintRoller />, title: "4. 줄눈제 혼합", description: "고급 줄눈제를 균일하게 혼합하며 고객이 요청한 색상과 점도를 맞춥니다." },
        { icon: <MdConstruction />, title: "5. 줄눈 시공", description: "줄눈제를 타일 틈새에 고르게 주입하고, 평탄하게 누르며 코너도 정밀하게 마감합니다." },
        { icon: <GiBrickWall />, title: "6. 표면 정리", description: "시공 후 타일 표면에 남은 줄눈제를 제거하고 광택 손상 없이 정리합니다." },
        { icon: <FaCheckCircle />, title: "7. 최종 점검 및 안내", description: "색상, 마감 상태를 점검하고 완전 경화까지 24시간 이상 건조를 안내드립니다." },
    ];

    const priceList = [
        { item: "욕실 전체", cost: "120,000원 ~" },
        { item: "부분 시공", cost: "40,000 ~ 60,000원" },
    ];

    return (
        <ServiceTemplate
            title={serviceTitle}
            steps={cleanSteps}
            prices={priceList}
        />
    );
};

export default GroutWork;
