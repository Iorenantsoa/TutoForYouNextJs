import Image from 'next/image'
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { FaCode, FaNetworkWired, FaComputer, FaPenNib, FaGlobe, FaBullhorn, FaLaptopCode } from 'react-icons/fa6'

function HeroSection() {
    const category = [
        { index: 1, icon: <FaCode className='text-white w-10 h-10 font-semibold' /> , categorie : "Programmation" },
        { index: 2, icon: <FaNetworkWired className='text-white w-10 h-10  font-semibold' /> , categorie : "Maintenance" },
        { index: 3, icon: <FaLaptopCode className='text-white w-10 h-10  font-semibold' /> , categorie : "Developpement" },
        { index: 4, icon: <FaComputer className='text-white w-10 h-10  font-semibold' /> , categorie : "Bureautique" },
        { index: 5, icon: <FaPenNib className='text-white w-10 h-10  font-semibold' /> , categorie : "Graphisme" },
        { index: 6, icon: <FaBullhorn className='text-white w-10 h-10  font-semibold' /> , categorie : "Web Marketing"},
        { index: 7, icon: <FaGlobe className='text-white w-10 h-10  font-semibold' /> , categorie : "Langue" },
    ]
    return (
        <div className='w-full py-14 bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800 flex flex-column' id='accueil'>
            <div className=" w-4/5 md:w-1/2  mx-auto">
                <h1 className='my-3 md:text-3xl  text-2xl text-slate-50 font-bold text-center '>Meilleure plateforme de formation en ligne à Madagascar</h1>
                <p className='m-5 mb-3 md:text-lg  text-sm  text-slate-200  font-light text-center'>Bénéficiez d’une formation de qualité tout en restant chez vous</p>
                <div className='m-8 mb-5 flex justify-center'>
                    <div className="relative mt-2 rounded-md shadow-sm w-full">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3  ">
                            <span className="text-gray-00 sm:text-sm">$ |</span>
                        </div>
                        <input type="text" name="search" id="search" className="block  w-full rounded-md border-0 py-2.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Recherche ..." />
                    </div>
                </div>
                <div className='mt-10'>
                    <Carousel 
                        opts={{
                            align: "start",
                        }}
                        className="w-full  mx-auto"
                    >
                        <CarouselContent>

                            {
                                category.map(cat => (
                                    <CarouselItem key={cat.index} className=" basis-1/2  md:basis-1/4 flex justify-center items-center">
                                        <div className='flex flex-col justify-center items-center'>
                                            <div className='p-2 rounded-full bg-white bg-opacity-50 flex items-center justify-center'>
                                                {cat.icon}
                                            </div>
                                            <div className='text-center mt-3'>
                                                <p className='text-slate-50  text-sm '>{cat.categorie}</p>
                                            </div>
                                        </div> 
                                    </CarouselItem>
                                ))
                            }
                        </CarouselContent>
                        <CarouselPrevious  className="hidden md:block" />
                        <CarouselNext className="hidden md:block" />
                    </Carousel>
                </div>
            </div>
        </div>

    )
}

export default HeroSection
