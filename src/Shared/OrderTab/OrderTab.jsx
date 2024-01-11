import { Button } from "flowbite-react";
import FoodCard from "../FoodCard";


const OrderTab = ({items}) => {
    
    return (
        <div>
          <div className="grid grid-cols-3 gap-5">
        {
          items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
        }
        
        </div>  
        <div>
        <Button outline gradientDuoTone="purpleToPink" className="mt-5 mx-auto">
        Purple to Pink
      </Button>
        </div>
        </div>
        
    );
};

export default OrderTab;