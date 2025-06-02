"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Overlay from './Overlay';

const Carousel = ({images}:{images:string[]}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
   const handleImageChange = (newIndex:number)=>{
     if(newIndex !== currentImageIndex) {
        setCurrentImageIndex(newIndex)
     }
   }
    useEffect(()=> {
        const intervalId = setTimeout(()=> {
            // % ensures when it is more than or equal to the image length, it goes back to remainder it returns back to 0
            handleImageChange((currentImageIndex +1) % images.length)
        }, 1000)

        return ()=>clearInterval(intervalId)
    }, [currentImageIndex])
  return (
    <>
      <div className='absolute inset-0 overflow-hidden '>
        {
            images.map((img, index)=> (
                <div key={img} className={`absolute inset-0 transition-all duration-1000 ${index=== currentImageIndex ? "opacity-100 scale-105": "opacity-0 scale-100"}`}>
                   <Image
                   src={img}
                    alt={`carousel ${index+1 }`} fill className='object-cover' priority={index === currentImageIndex}
                   />            
                </div>
            ))
        }
      </div>
      <Overlay/>
      <div className='absolute right-4 bottom-4 z-50'>
          <div className='glex gap-2'>
               {
                //this is not to display image but to ensure the button is in sync with the image index
                images.map((img, i)=> (
                    <button key={img}
                    onClick={()=>handleImageChange(i)}
                    className={`w-12 h-2 rounded-full transition-all duration-300 shadow ${currentImageIndex === i ? "bg-yellow-300": "bg-white hover:bg-gray-200"}`}
                    ></button>
                ))
               }
          </div>
      </div>
    </>
  )
}

export default Carousel