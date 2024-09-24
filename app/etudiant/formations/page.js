"use client"
import Loading from '@/app/loading'
import Image from 'next/image'
import React, { useState } from 'react'


import { useEffect } from 'react'
import { FaBullhorn, FaCode, FaComputer, FaGlobe, FaLaptopCode, FaNetworkWired, FaPenNib } from 'react-icons/fa6'
import { toast } from 'react-toastify'

const Formations = () => {
  const [formations, setFormations] = useState(null);

  const fetchFormations = async () => { 
    try {
      const response = await fetch('http://localhost:3000/api/formations', {
        method: "GET"
      });
      if (!response.ok) {
        throw new Error("Une erreur s'est produite lors de la récupération des données");
      }
      const data = await response.json();
      setFormations(data.formation);
    } catch (error) {
      console.error(error);
      toast.error("Une erreur s'est produite lors de la récupération des données");
    }
  };

  useEffect(() => {
    fetchFormations();
  }, []);
  return (
    <div className='w-full mb-10  '>
      <div className='w-11/12 md:w-4/6 mx-auto  '>
        <h1 className='text-blue-700 text-3xl font-semibold mt-8 '>Toutes les formations </h1>

        {/* <div className="relative z-0 w-full my-5 group ml-5  ">
          <input type="text" name="Rechercher" id="Rechercher" className="block py-2.5 px-0  w-1/2 md:w-1/3 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label htmlFor="Rechercher" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Rechercher</label>
        </div> */}
        <div>
        </div>

        <div className='mt-10'>

          <div className=' flex flex-row flex-wrap w-full mx-auto justify-center md:justify-between '>
            {
              formations ? formations.map(formation => (
                <div key={formation._id} className="relative flex flex-col my-7 me-3  text-gray-700 bg-slate-50 shadow-md bg-clip-border rounded-xl w-2/3 sm:w-1/3  md:w-[250px]">
                  <a href={`/etudiant/formations/${formation._id}`}>
                    <div
                      className="relative  mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                      <Image
                        src={`http://localhost:3000${formation.ImgPoster}`}
                        alt="card-image"
                        width={300}
                        height={300}
                        className='object-cover min-h-[150px] min-w-["100%"]'
                        placeholder="blur"
                        objectFit="cover"
                        objectPosition="center"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAwAB/5+C6OMAAAAASUVORK5CYII="
                      />
                    </div>
                    <div className="p-6">
                      <div className='flex justify-start items-center' >
                        <div>
                          {formation.category.categorie === "Programmation" && (
                            <FaCode className='text-gray-800 w-10 h-10 py-2 px-2 font-semibold mr-2   rounded-full bg-slate-200 bg-opacity-50 flex items-center justify-center' />
                          )}
                          {formation.category.categorie === "Maintenance" && (
                            <FaNetworkWired className='text-gray-800 w-10 h-10 py-2 px-2 font-semibold mr-2   rounded-full bg-slate-200 bg-opacity-50 flex items-center justify-center' />
                          )}
                          {formation.category.categorie === "Developpement" && (
                            <FaLaptopCode className='text-gray-800 w-10 h-10 py-2 px-2 font-semibold mr-2   rounded-full bg-slate-200 bg-opacity-50 flex items-center justify-center' />
                          )}
                          {formation.category.categorie === "Bureautique" && (
                            <FaComputer className='text-gray-800 w-10 h-10 py-2 px-2 font-semibold mr-2   rounded-full bg-slate-200 bg-opacity-50 flex items-center justify-center' />
                          )}
                          {formation.category.categorie === "Graphisme" && (
                            <FaPenNib className='text-gray-800 w-10 h-10 py-2 px-2 font-semibold mr-2   rounded-full bg-slate-200 bg-opacity-50 flex items-center justify-center' />
                          )}
                          {formation.category.categorie === "Web Marketing" && (
                            <FaBullhorn className='text-gray-800 w-10 h-10 py-2 px-2 font-semibold mr-2   rounded-full bg-slate-200 bg-opacity-50 flex items-center justify-center' />
                          )}
                          {formation.category.categorie === "Langue" && (
                            <FaGlobe className='text-gray-800 w-10 h-10 py-2 px-2 font-semibold mr-2   rounded-full bg-slate-200 bg-opacity-50 flex items-center justify-center' />
                          )}
                        </div>

                        <div>
                          <p className='text-gray-500 font-semibold'><p>{formation.category.categorie}</p></p>
                        </div>

                      </div>
                      <h5 className="block mb-2 mt-2 font-sans text-lg md:text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {formation.formation}
                      </h5>

                    </div>
                  </a>

                </div>

              )): (
                <div className='h-[40vh] w-full flex justify-center items-center'>
                  <Loading/>
                </div>
              )
            } 

          </div>
        </div>
      </div>
    </div>
  )
}

export default Formations
