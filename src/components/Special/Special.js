import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div className='border-2 border-red-400 m-5 rounded-md p-3'>
            <h4>Special</h4>
            <p><small>Gift: {house}</small></p>
            <button onClick={() => setHouse(house + 1)} className='mt-2 py-1 px-3 rounded-md bg-gray-300 hover:bg-gray-500 hover:text-white'>Increase</button>
        </div>
    );
};

export default Special;