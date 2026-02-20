import Image from 'next/image';
import React from 'react';

const MostAdd = () => {
    return (
        <div className='w-11/12 mx-auto my-10'>
            <div className='grid lg:grid-cols-3 gap-4'>
                <div className='relative overflow-hidden group w-fit'>
                    <Image src="https://demo.uix.store/sober-furniture/wp-content/uploads/sites/3/2017/06/1-20.jpg" width={1000} height={1000} alt="most-add" className='transition-transform duration-500 ease-out group-hover:scale-110' />
                    <div className='absolute top-30 left-20 transform -translate-x-1/2 -translate-y-1/2 font-manrope font-semibold text-3xl '>
                        <h1>Find <br /> Inspration <br /> Here </h1>
                        <button className='relative mt-6 after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 group-hover:after:w-full'>Shop Now</button>
                    </div>
                </div>
                <div className='relative overflow-hidden group w-fit'>
                    <Image src="https://demo.uix.store/sober-furniture/wp-content/uploads/sites/3/2017/06/2-20.jpg" width={1000} height={1000} alt="most-add" className='transition-transform duration-500 ease-out group-hover:scale-110' />
                    <div className='absolute text-white top-1/2 text-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-manrope font-semibold lg:text-xl '>
                        <p>7 day only</p>
                        <p className='my-3'>50% Off <br />Everything</p>
                        <p>END SUNDAY 5 FEBRUARY</p>
                        <button className='relative mt-6 after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full'>Shop Now</button>
                    </div>
                </div>
                <div className='relative overflow-hidden group w-fit'>
                    <Image src="https://demo.uix.store/sober-furniture/wp-content/uploads/sites/3/2017/06/3-20.jpg" width={1000} height={1000} alt="most-add" className='transition-transform duration-500 ease-out group-hover:scale-110' />
                    <div className='absolute top-30 left-30 transform -translate-x-1/2 -translate-y-1/2 font-manrope font-semibold lg:text-3xl '>
                        <p>2026</p>
                        <h1>New Arrival <br /> Collection</h1>
                        <button className='relative mt-6 after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 group-hover:after:w-full'>Shop Now</button>
                    </div>
                </div>

            </div>
            <div className='grid lg:grid-cols-2 gap-4 mt-10'>
                <div className='relative overflow-hidden group w-fit'>
                    <Image src="https://demo.uix.store/sober-furniture/wp-content/uploads/sites/3/2017/06/4-10.jpg" w width={1000} height={1000} alt="most-add" className='transition-transform duration-500 ease-out group-hover:scale-110' />
                    <div className='absolute text-white top-20  left-30 transform -translate-x-1/2 -translate-y-1/2 font-manrope font-semibold lg:text-xl '>
                        <p>Exclusive bundles </p>
                        <button className='relative mt-2 after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full'>SEE OUR COLLECTION</button>
                    </div>
                </div>
                <div className='relative overflow-hidden group w-fit'>
                    <Image src="https://demo.uix.store/sober-furniture/wp-content/uploads/sites/3/2017/06/5-3.jpg" width={1000} height={1000} alt="most-add" className='transition-transform duration-500 ease-out group-hover:scale-110' />
                    <div className='absolute top-20 left-20 transform -translate-x-1/2 -translate-y-1/2 font-manrope font-semibold lg:text-md '>
                        <p>NEW COLLECTION</p>
                        <h1>Fiber Side<br />Chair </h1>
                        <button className='relative mt-6 after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 group-hover:after:w-full'>SEE OUR NEWS</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default MostAdd;