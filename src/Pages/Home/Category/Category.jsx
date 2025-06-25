import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import img1 from '../../../assets/home/img1.jpg';
import img2 from '../../../assets/home/img2.jpg';
import img3 from '../../../assets/home/img3.jpg';
import img4 from '../../../assets/home/img4.jpg';
import img6 from '../../../assets/home/img6.jpg';
import SectionTitle from '../../../assets/components/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <section className='my-16 '>
            <SectionTitle subHeading={'From 11.00am to 10.00pm'}
                heading={"Order Online"}>
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h3 className='text-3xl uppercase text-center -mt-16 text-white'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide><img src={img1} alt="" />
                    <h3 className='text-3xl uppercase text-center -mt-16 text-white'>Salads</h3></SwiperSlide>
                <SwiperSlide><img src={img2} alt="" />
                    <h3 className='text-3xl uppercase text-center -mt-16 text-white'>Pizza</h3></SwiperSlide>
                <SwiperSlide><img src={img3} alt="" />
                    <h3 className='text-3xl uppercase text-center -mt-16 text-white'>Soup</h3></SwiperSlide>
                <SwiperSlide><img src={img4} alt="" />
                    <h3 className='text-3xl uppercase text-center -mt-16 text-white'>Cake</h3></SwiperSlide>
                <SwiperSlide><img src={img6} alt="" />
                    <h3 className='text-3xl uppercase text-center -mt-16 mb-16 text-white'>Salads</h3></SwiperSlide>
                {/* <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide> */}
            </Swiper>
        </section>
    );
};

export default Category;