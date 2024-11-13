import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/*-----left side-------*/}
        <div>
        <img className='mb-5 w-40' src={assets.logo} alt=''/>
        <p className='w-full md:w-2/3 text-gray-600 leading-6'>Experience world-class medical consultation from the comfort of your home. Global Health Connect brings expert doctors to your fingertips, helping you make informed decisions about your health and well-being.</p>
        </div>
        {/*-----center side-------*/}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>

        </div>
        {/*-----right side-------*/}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+91-212-456-7890</li>
                <li>shekharsamarth1574@gmail.com</li>
            </ul>
        </div>
      </div>
      {/*-------Copyright text---------*/}
      <div>
      <hr/>
      <p className='py-5 text-sm text-center'>Copyright 2024@ Prescripto - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
