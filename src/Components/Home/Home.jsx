import Abouthome from "../../Pages/Abouthome";
import Banner from "../../Pages/Banner";
import Contactlist from "../../Pages/Contactlist";
import Services from "../../Pages/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner> 
            <Abouthome></Abouthome>
            <Services></Services>
            <Contactlist></Contactlist>           
        </div>
    );
};

export default Home;