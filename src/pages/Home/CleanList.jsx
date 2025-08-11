// src/pages/Home/CleanList.jsx
import { FaCheck } from "react-icons/fa";

// 실제 이미지 경로를 추가한 데이터 구조
const services = [
    {
        title: "에어컨 청소",
        image: { before: '/images/aircon-before.jpg', after: '/images/aircon-after.jpg' },
        items: ["곰팡이 제거", "악취 제거", "냉방 효율 증가"]
    },
    {
        title: "세탁기 청소",
        image: { before: '/images/washer-before.jpg', after: '/images/washer-after.jpg' },
        items: ["세탁조 분해", "이물질 제거", "피부 질환 예방"]
    },
    {
        title: "입주/공간 청소",
        image: { before: '/images/livingroom-after.jpg', after: '/images/livingroom-after.jpg' },
        items: ["집안 전체", "새집 증후군 방지", "쾌적한 공간"]
    },
    {
        title: "줄눈 시공",
        image: { before: '/images/grout-after.jpg', after: '/images/grout-after.jpg' },
        items: ["곰팡이 방지", "오염 차단", "인테리어 효과"]
    },
];

const CleanList = () => {
    return (
        <div className="bg-gray-50 text-gray-800 py-16 md:py-24 px-4">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold">
                    실제 청소 사례로 증명합니다.
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    {services.map((service) => (
                        <div key={service.title} className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                            {/* Before/After 이미지 영역 */}
                            <div className="relative h-48 w-full overflow-hidden">
                                {/* After 이미지 */}
                                <img src={service.image.after} alt={`${service.title} 청소 후`} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500" />
                                {/* Before 이미지 (마우스 호버 시 나타남) */}
                                <img src={service.image.before} alt={`${service.title} 청소 전`} className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
                                <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full group-hover:hidden">BEFORE</div>
                                <div className="absolute top-2 left-2 bg-teal-600 text-white text-xs px-2 py-1 rounded-full hidden group-hover:block">AFTER</div>
                            </div>
                            <div className="p-6 text-left">
                                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                                <div className="space-y-2">
                                    {service.items.map((item) => (
                                        <div key={item} className="flex items-center">
                                            <FaCheck className="text-teal-500 mr-2 flex-shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CleanList;
