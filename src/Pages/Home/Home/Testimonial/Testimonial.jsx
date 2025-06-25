import SectionTitle from "../../../../assets/components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

const Testimonial = () => {
    const [reviwes, setRevies] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setRevies(data))
    })
    return (
        <section className="lg:mx-64 lg:my-16 text-center">
            <SectionTitle
                subHeading={"What Our Client Say"}
                heading={'Testimonials'}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviwes.map(review=> <SwiperSlide
                    key={review._id}
                    >
                      <div className="lg:mx-32 lg:my-10 flex flex-col items-center"> 
                        <Rating
      style={{ maxWidth: 180}}
      value={review.rating}
      readOnly
    />
                          <p className="lg:my-5">{review.details}</p>
                        <h3 className="text-2xl text-orange-400">{review.name}</h3>
                      </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;