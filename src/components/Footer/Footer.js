import React from 'react';

const Footee = () => {
    return (
        <div className=" bg-gray-900">
            <div className="max-w-2xl mx-auto text-white py-10">
                <div className="text-center">
                    <h3 className="text-3xl mb-3"> Download our app </h3>
                    <p> We are ensure good quality and product </p>
                    <div className="flex justify-center my-10">
                        <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2 cursor-pointer">
                            <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8" alt=''></img>
                            <div className="text-left ml-3">
                                <p className='text-xs text-gray-200'>Download on </p>
                                <p className="text-sm md:text-base"> Google Play Store </p>
                            </div>
                        </div>
                        <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2 cursor-pointer">
                            <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8" alt=''></img>
                            <div className="text-left ml-3">
                                <p className='text-xs text-gray-200'>Download on </p>
                                <p className="text-sm md:text-base"> Apple Store </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 text-sm text-gray-400">
                    <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; Dipta Pal, 2024 </p>
                </div>
            </div>
        </div>
    );
};

export default Footee;