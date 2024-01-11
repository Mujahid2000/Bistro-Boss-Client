
import SectionTitle from "../Shared/SectionTitle";
import Menuitems from "../Shared/Menuitems";
import { Button } from "flowbite-react";
import useMenu from "../Hooks/UseMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category  === 'popular');
  return (
    <section className="mb-12">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <Menuitems key={item._id} item={item}></Menuitems>
        ))}
      </div>
      <Button outline gradientDuoTone="purpleToPink" className="mt-5 flex mx-auto ">
        Order Now
      </Button>
    </section>
  );
};

export default PopularMenu;
