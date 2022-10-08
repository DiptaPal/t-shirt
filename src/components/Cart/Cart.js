import React from 'react';

const Cart = ({cart, handleRemoveItem}) => {
    
    let message;
    if(cart.length === 0){
        message = <p>Please buy at least one item !!!</p>
    }
    else if(cart.length === 1){
        message = <div>
            <h3>Amar jonno ekta nao</h3>
            <p>Tumar nijer jonno ekta</p>
            <p><small>Amar jonno arekta nao, Please</small></p>
        </div>
    }
    else{
        message = <p>Thanks for buying !!!</p>
    }

    return (
        <div className='ml-2'>
            <h2 className={`text-2xl text-white rounded-md ${cart.length === 2 ? 'bg-orange-700' : 'bg-purple-700'}`}>Order Summary</h2>
            <h5 className={`text-xl mb-5 font-normal ${cart.length >= 1 ? 'font-bold' : 'font-normal'}`}>Order Quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <div className='flex justify-between items-center mx-20 my-4 text-base'
                    key={tshirt._id}
                >   
                    <p>{tshirt.name}</p>
                    <button className='py-1 px-2 border-2 border-gray-500 bg-gray-300 hover:bg-gray-500 hover:text-white ml-5' onClick={() => handleRemoveItem(tshirt)}>X</button>
                </div>)
            }

            <p className='text-2xl font-semibold'>If-else:</p>
            {
                message
            }
            <br />

            <p className='text-2xl font-semibold'>Ternary Operator:</p>
            {
                cart.length === 3 ? <p>Tin jon ke gift diba?</p> : <p>kino kino</p>
            }
            <br />

            <p className='text-2xl font-semibold'>And Operator:</p>
            {cart.length === 2 && <h2>Double items</h2>}
            <br />
            
            <p className='text-2xl font-semibold'>Or Operator:</p>
            {cart.length === 4 || <h2>Not 4 items</h2>}

        </div>
    );
};

export default Cart;


/* 
Conditional Rendering
=====================
1. use element in a variable then use if-else to set value
2. ternary operation[ condition ? true : false]
3. && operator (if condition id true, i want to display something)
4. || operator (if condition id false, i want to display something)
*/