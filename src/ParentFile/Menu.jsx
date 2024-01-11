import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import useMenu from '../Hooks/UseMenu';
import SectionTitle from '../Shared/SectionTitle';
import MenuCategory from '../Menu/MenuCategory';

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const pizza = menu.filter(item => item.category === 'pizza');
  const salad = menu.filter(item => item.category === 'salad');
  const offered = menu.filter(item => item.category === 'offered');

  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover img={`https://i.ibb.co/cNPzrTv/banner3.jpg`} bannerTitle={'OUR MENU'}></Cover>
      <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory items={dessert} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...."} bannerTitle={"DESSERT"} img={'https://i.ibb.co/6b7wB6M/dessert-bg.jpg'}></MenuCategory>
      <MenuCategory items={pizza} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...."} bannerTitle={"PIZZA"} img={'https://i.ibb.co/6b7wB6M/dessert-bg.jpg'}></MenuCategory>
      <MenuCategory items={salad} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book....'} bannerTitle={"SALAD"} img={'https://i.ibb.co/37Yycg7/salad-bg.jpg'}></MenuCategory>
      <MenuCategory items={soup} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...."} bannerTitle={"SOUP"} img={'https://i.ibb.co/6b7wB6M/dessert-bg.jpg'}></MenuCategory>
    </div>
  );
};

export default Menu;
