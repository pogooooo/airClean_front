import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import logo from '../assets/logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    // 메뉴 항목을 배열로 관리하여 코드 중복을 줄입니다.
    const menuItems = [
        { to: '/airConditionor', label: '에어컨 청소' },
        { to: '/washer', label: '세탁기 청소' },
        { to: '/homeClean', label: '입주 청소' },
        { to: '/airPurifier', label: '공기청정기 청소' },
        { to: '/mattressClean', label: '매트리스 청소' },
        { to: '/hoodClean', label: '후드 청소' },
        { to: '/groutWork', label: '줄눈 시공' },
    ];

    return (
        <header className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* 로고 영역 */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center space-x-2">
                            <img className="h-10 w-auto" src={logo} alt="청결에어클린 로고" />
                            <span className="text-2xl font-bold text-gray-800 tracking-tight">
                청결에어클린
              </span>
                        </Link>
                    </div>

                    {/* 데스크탑 메뉴 */}
                    <nav className="hidden lg:flex items-center space-x-6">
                        {menuItems.map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium pb-2 border-b-2 border-transparent hover:border-blue-600"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            to="/inquire"
                            className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105 shadow-lg"
                        >
                            문의하기 →
                        </Link>
                    </nav>

                    {/* 모바일 햄버거 버튼 */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                            aria-expanded={isOpen}
                        >
                            <RxHamburgerMenu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* 모바일 메뉴 (애니메이션 효과 추가) */}
            <div
                className={`lg:hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                    {menuItems.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        to="/inquire"
                        onClick={() => setIsOpen(false)}
                        className="block w-full text-left mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 shadow"
                    >
                        문의하기
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
