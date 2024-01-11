import { Helmet } from 'react-helmet-async';

import Banner from "../Home/Banner";
import Category from "../Home/Category";
import Featured from "../Home/Featured";
import PopularMenu from "../Home/PopularMenu";
import Testimonials from "../Home/Testimonials";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
           
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
            
        </div>
    );
};

export default Home;