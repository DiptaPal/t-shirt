import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

export const RingContext = createContext('Matir Ring');
export const MoneyContext = createContext(555);

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const [money, setMoney] = useState(555);
    
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <MoneyContext.Provider value={[money, setMoney]}>
                <div className='border-2 border-red-400 m-5 rounded-md'>
                    <h2 className='text-xl font-bold'>Grandpa</h2>
                    <section className='flex'>
                        <Father house={house}></Father>
                        <Uncle house={house}></Uncle>
                        <Aunty house={house}></Aunty>
                    </section>
                </div>
            </MoneyContext.Provider>
        </RingContext.Provider>
    );
};

export default Grandpa;