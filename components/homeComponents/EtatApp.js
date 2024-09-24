"use client";
import Image from 'next/image'
import React from 'react'

import imgBoy from '../../public/images/home/boy-front-gradient.png' 
import imgLocation from '../../public/images/home/location-front-gradient.png' 
import imgTrophy from '../../public/images/home/trophy-front-gradient.png' 
import imgNext from '../../public/images/home/next-front-gradient.png' 
import imgStar from '../../public/images/home/star-front-gradient.png' 


function EtatApp() {
    return (
        <div className='w-full mx-auto bg-slate-100 my-5 py-5 ' id='etat'>
            <div className=' mx-auto flex justify-center flex-wrap'>
                <div className='w-[200px] h-[220px]  my-5 shadow-lg shadow-slate-400 bg-slate-50 mx-2 rounded flex flex-col justify-center items-center  '>
                    <div className='h-1/2 w-full flex  justify-center items-center'>
                        <Image src={imgBoy} width={150}  height={150} className='object-cover' alt="img"/> 
                    </div>
                    <div className='h-1/2 mt-5 w-full flex flex-col justify-center items-center'>
                        <h2 className='text-2xl text-slate-800 font-bold'>+1879 </h2>
                        <p className='text-slate-500 font-semibold text-lg'>inscrits</p>
                    </div>
                </div>
                <div className='w-[200px] h-[220px]  my-5 shadow-lg shadow-slate-400 bg-slate-50 mx-2 rounded flex flex-col justify-center items-center  '>
                    <div className='h-1/2 w-full flex  justify-center items-center'>
                        <Image src={imgTrophy} width={150}  height={150} className='object-cover' alt="img"/> 
                    </div>
                    <div className='h-1/2 mt-5 w-full flex flex-col justify-center items-center'>
                        <h2 className='text-2xl text-slate-800 font-bold'>+20</h2>
                        <p className='text-slate-500 font-semibold text-lg'>Ans d{"'"}experience</p>
                    </div>
                </div>
                <div className='w-[200px] h-[220px]  my-5 shadow-lg shadow-slate-400 bg-slate-50 mx-2 rounded flex flex-col justify-center items-center  '>
                    <div className='h-1/2 w-full flex  justify-center items-center'>
                        <Image src={imgNext} width={150}  height={150} className='object-cover' alt="img"/> 
                    </div>
                    <div className='h-1/2  mt-5 w-full flex flex-col justify-center items-center'>
                        <h2 className='text-2xl text-slate-800 font-bold'>+20 </h2>
                        <p className='text-slate-500 font-semibold text-lg'>Formations</p>
                    </div>
                </div>
                <div className='w-[200px] h-[220px]  my-5 shadow-lg shadow-slate-400 bg-slate-50 mx-2 rounded flex flex-col justify-center items-center  '>
                    <div className='h-1/2 w-full flex  justify-center items-center'>
                        <Image src={imgLocation} width={150}  height={150} className='object-cover' alt="img"/> 
                    </div>
                    <div className='h-1/2 mt-5 w-full flex flex-col justify-center items-center'>
                        <h2 className='text-2xl text-slate-800 font-bold'>100% </h2>
                        <p className='text-slate-500 font-semibold text-lg'>A distance</p>
                    </div>
                </div> 
                <div className='w-[200px] h-[220px]  my-5 shadow-lg shadow-slate-400 bg-slate-50 mx-2 rounded flex flex-col justify-center items-center  '>
                    <div className='h-1/2 w-full flex  justify-center items-center'>
                        <Image src={imgStar}  width={150}  height={150} className='object-cover' alt="img"/> 
                    </div>
                    <div className='h-1/2 mt-5 w-full flex flex-col justify-center items-center'>
                        <h2 className='text-2xl text-slate-800 font-bold'>100% </h2>
                        <p className='text-slate-500 font-semibold text-lg'>Satisfaction</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EtatApp
