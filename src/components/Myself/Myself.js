import React from 'react';
import Special from '../Special/Special';

const Myself = ({house}) => {
    return (
        <div className='border-2 border-red-400 m-5 rounded-md p-3'>
            <h4>Myself</h4>
            <p><small>House: {house}</small></p>
            <Special house={house}></Special>
        </div>
    );
};

export default Myself;