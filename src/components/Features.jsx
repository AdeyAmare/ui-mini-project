import React from 'react'
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
import EastIcon from '@mui/icons-material/East';


function Features() {
    return (
        <section className="  py-20 mt-15 h-screen w-screen">

            <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                <h1 className="text-3xl text-center text-gray-800">Features</h1>
                <p className="text-center text-gray-400 mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
            </div>

            <div className="container shadow-md rounded-md mb-25 mt-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg ">

                <div className="flex flex-col ml-5 mt-4 rounded-md shadow-md bg-gradient-to-tr from-[#E4FBF4] via-white to-[#ECE9FD] lg:mb-16">
                    <div className="p-6 flex flex-col">
                        <div className=' flex items-center justify-center shadow-md relative w-16 h-16  bg-[#E52F46] rounded-full'>
                            <CloudDownloadOutlinedIcon style={{ color: "white" }} />
                        </div>
                        <h3 className="mt-5 mb-2 text-[16px] font-semibold">Business Consulting</h3>
                        <p className="mb-5 text-gray-400 font-light text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        <a className="pt-0" href="#" style={{ color: "#6367eb" }}>Learn More <EastIcon className="float-right" style={{ color: "gray" }} /> </a>

                    </div>

                </div>

                <div className="flex flex-col mt-4 rounded-md shadow-md bg-gradient-to-br from-[#6b71b5] via-white to-[#D9F8F0] lg:mb-16">
                    <div className="p-6 flex flex-col">
                        <div className=' flex items-center justify-center relative w-16 h-16 bg-[#2EC79B] rounded-full shadow-md'>
                            <GppGoodOutlinedIcon style={{ color: "white" }} />
                        </div>
                        <h3 className="mt-5 mb-2 text-[16px] font-semibold">Market Analysis</h3>
                        <p className="mb-5 text-gray-400 font-light text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        <a className="pt-0" href="#" style={{ color: "#6367eb" }}>Learn More <EastIcon className="float-right" style={{ color: "gray" }} /> </a>

                    </div>

                </div>

                <div className="flex flex-col mr-5 mt-4  rounded-md shadow-md bg-gradient-to-br from-[#D0EBFD] via-white to-[#F6F0FF]  lg:mb-16">
                    <div className="p-6 flex flex-col">
                        <div className=' flex items-center justify-center relative w-16 h-16 bg-[#1293EC] rounded-full drop-shadow-xl'>
                            <GridViewIcon style={{ color: "white" }} />
                        </div>
                        <h3 className="mt-5 mb-2 text-[16px] font-semibold">User Analysis</h3>
                        <p className="mb-5 text-gray-400 font-light text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        <a className="pt-0" href="#" style={{ color: "#6367eb" }}>Learn More <EastIcon className="float-right" style={{ color: "gray" }} /> </a>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Features