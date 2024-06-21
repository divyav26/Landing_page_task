import React from 'react'
import HeroImg from '../../../public/imgs/HeroImg.jpg'
import logo from '../../../public/imgs/Logo.png'
import Image from 'next/image'
import { FeaturesAmenities, details} from '../Data/CompData'
import bgGallary from '../../../public/imgs/bgGallary.jpg'
import { IoMenu } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import Gallary from './Gallary'


const HeroPage = () => {
  return (
    <>
      <div className='w-full overflow-hidden'>
        <div className='relative'>
          <Image src={HeroImg} alt='hero-img' className='lg:h-full h-[90vh]' />
          <div class="absolute top-6 w-full px-[3rem]">
            <div className='flex justify-between items-center'>
                  <div>
                      <Image src={logo} alt='img-logo' className='w-[100px]' />
                  </div>
                  <div className='hidden lg:block'>
                  <button class="bg-transparent font-bold text-[#17ABFF] py-1 px-6 border-2 border-blue-500 rounded">
                      ENQUIRE NOW
                  </button>
                  </div>
                  <div className='block lg:hidden'>
                  <IoMenu className='text-white text-2xl'/>
                  </div>
            </div>

            <div className='lg:flex lg:justify-between lg:items-center mt-[4rem]'>
                  <div className='text-white'>
                    <h1 className='text-4xl font-oswald'>HARBOUR LIGHTS</h1> 
                    <h1 className='text-4xl font-oswald'>DE <span className='text-[#17ABFF]'>GRESPGONO</span></h1>
                    <p className='py-4 font-poppins'>1,2 & 3 Bedrooms SeasideApartments <br/>in Dubai Maritime City</p>  
                    <div className='flex items-center gap-2 bg-gray-800 '>
                    <div class="border-l-2 border-[#17ABFF] h-6"></div>
                    <p className='text-xs p-1  font-poppins'>Rental Returns of UPTO 11%**
                    </p>
                    </div>
                    <div className='flex items-center gap-2 bg-gray-800 mt-2'>
                    <div class="border-l-2 border-[#17ABFF] h-6"></div>
                    <p className='text-xs p-1  font-poppins'>Capital Appreciation of UPTO 32%**
                    </p>
                    </div>
                  </div>
                  <div className='text-white bg-gray bg-opacity-75 backdrop-blur-md p-4 rounded mt-20 lg:mt-0'>
                      <p className='text-xs py-2 font-poppins'>PRICING STARTS FROM</p>
                      <p className='text-3xl py-2 font-oswald'>$ 425,000</p>
                      <h3 className='text-xl py-2 font-oswald'>AED 1.3 Million</h3>
                      <button class="bg-[#17ABFF] font-poppins text-white py-2 px-4 my-4 rounded">
                          GET A PRESENTATION
                      </button>
                      <hr/>
                      <p className='text-[10px] py-2 font-poppins'>Get an Expert’s Presentation of Real<br/> Estate in Dubai for Life and investment</p>
                  </div>
            </div>
          </div>
        </div>
      </div>

      <div className='grid lg:grid-cols-4 grid-cols-2 justify-items-center text-center px-[3rem] lg:py-4 py-6 bg-[#F4F9FF]'>
      {
        details.map((item)=>{
          return(
            <>
            <div className='py-2 flex flex-col items-center text-[#00357B]' key={item.id}>
              <Image src={item.img} alt='img' />
              <p className='text-xs pt-2 font-poppins'>{item.title}</p>
              <p className='text-xl font-oswald'>{item.subprice}</p>
              <hr className='w-[70%] border-t-4 border-gray-300 my-2 rounded-lg' />
            </div>
            </>
          )
        })
      }
      </div>

      <div className='pt-[2rem] px-[3rem]'>
        <div className='text-center'>
          <h1 className='text-4xl text-[#004572] tracking-tight'>HARBOUR</h1>
          <h1 className='text-4xl text-[#004572] tracking-tight'>LIGHTS</h1>
          <p className='text-xs py-1'>de GRISOGONO</p>
          <p className='text-[6px]'>GENEVE</p>
        </div>
        <div className='text-center'>
          <h1 className='lg:text-5xl text-2xl font-bold py-4 text-[#004572]'>FEATURES & AMENITIES</h1>
          <p className='poppins-regular text-sm'>Features & Amenities Harbour Lights beautifully honours maritime voyages while embracing an opulent seafront lifestyle. Its maritime-inspired amenities provide an unmatched seaside experience, offering a life of tranquility and bliss.</p>
        </div>

        <div className='grid lg:grid-cols-4 grid-cols-2 justify-items-center lg:px-[3rem] py-4 gap-[1.5rem]'>
            {
            FeaturesAmenities.map((item)=>{
              return(
                <>
                <div className='shadow-bottom rounded-2xl font-poppins'>
                  <Image src={item.img} alt='img' />
                  <p className='text-sm py-4 text-center text-[#004572] font-semibold '>{item.title}</p>
                
                </div>
                </>
              )
            })
          }
        </div>

        <div className='py-4 text-right'>
          <p className='text-xs font-poppins'>*T&Cs apply | ** Based on similar branded projects in the last 2 years. Source 1 | Source 2</p>
          <button className="bg-[#00357B] m-2 text-white font-bold py-2 px-4 border border-[#00357B] rounded">EXTERIORS</button>
          <button className="bg-transparent m-2 text-[#00357B] font-semibold py-2 px-4 border border-[#00357B] rounded">INTERIORS</button>
        </div>
      </div>

      <div className='px-[3rem]'>
      <div className="py-2 relative">
        <Image src={bgGallary} alt="Gallery-img" className="w-full h-auto" />
        <div className="absolute inset-0 flex justify-between items-center">
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-[50%]">
            <FaAngleLeft className="text-[#00357B] text-3xl p-1" />
          </div>
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-[50%]">
            <FaAngleRight className="text-[#00357B] text-3xl p-1" />
          </div>
        </div>
      </div>

        <div className='' >
         <Gallary />
        </div>
      </div>

      {/* footer  */}

      <div className='bg-[#091D41] py-4'>
        <p className='text-center text-white font-bold'>© DAMAC Copyright 2024 All rights reserved.</p>
      </div>
    </>
  )
}

export default HeroPage
