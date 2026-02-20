import Image from 'next/image';
import React from 'react';
import banner1 from '../../public/banner-1.jpeg';
import banner2 from '../../public/banner-2.jpeg';
import banner3 from '../../public/banner-3.jpeg';

const Banner = () => {
    return (
        <div className='w-full'>
            <div className="carousel w-full h-[500px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <Image src={banner1}
                        fill
                        priority
                        className='object-cover '
                        alt="banner-1"></Image>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <div className='flex gap-10 items-center'>
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <h1 className='text-3xl text-white'>Create <br /> the perfect <br /> work place</h1>

                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <Image src={banner2}
                        fill
                        priority
                        className='object-cover '
                        alt="banner-1"></Image>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <div className='flex gap-10 items-center'>
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <h1 className='text-3xl text-white'>Cosy &<br /> Contemporary  <br /> Elegance </h1>
                    </div>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <Image src={banner3}
                        fill
                        priority
                        className='object-cover '
                        alt="banner-1"></Image>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <div className='flex gap-10 items-center'>
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <h1 className='text-3xl text-white'>Making minimal</h1>
                    </div>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;