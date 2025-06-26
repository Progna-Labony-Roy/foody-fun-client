import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import MenuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../assets/components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'popular');
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
                <SectionTitle 
            subHeading={"Our Menu"} 
            heading={"Don't miss today's offer"}
            ></SectionTitle>
                <MenuCategory items={offered}></MenuCategory>
            </div>
            <Cover 
            img={dessertImg}
            title={"Desserts"}
            description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></Cover>
            <div className="my-28">
                <MenuCategory items={dessert}></MenuCategory>
            </div>
            <Cover 
            img={pizzaImg}
            title={"Pizza"}
            description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></Cover>
            <div className="my-28">
                <MenuCategory items={pizza}></MenuCategory>
            </div>
            <Cover 
            img={saladImg}
            title={"Salads"}
            description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></Cover>
            <div className="my-28">
                <MenuCategory items={salad}></MenuCategory>
            </div>
            <Cover 
            img={soupImg}
            title={"Soups"}
            description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></Cover>
            <div className="my-28">
                <MenuCategory items={soup}></MenuCategory>
            </div>
        </div>
    );
};

export default Menu;