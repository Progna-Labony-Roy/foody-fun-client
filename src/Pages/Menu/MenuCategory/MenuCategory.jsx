import ItemList from "../../Shared/ItemList/ItemList";

const MenuCategory = ({items}) =>{
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    items.map(item => <ItemList 
                        key={item._id}
                        item={item}
                        ></ItemList>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;