import { Helmet } from "react-helmet-async";
import ItemList from "../../Shared/ItemList/ItemList";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import FoodyFun from "../FoodyFun/FoodyFun";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";



const Home = () =>{
    return (
        <div>
            <Helmet>
                <title>Foody Fun | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <FoodyFun></FoodyFun>
            <PopularMenu></PopularMenu>
            <ItemList></ItemList>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;