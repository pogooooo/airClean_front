// src/pages/Home/PromiseList.jsx

// 각 약속에 맞는 실제 이미지 경로로 데이터 구조 수정
const promises = [
    {
        imageSrc: '/images/promise-cleaning.jpg',
        title: "깨끗한 청소",
        description: "숙련된 전문 인력이 최신 장비를 사용하여 먼지 하나 없이 깨끗하게 청소합니다. 눈에 보이지 않는 곳까지 꼼꼼하게, 위생까지 생각한 마무리!"
    },
    {
        imageSrc: '/images/promise-safe.jpg',
        title: "안전한 세제 사용",
        description: "사람과 환경을 생각한 친환경 세제를 사용하여 안심하고 맡기실 수 있습니다. 아이, 반려동물이 있는 가정도 걱정없이 청소하세요."
    },
    {
        imageSrc: '/images/promise-price.jpg',
        title: "정직한 가격",
        description: "숨겨진 비용 없이 투명하게 안내해드립니다. 정찰제로 믿을 수 있는 가격 정책을 지켜갑니다."
    }
]

const PromiseList = () => {
    return (
        <div className="bg-white py-16 md:py-24 px-4 cursor-default">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl text-gray-800">
                    청결에어클린의 약속
                </h2>

                <div className="max-w-4xl mx-auto mt-16 space-y-16">
                    {promises.map((promise, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-center text-center md:text-left gap-8">
                            {/* 실제 사진을 원형으로 표시 */}
                            <div className="flex-shrink-0 w-40 h-40 rounded-full overflow-hidden shadow-lg">
                                <img src={promise.imageSrc} alt={promise.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl text-gray-900">
                                    {promise.title}
                                </h3>
                                <p className="mt-2 text-gray-600 leading-relaxed">
                                    {promise.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PromiseList;
