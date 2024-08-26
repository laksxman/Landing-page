import React from "react";
import { Carousel } from "flowbite-react";
import Banner1 from '../assets/Banner1.png'
import Banner2 from '../assets/Banner2.png'
import Banner3 from '../assets/Banner3.png'



const home = () => {
  return (
    <div className="bg-slate-200" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
      <Carousel className="w-full mx-auto bg-gray-300"> 
      <div className="flex h-full items-center justify-center">
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div>
          <img src={Banner1} alt="banner" className="w-60 mt-10 md:w-96 mr-8" />
        </div>
        <div className="md:w-1/2">
        <h3 className="text-4xl font-semibold mb-4 text-gray-800 md:w-3/4 leading-snug">Innovate with Technology</h3>
        <button className="btn-first bg-blue-500 h-6 w-20">Register</button>
        </div>
        </div>
        </div>

        <div className="flex h-full items-center justify-center">
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div>
          <img src={Banner2} alt="banner" className="w-60 mt-10 md:w-96 mr-8" />
        </div>
        <div className="md:w-1/2">
        <h3 className="text-4xl font-semibold mb-4 text-gray-800 md:w-3/4 leading-snug">Tech Process</h3>
        <button className="btn-first bg-blue-500 h-6 w-20">Register</button>
        </div>
        </div>
        </div>

        <div className="flex h-full items-center justify-center">
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div>
          <img src={Banner3} alt="banner" className="w-60 mt-10 md:w-96 mr-8" />
        </div>
        <div className="md:w-1/2">
        <h3 className="text-4xl font-semibold mb-4 text-gray-800 md:w-3/4 leading-snug">Technology Scope</h3>
        <button className="btn-first bg-blue-500 h-6 w-20">Register</button>
        </div>
        </div>
        </div>


      </Carousel>
      </div>
    </div>
  )
}

export default home