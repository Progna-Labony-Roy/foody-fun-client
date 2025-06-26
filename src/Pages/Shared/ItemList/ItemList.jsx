const ItemList = ({ item }) => {
  if (!item) return null; // or show a loading spinner, or default item

  const { image, price, recipe, name } = item;
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition duration-200 bg-white">
      <img
        src={image}
        alt={name}
        className="md:w-[120px] h-[60px] w-[80px] md:h-[100px] object-cover rounded-md"
      />

      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <h3 className="md:text-lg font-semibold uppercase text-gray-800">{name}</h3>
          <p className="text-yellow-500 font-bold">${price}</p>
        </div>
        <p className="text-gray-600 text-sm">{recipe}</p>
      </div>
    </div>
  );
};

export default ItemList;