import SectionTitle from "../Shared/SectionTitle";
import featuredImg from '.././assets/home/featured.jpg'
import { Button } from "flowbite-react";
import '../Home/Featured.css';


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-10  my-20">
            <SectionTitle subHeading='check it out' heading='Featured Item'></SectionTitle>
            <div className="md: flex space-x-3 bg-slate-500 bg-opacity-30 gap-10 items-center mb-6 justify-center  px-36 pt-12 pb-20">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 ">
                    <p>Aug 20 , 2029</p>
                    <p className="uppercase">Where can i get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi non ipsam qui, debitis rerum laudantium maiores aperiam nulla sint corrupti, iure deserunt soluta cum? Ut numquam blanditiis nesciunt nulla vel minus veniam non nemo incidunt? Reprehenderit officiis ad accusamus ullam eius eaque numquam voluptates ex voluptatibus! Voluptatem fugiat nesciunt nihil?</p>
                    <Button outline gradientDuoTone="purpleToPink" className="mt-5 ">
                    Order Now
      </Button>
                </div>
            </div>
        </div>
    );
};

export default Featured;