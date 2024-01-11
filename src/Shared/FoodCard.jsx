"use client";
import { Badge, Button, Card } from "keep-react";
import { ShoppingCart } from "phosphor-react";
import UseAuth from "../Hooks/UseAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import UseCarts from "../Hooks/UseCarts";



    const FoodCard = ({ item }) => {
    const { image, name, price, recipe, _id } = item;
    const {user} = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = UseAxiosSecure();
    const [, refetch] = UseCarts()

    const handleAddToCart = () =>{
        if(user && user.email){
            //this is food cart
            console.log(user.email);
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/cart', cartItem)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        title: `${name} Successfully Added to Cart!`,
                        text: "check cart!",
                        icon: "success"
                    });
                    refetch();
                }else{
                    //
                }
            })
        }else{
            Swal.fire({
                title: "You are not Login",
                text: "Please Login Add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                //send to the login page
                navigate('/login', {state: {from: location}})
                }
            });
        }
    }
return (
    <div className="mt-8">
    <Card
    className="max-w-xs h-[480px] overflow-hidden rounded-md "
    imgSrc={image}
    imgSize="md"
    >
    <Card.Container className="absolute top-3.5 right-3.5 flex   cursor-pointer items-center justify-center rounded-md bg-slate-900">
    <Card.Title className="text-white"> <Button color="gray">${price}</Button> </Card.Title>
    </Card.Container>
    <Card.Container className="p-6">
        <Card.Container className="flex items-center justify-between">
        <Badge size="xs" colorType="light" color="gray">
            Order Now
        </Badge>
        <Card.Title>${price}</Card.Title>
        </Card.Container>
        <Card.Container className="my-3">
        <Card.Title>{name}</Card.Title>
        <Card.Description>
            {recipe}
        </Card.Description>
        </Card.Container>
        <Card.Container className="flex items-center justify-center gap-5">
        <Button size="sm" type="outlineGray" onClick={() => handleAddToCart(item) }>
            <span className="pr-2">
            <ShoppingCart size={24} />
            </span>
            Add To Cart
        </Button>
        </Card.Container>
    </Card.Container>
    </Card>
    </div>
);
};

export default FoodCard;
