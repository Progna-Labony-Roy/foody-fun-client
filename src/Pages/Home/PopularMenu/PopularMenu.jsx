import SectionTitle from "../../../assets/components/SectionTitle/SectionTitle";
import ItemList from "../../Shared/ItemList/ItemList";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () =>{
    const [menu]=useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    // const [menu, setMenu] = useState([]);
    // useEffect( () =>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular');
    //         setMenu(popularItems)}
    //     )
    // })
    return (
        <section>
            <SectionTitle subHeading={"Popular Items"} heading={"From our menu"}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    popular.map(item => <ItemList 
                        key={item._id}
                        item={item}
                        ></ItemList>)
                }
            </div>
            {/* <button className="btn btn-outline border-0 border-b-4 mt-4">View Menu</button> */}
        </section>
    );
};

export default PopularMenu;