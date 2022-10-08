import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = ({house}) => {
    return (
        <div className='border-2 border-red-400 m-5 rounded-md p-3'>
            <h4>Uncle</h4>
            <p><small>House: {house}</small></p>
        </div>
    );
};

export default Uncle;