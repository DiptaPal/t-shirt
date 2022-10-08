import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = ({house}) => {
    return (
        <div className='border-2 border-red-400 m-5 rounded-md p-3'>
            <h4>Father</h4>
            <p><small>House: {house}</small></p>
            <section className='flex'>
                <Myself house={house}></Myself>
                <Brother house={house} ></Brother>
                <Sister house={house} ></Sister>
            </section>
        </div>
    );
};

export default Father;