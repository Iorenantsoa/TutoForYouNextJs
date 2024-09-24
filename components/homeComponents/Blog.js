import Image from 'next/image'
import React from 'react'
import imgDev1 from '../../public/images/home/dev1.jpg'
import imgDev2 from '../../public/images/home/dev2.jpg'
import imgDev3 from '../../public/images/home/dev3.jpg'
import imgDev4 from '../../public/images/home/dev4.jpg'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'

function Blog() {
    return (
        <div className='w-full ' id='blog'>
            <div className='w-11/12 md:w-4/6 mx-auto py-6'>
                <h1 className='text-2xl font-bold text-blue-700 text-center my-3'>BLOG</h1>
                <p className='text-center  my-3'>Soyez aux courants des activités de Tuto-Info, découvrez des astuces et profitez de nos conseils.</p>

                <div> 
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full mx-auto"
                    >
                        <CarouselContent>
                            {Array.from({ length: 12 }).map((_, index) => (
                                <CarouselItem key={index} className="basis-11/12 sm:basis-1/2 md:basis-1/3 flex justify-center py-3 px-3">
                                    <div className="relative flex flex-col mt-6 text-gray-700 bg-slate-50 shadow-md bg-clip-border rounded-xl w-96">
                                        <div
                                            className="relative  mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                            <Image
                                                src={imgDev1}
                                                alt="card-image" width="100%" height="50%" layout="responsive" placeholder="blur" />
                                        </div>
                                        <div className="p-6">
                                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                                UI/UX Review Check
                                            </h5>
                                        </div>
                                        <div className="p-6 pt-0">
                                            <button
                                                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-700 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                                type="button">
                                                Read More
                                            </button>
                                        </div>
                                    </div>

                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:block" />
                        <CarouselNext className="hidden md:block" />
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Blog
