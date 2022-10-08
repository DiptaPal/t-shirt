import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({house}) => {
    return (
        <div className='border-2 border-red-400 m-5 rounded-md p-3'>
            <h4>Aunty</h4>
            <p><small>House: {house}</small></p>
            <section className='flex'>
                <Cousin house={house}></Cousin>
                <Cousin house={house}></Cousin>
            </section>
        </div>
    );
};

export default Aunty;