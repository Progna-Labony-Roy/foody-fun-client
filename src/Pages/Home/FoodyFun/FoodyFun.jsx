import "./FoodyFun.css";


const FoodyFun = () => {
  return (
    <div className="relative fun-image h-[500px] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative flex items-center justify-center h-full px-4">
        <div className="bg-white bg-opacity-90 p-10 md:p-16 text-center max-w-3xl mx-auto rounded shadow-lg">
          <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-wide mb-4">
            Foody Fun
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodyFun;
