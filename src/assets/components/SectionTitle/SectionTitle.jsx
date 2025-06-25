const SectionTitle = ({heading, subHeading}) =>{
    return (
        <div className="my-20 mx-auto text-center md:w-3/12">
            <p className="text-yellow-600 mb-4 italic">---{subHeading}---</p>
            <p className="text-4xl uppercase border-y-2 py-1">{heading}</p>
        </div>
    );
};

export default SectionTitle;