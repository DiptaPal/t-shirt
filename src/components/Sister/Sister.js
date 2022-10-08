import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = ({house}) => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div className='border-2 border-red-400 m-5 rounded-md p-3'>
            <h4>Sister</h4>
            <p><small>House: {house}</small></p>
            <p><small>Money: {money}</small></p>
            <button onClick={() => setMoney(money + 1000)} className='mt-2 py-1 px-3 rounded-md bg-gray-300 hover:bg-gray-500 hover:text-white'>Add 1000</button>
        </div>
    );
};

export default Sister;