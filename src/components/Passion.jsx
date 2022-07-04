import React from 'react'
import cafeHopping from '../assets/passion/cafeHopping.png'
import motorcycling from '../assets/passion/motorcycling.png'
import webTinkering from '../assets/passion/webTinkering.png'

const passion = () => {
  return (
    <div name="passion" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>My Passion</p>
          <p className='py-6'>Here are my passion. What's yours?</p>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={motorcycling} alt="" className='rounded-md duration-200 hover:scale-105' />
            <div className='flex items-center justify-center'>
              <p className='my-5'>Motorcycling</p>
            </div>
          </div>
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={cafeHopping} alt="" className='rounded-md duration-200 hover:scale-105' />
            <div className='flex items-center justify-center'>
              <p className='my-5'>Cafe Hopping</p>
            </div>
          </div>
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={webTinkering} alt="" className='rounded-md duration-200 hover:scale-105' />
            <div className='flex items-center justify-center'>
              <p className='my-5'>Web Tinkering</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default passion