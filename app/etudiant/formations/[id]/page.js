"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { Separator } from '@/components/ui/separator'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { FaBullhorn, FaBookmark, FaCode, FaComputer, FaGlobe, FaLaptopCode, FaNetworkWired, FaPenNib, FaSignal, FaInfo, FaClipboardList, FaXmark } from 'react-icons/fa6'
// import { FaSignal } from "react-icons/fa";
import { BiSolidTime } from "react-icons/bi";
import { useState } from 'react'
import { toast } from 'react-toastify'
import Loading from '@/app/loading'
import { useSession } from 'next-auth/react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

function Formation({ params }) {
    const id = params.id
    const { data: session, status: sesstionStatus } = useSession()
    const router = useRouter()
    const [formation, setFormation] = useState(null)
    const [formationSimilaire, setFormationSimilaire] = useState(null)
    const [showModal, setShowModal] = useState(false);


    const fetchFormation = async () => {
        const response = await fetch(`http://localhost:3000/api/formations/fetchOneFormation/${id}`, {
            method: 'GET'
        })

        if (response.ok) {
            const formationFetched = await response.json()
            setFormation(formationFetched)
        } else {
            toast.error("Une erreur s'est produite lors de la récupération des données")
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
    const makeFacture = async () => {
        const userId = session.user?.id
        const formationId = id

        const response = await axios.post('http://localhost:3000/api/facture', { user: userId, formations: formationId })
        if (response) {
            response.data
            toast.success('Formation ajouter au facture avec success')
            router.push('/etudiant/factures')
        }else{
            toast.error("Une erreur s'est produite")
        }

    }

    useEffect(() => {
        fetchFormation()
        fetchFormationSimilaire()
    }, [])

    return (
        <>
            {formation && session ? (
                <>
                    <div className='relative top-0 left-0 right-0'>
                        <div className='w-full  bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800  shadow-md shadow-slate-500 py-3 ' >
                            <div className='w-11/12 md:w-9/12 mx-auto py-3  '>
                                <div className='flex justify-between  '>
                                    <div className='flex flex-col justify-between '>
                                        <div className='flex justify-start items-center' >
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
                                            <div>
                                                <p className='text-slate-50  '>Catégorie</p>
                                                <p className='text-slate-50 font-semibold '>{formation.category.categorie}</p>
                                            </div>

                                        </div>
                                        <div className='mt-3'>
                                            <h1 className='text-white text-xl  md:text-2xl mr-5 font-bold'>{formation.formation}</h1>
                                        </div>
                                    </div>


                                    <div className='flex flex-col justify-between ml-5 '>
                                    
                                        <div className='flex justify-between items-center'> 
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
                                <div className='mr-5 '>
                                    <div>
                                        <video className="rounded-sm w-full h-[450px] md:w-[900px] md:h-[500px] object-cover mb-5" controls  >
                                            <source src={formation.lienVideoDemo} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </div>



                                <div className="  flex flex-col mt-7  mb-2 text-gray-700 bg-slate-50 shadow-md bg-clip-border rounded-xl w-[300px] ">
                                    <div
                                        className="   mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">

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
                                        <div className='flex justify-between items-center'>
                                            <h5 className="block mb-2 font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-gray-700">Prix ar </h5>
                                            <p className='block mb-2 font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-gray-500'>Ar {formation.prix}</p>
                                        </div>
                                        <Separator className="" />
                                        <div className='flex justify-between items-center'>
                                            <h5 className="block mb-2 font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-gray-700">Inscrits</h5>
                                            <p className='block mb-2 font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-gray-500'>{formation.inscrits}</p>
                                        </div>
                                        <Separator className="" />
                                    </div>
                                    <div className="p-6 pt-0">
                                        <button
                                            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-700 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full"
                                            type="button"
                                            onClick={() => setShowModal(true)}
                                        >
                                            S{"'"}inscrire à cette formation
                                        </button>
                                    </div>
                                </div>

                            </div>
                            <div className='w-11/12  md:w-9/12  mx-auto  '>
                                <div className='  '>
                                    <div className=' '>
                                        <h1 className='text-blue-800 text-2xl font-semibold my-2 '>Cible</h1>
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
                    {showModal && (
                        <div className="fixed inset-x-0 top-0 z-50 overflow-y-auto">
                            <div className="flex items-start justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                                    <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
                                </div>

                                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                    <div className="bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800  px-4 py-4 sm:px-6">

                                        <div className='flex justify-center items-center' >
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
                                            <h3 className=" text-lg md:text-xl   font-semibold text-slate-100"> {formation.formation}</h3>

                                        </div>

                                    </div>
                                    <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <div className="flex items-start justify-center ">
                                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                <div className=" ">
                                                    <div className='flex flex-col justify-center items-center'>
                                                        <p className='text-2xl md:text-3xl text-blue-700 font-semibold text-center'>034 20 347 68</p>
                                                        <div className='flex flex-col justify-start mt-3'>
                                                            <p className='text-gray-900 '>Pour confirmer votre inscription, veuillez envoyer le frais de formation au numéro ci-dessus :</p>
                                                            <hr className='my-3' />
                                                            <p className='text-gray-900 font-semibold'>Mettez votre adresse Email en référence</p>
                                                            <p className='text-gray-900 '>Votre adresse Email est : <span className='font-bold text-black'>{session.user?.email}</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 py-3 px-6 flex flex-row-reverse">
                                        <button
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                            className="ml-3 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                                        >
                                            <div className='flex items-center justify-center'>
                                                {/* <FaXmark className='mr-3' /> */}
                                                <p>
                                                    Annuler
                                                </p>
                                            </div>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={makeFacture}
                                            className=" inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-700 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                                        >
                                            <div className='flex items-center justify-center'>
                                                <FaClipboardList className='mr-3 ' />
                                                <p>
                                                    Facturer cette formation
                                                </p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )}
                </>
            ) :
                <div className='h-[50vh]'>
                    <Loading />
                </div>
            }


        </>



    )
}

export default Formation
