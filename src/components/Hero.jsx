import React from 'react'
import Button from './Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

function Hero() {
    return (
        <section className="relative ml-20">
            <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 mx-auto lg:mt-20">
                <div className='flex relative  flex-1 flex-col item-center   lg:items-start'>
                    <img className='bg-pattern md:w-5/6 md:h-5/6 sm:w-5/6 sm:h-5/6' src={require('../assets/images/bg-pattern.png')} alt="" />
                    <h1 className=" md:text-4 md:mt-4 sm:mt-4 lg:text-6xl text-center font-bold lg:text-left">Business</h1>
                    <h1 className=" md:text-4 md:mt-4 sm:mt-4 lg:text-6xl text-center font-bold relative lg:text-left mt-6 mb-10">Management      <img className='biz-vector' src={require('../assets/images/business-vector.png')} alt="" /></h1>


                    <div className='container mb-7 md:items-center md:justify-center sm:items-center sm:justify-center'>
                        <div className='flex mb-5 shadow-lg rounded-md bg-transparent items-center'>
                            <div className='rounded-md bg-white flex items-center justify-center w-15 h-15 mt-1 ml-7'>
                                <img className=" rounded-full w-10 h-10 pt-1" src={require('../assets/images/main-logo.png')} alt="" />
                            </div>
                            <div className="flex flex-col px-5 py-1">
                                <h3 className="font-bold text-md text-gray-800 font-sans">Sales</h3>
                                <p className="mt-1 flex-1 font-light text-sm text-gray-400">Lorem ipsum is simply dummy text of the</p>
                            </div>
                        </div>
                        <div className='flex mb-5 shadow-md rounded-md bg-transparent items-center'>
                            <div className='rounded-md bg-white flex items-center justify-center w-15 h-15 mt-1 ml-7'>
                                <img className=" rounded-full w-10 h-10 pt-1" src={require('../assets/images/card-image-1.PNG')} alt="" />
                            </div>
                            <div className="flex flex-col px-5 py-1">
                                <h3 className="font-bold text-md text-gray-800 font-sans">Marketing</h3>
                                <p className="mt-1 flex-1 font-light text-sm text-gray-400">Lorem ipsum is simply dummy text of the</p>
                            </div>
                        </div>
                        <div className='flex shadow-xs rounded-md bg-transparent items-center'>
                            <div className='rounded-md bg-white flex items-center justify-center w-15 h-15 mt-1 ml-7'>
                                <img className=" rounded-full w-10 h-10 pt-1" src={require('../assets/images/card-image-2.PNG')} alt="" />
                            </div>
                            <div className="flex flex-col px-5 py-1">
                                <h3 className="font-bold text-md text-gray-800 font-sans">Idia</h3>
                                <p className="mt-1 flex-1 font-light text-sm text-gray-400">Lorem ipsum is simply dummy text of the</p>
                            </div>
                        </div>
                    </div>

                    <div className='relative mt-2 flex justify-center  flex-wrap gap-6'>
                        <Button class="mx-0">Join Us</Button>
                        <div className=' flex items-center justify-center shadow-md relative w-10 h-10 border-1 border-black  rounded-full'>
                            <InstagramIcon />
                        </div>
                        <div className=' flex items-center justify-center shadow-md relative w-10 h-10 border-1 border-black  rounded-full'>
                            <TwitterIcon />
                        </div>
                        <div className=' flex items-center justify-center shadow-md relative w-10 h-10 border-1 border-black  rounded-full'>
                            <FacebookIcon />
                        </div>


                    </div>

                </div>
                <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 ">
                    <img className='w-3/4 max-3/4' src={require("../assets/images/main-girl.png")} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero