import Inquire from "../components/Inquire";
import CleanList from "./Home/CleanList.jsx";
import Banner from "./Home/Banner.jsx"
import PromiseList from "./Home/PromiseList.jsx";


const Home = () => {

    return(
        <div>
            <Banner />

            <CleanList />

            <PromiseList />

            <Inquire />
        </div>
    )
}

export default Home
