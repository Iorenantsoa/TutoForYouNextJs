"use client"
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import { BiSolidTime } from "react-icons/bi";
import { useState } from 'react';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Loading from '@/app/loading';
import { toast } from 'react-toastify';
import { FaBullhorn, FaBookmark, FaCode, FaComputer, FaGlobe, FaLaptopCode, FaNetworkWired, FaPenNib, FaSignal } from 'react-icons/fa6'
import { useRouter } from 'next/navigation';
import axios from 'axios';



function CoursSuivi({ params }) {


  const { data: session, status: sessionStatus } = useSession()
  const [formationSimilaire, setFormationSimilaire] = useState(null)
  const [playList, setPlayList] = useState(null)
  const [currentPlayList, setCurrentPlayList] = useState(null)
  const [formation, setFormation] = useState(null)
  const id = params.id[0]
  const numeroVideo = params.id[1]
  const router = useRouter()




  const fetchFormation = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/coursSuivis/formation/${session?.user?.id}/${id}`)

      if (response.data.success === true) {
        setFormation(response.data.formation)

      } else if (response.data.success === false) {
        toast.error("Vous n'avez le droit de visiter ce lien")
        router.push("/etudiant/guide")
      }

    }
    catch (error) {
      toast.warning("Veuillez patientez s'il vous plait")
    }
  }


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

  const fetchPlaylist = async () => {
    try {


      //kjlkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk / 
      const PlayList = await axios.get(`http://localhost:5077/api/PlayList/${id}`)
      if (PlayList.statusText === "OK") {
        setPlayList(PlayList.data.$values)

        let playlistFound = playList.find(p => p.NumeroVideo == numeroVideo)


        if (!playlistFound) {
          toast.error("Une erreur s'est produite")
          router.push("/etudiant/guide")
          return
        }

        setCurrentPlayList(playlistFound)
      } else {
        toast.warning("Une erreur s'est produite lors de la récupération des données")
      }
    } catch (error) {
      toast.warning("Veuillez patientez s'il vous plait")
    }
  }


  useEffect(() => {
    fetchFormationSimilaire()
    fetchFormation()
    fetchPlaylist()
  }, [session])



  return (
    <>
      {
        sessionStatus !== "loading" ? (
          <>
            {formation && playList && currentPlayList ? (
              <div className='relative top-0 left-0 right-0'>
                <div className='w-full  bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800  shadow-md shadow-slate-500 py-3 ' >
                  <div className='w-11/12 md:w-9/12   mx-auto py-3  '>
                    <div className='flex justify-between  '>
                      <div className='flex flex-col justify-between '>
                        <div className='flex justify-start items-center ' >
                          <div>

                            {formation.category.categorie === "Programmation" && (
                              <FaCode className='text-white w-12 h-12 py-2 px-2 font-semibold mr-2   rounded-full bg-white bg-opacity-50 flex items-center justify-center' />
                            )}
                            {formation.category.categorie === "Maintenance" && (
                              <FaNetworkWired className='text-white w-12 h-12 py-2 px-2 font-semibold mr-2   rounded-full bg-white bg-opacity-50 flex items-center justify-center' />
                            )}
                            {formation.category.categorie === "Developpement" && (
                              <FaLaptopCode className='text-white w-12 h-12 py-2 px-2 font-semibold mr-2   rounded-full bg-white bg-opacity-50 flex items-center justify-center' />
                            )}
                            {formation.category.categorie === "Bureautique" && (
                              <FaComputer className='text-white w-12 h-12 py-2 px-2 font-semibold mr-2   rounded-full bg-white bg-opacity-50 flex items-center justify-center' />
                            )}
                            {formation.category.categorie === "Graphisme" && (
                              <FaPenNib className='text-white w-12 h-12 py-2 px-2 font-semibold mr-2   rounded-full bg-white bg-opacity-50 flex items-center justify-center' />
                            )}
                            {formation.category.categorie === "Web Marketing" && (
                              <FaBullhorn className='text-white w-12 h-12 py-2 px-2 font-semibold mr-2   rounded-full bg-white bg-opacity-50 flex items-center justify-center' />
                            )}
                            {formation.category.categorie === "Langue" && (
                              <FaGlobe className='text-white w-12 h-12 py-2 px-2 font-semibold mr-2   rounded-full bg-white bg-opacity-50 flex items-center justify-center' />
                            )}
                          </div>
                          <div className=''>
                            <p className='text-slate-50  '>Catégorie</p>
                            <p className='text-slate-50 font-semibold '>{formation.category.categorie}</p>
                          </div>

                        </div>
                        <div className='mt-3'>
                          <h1 className='text-white text-xl  md:text-2xl mr-5 font-bold'>{formation.formation}</h1>
                        </div>
                      </div>


                      <div className='flex flex-col justify-between ml-5 '>
                        <div className='flex justify-between items-center '>
                          <FaBookmark className='text-orange-500  font-semibold mr-2 text-lg' />
                          <p className='text-slate-100  font-semibold'>{formation.typeFormation}</p>
                        </div>
                        <div className='flex justify-end md:justify-between items-center'>
                          <div className='flex justify-between items-center'>
                            <FaSignal className='text-white  font-semibold mr-1 ' />
                            <p className='text-slate-100 text-sm '>{formation.difficulte} </p>
                          </div>
                          <div className='flex justify-between items-center ml-3'>
                            <BiSolidTime className='text-white  font-semibold mr-1 ' />
                            <p className='text-slate-100 text-sm '> {formation.duree}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div className='w-full mb-5'>
                  <div className='w-11/12  md:w-9/12  mx-auto py-6 flex md:justify-start  justify-center items-start flex-wrap '>
                    <div className='mr-5'>
                      <div>
                        {
                          currentPlayList.PlayListUrl ? (
                            <video className="rounded-sm w-full h-[450px] md:w-[900px] md:h-[500px] object-cover mb-5" controls autoPlay>

                              <source src={currentPlayList.PlayListUrl} type="video/mp4" />
                              {/* <source src="/videoGuide/Guide2.mp4" type="video/mp4" /> */}
                              Your browser does not support the video tag.
                            </video>
                          ) : (
                            null
                          )
                        }

                      </div>
                      <div className='text-black text-2xl md:text-3xl font-semibold mb-5 '>
                        <p>{currentPlayList.TitreVideo}</p>
                      </div>
                    </div>



                    <div className=" flex flex-col  rounded-t-xl  text-gray-900 bg-gray-1 shadow-md bg-clip-border w-full h-[40vh] sm:w-full  md:w-[300px] md:h-[490px]   mx-0">
                      <div className='bg-blue-800 py-3 rounded-t-xl'>
                        <h1 className='text-slate-100 text-center text-xl font-serif '>Play list</h1>
                      </div>

                      <div className='overflow-y-auto overflow-x-hidden h-full w-full'>

                        {playList ? (
                          playList.map((playList, index) => (
                            <a key={index} href={`/etudiant/cours-suivi/${id}/${playList.NumeroVideo}`}>
                              <div className={currentPlayList.TitreVideo == playList.TitreVideo ? "bg-blue-600 text-white font-semibold border-b  hover:bg-blue-400    py-3 px-2" : "bg-white border-b  hover:bg-blue-500  hover:text-white  py-3 px-2"}  >
                                {playList.TitreVideo.length > 30 ? `${playList.TitreVideo.substring(0, 30)}...` : playList.TitreVideo}

                              </div>
                            </a>

                          ))
                        )
                          :
                          (
                            <div className='min-h-["90vh"] w-full flex justify-center items-center py-5'>
                              <Loading />
                            </div>
                          )
                        }

                      </div>
                    </div>

                  </div>
                  <div className='w-11/12  md:w-9/12  mx-auto  '>
                    <div className=' '>
                      <div className=' '>
                        <h1 className='text-blue-800 text-2xl font-semibold mb-2 '>Cible</h1>
                        <div className='pl-10'>
                          <ul>
                            {formation.cible.map((cible, index) => (
                              <li key={index} className='text-slate-700 text-md font-semibold list-disc'>{cible}</li>
                            )
                            )}
                          </ul>
                        </div>
                      </div>
                      <div className='mt-5 '>
                        <h1 className='text-blue-800 text-2xl font-semibold my-2 '>Prérequis</h1>
                        <div className='pl-10'>
                          <ul>
                            {formation.prerequis.map((prerequis, index) => (
                              <li key={index} className='text-slate-700 text-md font-semibold list-disc'>{prerequis}</li>
                            )
                            )}
                          </ul>
                        </div>
                      </div>
                      <div className='mt-5 '>
                        <h1 className='text-blue-800 text-2xl font-semibold my-2 '>Programme</h1>
                        <div className='pl-10'>
                          <ul>
                            {formation.programme.map((programme, index) => (
                              <li key={index} className='text-slate-700 text-md font-semibold list-disc'>{programme}</li>
                            )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
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
                                                <FaCode className='text-gray-800 w-10 h-10 py-2 px-2 font-semibold mr-2   rounded-full bg-slate-200 bg-opacity-50 flex items-center justify-center' />
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
              </div>
            ) :
              <div className='min-h-[40vh] w-full flex justify-center items-center py-5'>
                <Loading />
              </div>
            }
          </>
        ) : (
          <div className='min-h-[40vh] w-full flex justify-center items-center py-5'>
            <Loading />
          </div>
        )
      }

    </>
  )
}

export default CoursSuivi

