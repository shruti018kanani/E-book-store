import React from 'react'
import { Link } from 'react-router-dom'
import BookBunch from '../assets/BookBunch.jpg'

const PromoBanner = () => {
  return (
    <div className=' mt-16 py-12 bg-yellow-600 px-4 lg:px-24'>
        <div>
            <div className='md:w-1/2'>
                <h2 className=' text-4xl font-bold mb-6 leading-sung'>2024 National Book Awards for Fiction Shortlist</h2>
                <Link to="/shop" className=' block'><button className=' bg-violet-600 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Get Promo Code </button></Link>

            </div>
        </div>
      <img src={BookBunch} alt="" />
    </div>
  )
}

export default PromoBanner
