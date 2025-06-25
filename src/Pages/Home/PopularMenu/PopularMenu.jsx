import { useEffect, useState } from "react";
import SectionTitle from "../../../assets/components/SectionTitle/SectionTitle";
import ItemList from "../../Shared/ItemList/ItemList";

const PopularMenu = () =>{
    const [menu, setMenu] = useState([]);
    useEffect( () =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems)}
        )
    })
    return (
        <section>
            <SectionTitle subHeading={"Popular Items"} heading={"From our menu"}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    menu.map(item => <ItemList 
                        key={item._id}
                        item={item}
                        ></ItemList>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;