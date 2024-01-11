
"use client";
import { Tabs } from "keep-react";
import Cover from "../Shared/Cover";
import useMenu from "../Hooks/UseMenu";
import OrderTab from "../Shared/OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
const Order = () => {
  const categories = [ "dessert","soup", "pizza" ,"salad","drinks"]
  const { category } = useParams();
  const initialIndex = categories.indexOf(category.toLowerCase());
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu ] = useMenu();
  const dessert = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const pizza = menu.filter(item => item.category === 'pizza');
  const salad = menu.filter(item => item.category === 'salad');
  const drinks = menu.filter(item => item.category === 'drinks');
  return (
    <div>
      <Helmet>
      <title>Bistro | Order</title> 
      </Helmet>
      <Cover img={`https://i.ibb.co/XV2HSrq/banner2.jpg`} bannerTitle="OUR SHOP" description="Would you like to try a dish?" />
      <Tabs  onSelect={(index) => setTabIndex(index)}  aria-label="tabs" style="underline" borderPosition="bottom" className="max-w-7xl mx-auto">
      <Tabs.Item title="DESSERT" >
        <OrderTab items={dessert}> dessert</OrderTab>
      </Tabs.Item>
      <Tabs.Item active={tabIndex==1} title="SOUP">
      <OrderTab items={soup}> soup</OrderTab>
      </Tabs.Item>
      <Tabs.Item active={tabIndex==2} title="PIZZA">
      <OrderTab items={pizza}>pizza</OrderTab>
      </Tabs.Item>
      <Tabs.Item active={tabIndex==3} title="SALAD">
      <OrderTab items={salad}>salad</OrderTab>
      </Tabs.Item>
      <Tabs.Item active={tabIndex==4} title="DRINKS">
      <OrderTab items={drinks}>drinks</OrderTab>
      </Tabs.Item>
    </Tabs>
    </div>
  );
};

export default Order;