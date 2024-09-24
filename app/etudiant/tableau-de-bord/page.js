"use client"
import React, { useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { FaBullhorn, FaCode, FaComputer, FaGlobe, FaLaptopCode, FaNetworkWired, FaPenNib } from 'react-icons/fa6'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSession } from 'next-auth/react'
import Loading from '@/app/loading'
import axios from 'axios'
import { format } from 'date-fns'

function Dashboard() {

  const [coursSuivis, setCoursSuivis] = useState(null);

  const { data: session, status: sessionStatus } = useSession()

  const router = useRouter()

  const [formationSimilaire, setFormationSimilaire] = useState(null)

  const fetchFormationSimilaire = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/formations', {
        method: "GET"
      });
      if (!response.ok) {
        throw new Error("Une erreur s'est produite lors de la récupération des données");
      }
      const data = await response.json();
      setFormationSimilaire(data.formation);
    } catch (error) {
      console.error(error);
      toast.error("Une erreur s'est produite lors de la récupération des données");
    }
  }

  const fetchMyCoursSuivis = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/coursSuivis/getMyCoursSuivis/${session?.user?.id}`)
      if (response) {
        console.log(response.data)
        setCoursSuivis(response.data)
      } else {
        console.error(error);
        toast.error("Une erreur s'est produite lors de la récupération des données");
      }
    } catch (error) {
      console.log("attends")
      toast.warning("Veuillez patienter s'il vous plait");
    }
  }



  useEffect(() => {
    fetchMyCoursSuivis()
    fetchFormationSimilaire()
  }, [session, sessionStatus])


  return (
    <>
      {
        sessionStatus !== "loading" ? (

          <div className='w-full mb-10'>
            <div className='w-11/12 md:w-4/6 mx-auto '>


              {
                coursSuivis ? (
                  <>
                    <h1 className='text-blue-700 text-3xl font-semibold my-5 '>Cours suivis</h1>
                    {/* <div className="relative z-0 w-full my-5 group ">
                      <input type="text" name="Rechercher" id="Rechercher" className="block py-2.5 px-0  w-full md:w-1/3 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                      <label htmlFor="Rechercher" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Rechercher</label>
                    </div> */}
                    <div>
                      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <thead className="text-xs text-slate-100 uppercase bg-blue-600 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                              <th scope="col" className="px-6 py-3">
                                Cours
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Date d{"'"}inscription
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Progression
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Certificat
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              coursSuivis.map(coursSuivis => (
                                <tr key={coursSuivis._id} onClick={() => router.push(`/etudiant/cours-suivi/${coursSuivis.formations._id}/1`)} className=" cursor-pointer bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {coursSuivis.formations.formation}
                                  </th>
                                  <td className="px-6 py-4 "> 
                                    {format(new Date(coursSuivis.createdAt), 'dd-MM-yyyy')}
                                  </td>
                                  <td className="px-6 py-4">
                                    {coursSuivis.progression} %
                                  </td>
                                  <td className="px-6 py-4">
                                    {coursSuivis.formations.typeFormation}
                                  </td>
                                </tr>
                              ))
                            }


                          </tbody>


                        </table>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <div className='flex justify-center items-start my-5'>
                      <p className='text-red-600 font-semibold text-lg md:text-xl'>Vous n{"'"}avez pas encore des cours à suivre</p>
                    </div>
                  </div>
                )
              }




              <div className=''>
                <h1 className='text-blue-900 text-2xl font-semibold mt-10 mb-5 '>Cours similaire</h1>
                {
                  formationSimilaire && (
                    <div className='w-11/12 mx-auto  '>
                      <div className=' '>
                        <Carousel
                          opts={{
                            align: "start",
                          }}
                          className="w-full mx-auto"
                        >
                          <CarouselContent>
                            {formationSimilaire.map((formation) => (
                              <CarouselItem key={formation._id} className="basis-3/4 md:basis-1/4 sm:basis-1/3  flex justify-center py-3 px-3">
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
                                          <p className='text-gray-500 font-semibold'>{formation.category.categorie}</p>
                                        </div>

                                      </div>
                                      <h5 className="block mb-2 mt-2 font-sans text-lg md:text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        {formation.formation}
                                      </h5>

                                    </div>
                                  </a>
                                </div>

                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="hidden md:block" />
                          <CarouselNext className="hidden md:block" />
                        </Carousel>
                      </div>
                    </div>
                  )
                }

              </div>
            </div>
          </div>
        ) : (
          <div className='h-full w-full flex justify-center items-center py-5'>
            <Loading />
          </div>
        )
      }
    </>

  )
}

export default Dashboard
