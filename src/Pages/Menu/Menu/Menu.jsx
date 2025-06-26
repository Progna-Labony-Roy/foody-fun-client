import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import MenuImg from "../../../assets/menu/banner3.jpg";
import dessert from "../../../assets/menu/dessert-bg.jpeg";
import pizza from "../../../assets/menu/pizza-bg.jpg";
import salad from "../../../assets/menu/salad-bg.jpg";
import soup from "../../../assets/menu/soup-bg.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";



const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Foody Fun | Menu</title>
            </Helmet>
            <Cover 
            img={MenuImg}
            title={"Our Menu"}
            description={"Would you like to try our dish?"}
            ></Cover>
            <div className="my-28">
                <PopularMenu></PopularMenu>
            </div>
            <Cover 
            img={dessert}
            title={"Desserts"}
            description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></Cover>
            <div className="my-28">
                <PopularMenu></PopularMenu>
            </div>
            <Cover 
            img={pizza}
            title={"Pizza"}
            description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></Cover>
            <div className="my-28">
                <PopularMenu></PopularMenu>
            </div>
            <Cover 
            img={salad}
            title={"Salads"}
            description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></Cover>
            <div className="my-28">
                <PopularMenu></PopularMenu>
            </div>
            <Cover 
            img={soup}
            title={"Soups"}
            description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></Cover>
            <div className="my-28">
                <PopularMenu></PopularMenu>
            </div>
        </div>
    );
};

export default Menu;