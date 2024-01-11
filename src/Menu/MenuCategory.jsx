import { Button } from "flowbite-react";
import Cover from "../Shared/Cover";
import Menuitems from "../Shared/Menuitems";
import { Link } from "react-router-dom";


const MenuCategory = ({items, bannerTitle, img , description}) => {
    return (
        <div className="pt-8">
        {bannerTitle && <Cover img={img} bannerTitle={bannerTitle}  description={description}
        >
        </Cover>}
        <div className="grid md:grid-cols-2 gap-10 mt-16">
        {items.map((item) => (
        <Menuitems key={item._id} item={item}></Menuitems>
        ))}
        </div>
        <Link to={`/order/${bannerTitle}`}>
        <Button outline gradientDuoTone="purpleToPink" className="mx-auto mt-6">
        ORDER YOUR FAVOURITE FOOD
        </Button>
        </Link>
        </div>
    );
};

export default MenuCategory;