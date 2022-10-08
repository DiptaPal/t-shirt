import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Friend = () => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h4 className='border-2 border-red-400 m-5 rounded-md p-3'>Friend</h4>
            <p><small>Ring: {house}</small></p>
            <button onClick={() => setHouse(house - 1)} className='mt-2 py-1 px-3 rounded-md bg-gray-300 hover:bg-gray-500 hover:text-white'>Decrease</button>
        </div>
    );
};

export default Friend;