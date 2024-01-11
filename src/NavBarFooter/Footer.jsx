'use client';

import { Footer, FooterComponent } from 'flowbite-react';
import { AiFillFacebook , AiFillInstagram, AiFillTwitterSquare} from "react-icons/ai";

const MyFooter = () => {
    return (
        <div>
            <FooterComponent container>
      <div className="w-full text-center">
        <div className="w-full sm:flex sm:items-center sm: justify-around">
         <div className='text-center '>
         <h2 className='text-2xl'>
         CONTACT US
         </h2>
         <p className='text-lg'>123 ABS Street, Uni 21, Bangladesh</p>
         <p className='text-lg'>+88 123456789</p>
         <p className='text-lg'>Mon - Fri: 08:00 - 22:00</p>
         <p className='text-lg'>Sat - Sun: 10:00 - 23:00</p>
         </div>
          <div className=''>
          <Footer.LinkGroup>
          <div className='text-center text-[18px] justify-center items-center leading-8'>
         <h2 className='text-2xl'>
         Follow US
         </h2>
         <p className='text-lg'>Join us on social media</p>
         <div className='flex justify-center gap-3 mt-3'>
         <AiFillFacebook className='w-8 h-8'></AiFillFacebook>
         <AiFillInstagram className='w-8 h-8'></AiFillInstagram>
         <AiFillTwitterSquare className='w-8 h-8'></AiFillTwitterSquare>
         </div>
         </div>
          </Footer.LinkGroup>
          </div>
        </div>
        <Footer.Divider />
        <Footer.Copyright className='bg-gray-700 px-6 py-8 text-xl text-white' href="#" by="Copyright © CulinaryCloud. All rights reserved.™" year={2023} />
      </div>
    </FooterComponent>
        </div>
    );
};

export default MyFooter;