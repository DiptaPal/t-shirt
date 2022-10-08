import React, { useState } from 'react';

const TShirt = ({tshirt, handleBuyNow}) => {
    const {picture, name, price} = tshirt;
    return (
        <div className='border-2 border-blue-200 rounded-md flex flex-col items-center gap-3 pb-5'>
            <img src={picture} alt="" className='h-64 rounded-md m-2' />
            <h2 className='text-2xl font-semibold'>{name}</h2>
            <h4 className='text-xl font-medium'>Price: {price}</h4>
            <button className='py-1 px-5 bg-gray-300 hover:bg-gray-500 hover:text-white rounded-md font-semibold text-xl' onClick={() => handleBuyNow(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;