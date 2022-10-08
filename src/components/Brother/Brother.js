import React from 'react';

const Brother = ({house}) => {
    return (
        <div className='border-2 border-red-400 m-5 rounded-md p-3'>
            <h4>Brother</h4>
            <p><small>House: {house}</small></p>
        </div>
    );
};

export default Brother;