// src/pages/Home/Banner.jsx
import logo from '../../assets/logo.png';
// 실제 사용할 이미지 경로로 수정해주세요.
import bannerHeroImage from '../../assets/images/banner-hero.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="relative w-full h-[80vh] min-h-[500px] max-h-[800px] bg-cover bg-center flex items-center justify-center px-4"
             style={{ backgroundImage: `url(${bannerHeroImage})` }}
        >
            {/* 가독성을 위한 어두운 오버레이 */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* z-10으로 오버레이 위에 콘텐츠가 오도록 설정 */}
            <div className="relative z-10 w-full max-w-lg h-auto bg-white/10 backdrop-blur-md rounded-xl shadow-2xl flex flex-col items-center justify-center text-center p-6 md:p-8 cursor-default border border-white/20">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="로고" className="h-7 md:h-8" />
                    <span className="text-lg md:text-xl font-semibold text-white">청결에어클린</span>
                </div>
                <p className="text-2xl md:text-4xl font-bold text-white mt-6 leading-snug">
                    세상이 아름다운 것은<br />청소하기 때문입니다.
                </p>
                <Link to="/inquire" className="mt-8 px-8 py-3 bg-teal-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105">
                    문의하기 →
                </Link>
            </div>
        </div>
    );
};

export default Banner;
