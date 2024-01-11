import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SectionTitle from '../Shared/SectionTitle';

import slide1 from '../assets/home/slide1.jpg'
import slide2 from '../assets/home/slide2.jpg'
import slide3 from '../assets/home/slide3.jpg'
import slide4 from '../assets/home/slide4.jpg'
import slide5 from '../assets/home/slide5.jpg'

const Category = () => {
    return (
        
        <section >
            <SectionTitle
                subHeading={"From 11.00 pm to 10.00 pm"}
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
        className="mySwiper mb-10"
    >
        <SwiperSlide className='h-5'>
            <img src={slide1} alt="" />
            <h3 className='text-4xl uppercase  text-center absolute t-[327px] left-[90px] -mt-24 text-white z-50'>Salad</h3>
            </SwiperSlide>
        <SwiperSlide className='h-5'>
            <img src={slide2} alt="" />
            <h3 className='text-4xl uppercase absolute t-[327px] left-[90px]  text-center -mt-24 text-white z-50'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide className='h-5'>
            <img src={slide3} alt="" />
            <h3 className='text-4xl uppercase absolute t-[327px] left-[90px]  text-center -mt-24 text-white z-50'>pizzas</h3>
        </SwiperSlide>
        <SwiperSlide className='h-5'>
            <img src={slide4} alt="" />
            <h3 className='text-4xl uppercase absolute t-[327px] left-[90px]  text-center -mt-24 text-white z-50'>desserts</h3>
        </SwiperSlide>
        <SwiperSlide className='h-5'>
            <img src={slide5} alt="" />
            <h3 className='text-4xl uppercase absolute t-[327px] left-[90px]  text-center -mt-24 text-white z-50'>Salad</h3>
        </SwiperSlide>
    </Swiper>
    
        </section>
        
    );
};

export default Category;