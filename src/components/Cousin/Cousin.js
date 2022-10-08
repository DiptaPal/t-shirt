import React, { useContext } from 'react';
import Friend from '../Friend/Friend';
import { MoneyContext } from '../Grandpa/Grandpa';

const Cousin = ({house}) => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div className='border-2 border-red-400 m-5 rounded-md p-3'>
            <h4>Cousin</h4>
            <p><small>House: {house}</small></p>
            <p><small>Money: {money}</small></p>
            <Friend></Friend>
        </div>
    );
};

export default Cousin;