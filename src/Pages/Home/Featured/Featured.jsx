import SectionTitle from "../../../assets/components/SectionTitle/SectionTitle";
import featured from '../../../assets/home/featured.jpg';
import './Featured.css'

const Featured = () =>{
    return (
        <div className="featured-item bg-fixed my-32 text-white">
            <div className="md:px-20 md:py-10 lg:px-32 lg:pt-5 lg:pb-24 bg-slate-500 bg-opacity-40">
                <SectionTitle className subHeading={"Check it out"} heading={"Featured Item"}></SectionTitle>
            <div className="md:flex justify-center items-center  ">
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className="md:ml-10 ">
                    <p>March 20, 2023</p>
                    <p className="upppercase py-1 lg:text-xl">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quibusdam quo alias corrupti iste illo magni dignissimos voluptas ab exercitationem quis aliquid quas rerum porro, nobis aliquam error, sit cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus earum reiciendis enim assumenda nostrum aliquid. Sequi animi blanditiis illum ut.</p>
                    <button className="btn btn-outline mt-5 text-white">Order Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Featured;