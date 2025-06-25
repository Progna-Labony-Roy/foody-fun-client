const SectionTitle = ({heading, subHeading}) =>{
    return (
        <div className="my-10 mx-auto text-center lg:w-3/12 md:w-6/12">
            <p className="text-yellow-600 mb-4 italic">---{subHeading}---</p>
            <p className="lg:text-3xl md:text-2xl uppercase border-y-2 py-1">{heading}</p>
        </div>
    );
};

export default SectionTitle;