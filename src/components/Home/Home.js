import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([])
    const handleBuyNow = tshirt =>{
        const exist = cart.find(ts => ts._id === tshirt._id);
        if(exist){
            alert('T-shirt already Added')
        }
        else{
            const newCart = [...cart, tshirt]
            setCart(newCart);
            // alert('Successfully Added')
        }
    }

    const handleRemoveItem = tshirt =>{
        const remaining = cart.filter(ts => ts._id !== tshirt._id);
        setCart(remaining);
    }
    return (
        <div className='px-10 md:px-20 lg:px-0 grid grid-cols-4 my-5  lg:m-5'>
            <div className='col-span-4 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    tshirts.map(tshirt => <TShirt
                    key={tshirt._id}
                    tshirt={tshirt}
                    handleBuyNow = {handleBuyNow}
                    ></TShirt>)
                }
            </div>

            <div className='col-span-4 lg:col-span-1'>
                <Cart
                cart={cart}
                handleRemoveItem = {handleRemoveItem}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;