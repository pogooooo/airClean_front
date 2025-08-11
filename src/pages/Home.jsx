// src/pages/Home.jsx
import Banner from "./Home/Banner.jsx";
import CleanList from "./Home/CleanList.jsx";
import PromiseList from "./Home/PromiseList.jsx";
import Inquire from "../components/Inquire"; // Inquire 컴포넌트가 있다고 가정

const Home = () => {
    return (
        <main className="bg-white">
            <Banner />
            <CleanList />
            <PromiseList />
            {/* <Inquire /> */} {/* 문의하기 컴포넌트가 준비되면 주석 해제 */}
        </main>
    );
};

export default Home;
