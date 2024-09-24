import Image from 'next/image'
import React from 'react'

import imgDev1 from '../../public/images/home/dev1.jpg'
import imgDev2 from '../../public/images/home/dev2.jpg'
import imgDev3 from '../../public/images/home/dev3.jpg'
import imgDev4 from '../../public/images/home/dev4.jpg'

function FormationPart2() {
    return (
        <div className='w-full ' id='formations'>
            <div className='w-4/5 md:w-4/6 mx-auto py-6 '>
                <h1 className='text-2xl font-bold text-blue-700 text-center my-3'>FORMATIONS POPULAIRES</h1>
                <p className='text-center  my-3'>Choissisez la formation qui vous convient</p>
                <div className='flex justify-center'>
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Cours en libre accès
                        </span>
                    </button>
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Formation certifiante
                        </span>
                    </button>
                </div>
                <div className=' flex flex-row flex-wrap w-full mx-auto justify-center'>

                    <div className="  lg:w-1/4 md:w-1/4 w-5/12  mx-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5">

                        <a href="#" >
                            <Image className="rounded-t-lg" placeholder="blur" height="50%" width={"100%"} src={imgDev1} alt="image" />

                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-lg   tracking-tight text-gray-500 dark:text-white">Bureautique</h5>
                            </a>
                            <p className="mb-3 font-semibold text-gray-800 text-xl md:text-2xl">Excel Avancé</p>
                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/4 w-5/12  mx-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5">
                        <a href="#">
                            <Image className="rounded-t-lg" placeholder="blur" height="50%" width={"100%"} src={imgDev2} alt="image" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-lg   tracking-tight text-gray-500 dark:text-white">Développement</h5>
                            </a>
                            <p className="mb-3 font-semibold text-gray-800  text-xl md:text-2xl">Web design</p>
                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/4 w-5/12  mx-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5">
                        <a href="#">
                            <Image className="rounded-t-lg" placeholder="blur" height="50%" width={"100%"} src={imgDev3} alt="image" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-lg   tracking-tight text-gray-500 dark:text-white">Graphisme</h5>
                            </a>
                            <p className="mb-3 font-semibold text-gray-800  text-xl md:text-2xl">Illustrator</p>
                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/4 w-5/12  mx-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5">
                        <a href="#">
                            <Image className="rounded-t-lg" placeholder="blur" height="50%" width={"100%"} src={imgDev4} alt="image" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-lg   tracking-tight text-gray-500 dark:text-white">Web Marketing</h5>
                            </a>
                            <p className="mb-3 font-semibold text-gray-800  text-xl md:text-2xl">Community Management</p>
                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/4 w-5/12  mx-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5">
                        <a href="#">
                            <Image className="rounded-t-lg" placeholder="blur" height="50%" width={"100%"} src={imgDev1} alt="image" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-lg   tracking-tight text-gray-500 dark:text-white">Développement</h5>
                            </a>
                            <p className="mb-3 font-semibold text-gray-800  text-xl md:text-2xl">JavaScript et JQuery</p>
                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/4 w-5/12  mx-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5">
                        <a href="#">
                            <Image className="rounded-t-lg" placeholder="blur" height="50%" width={"100%"} src={imgDev3} alt="image" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-lg   tracking-tight text-gray-500 dark:text-white">Maintenance</h5>
                            </a>
                            <p className="mb-3 font-semibold text-gray-800  text-xl md:text-2xl">Maintenance et Réseau</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center'> 
                    <button className="text-white  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2 ">Voir plus</button>
                </div>
            </div>
        </div>
    )
}

export default FormationPart2
