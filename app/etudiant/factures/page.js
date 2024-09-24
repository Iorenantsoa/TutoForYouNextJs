"use client"
import Image from 'next/image'
import React from 'react'
import { format } from 'date-fns';
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import Loading from '@/app/loading'
import { toast } from 'react-toastify';
import axios from 'axios';

function Factures() {

  const { data: session, status: sessionStatus } = useSession() 

  const [facture, setFacture] = useState(null)
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


  const fetchMyFacture = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/facture/myFacture/${session?.user?.id}`, {
        method: "GET"
      });
      if (!response.ok) {
        throw new Error("Une erreur s'est produite lors de la récupération des données");
      }
      const data = await response.json();
      // console.log(data)
      setFacture(data);
    } catch (error) {
      console.log(error);
    }

  }

  const handleDeleteFacture = async (factureId) => {
    try {
      await axios.delete(`http://localhost:3000/api/facture/deleteFacture/${factureId}`)
      toast.success("Facture supprimé avec success")
    } catch (error) {
      console.log(error)
      toast.error("Une erreur s'est produite lors de la récupération des données");
    }
  }

  useEffect(() => {
    fetchFormations();
    if (session?.user) {
      fetchMyFacture()
    }

  }, [session])

  return (
    <>
      {
        sessionStatus !== "loading" ? (
          <div className='w-full mb-10'>
            <div className='w-11/12 md:w-9/12  mx-auto '>
              <div className='flex justify-between'>
                <div className=' w-1/4 min-w-[275px]  hidden md:block mt-5  mr-3'>
                  <h1 className='text-blue-700 text-lg font-semibold mb-5 '>Autres formations :</h1>


                  {
                    formations ? formations.map(formation => (
                      <div key={formation._id} className='w-full min-h-[110px] flex justify-between bg-slate-100 shadow-md my-3 rounded-md'>
                        <div className='basis-2/5  '>
                          <Image src={`http://localhost:3000${formation.ImgPoster}`}
                            alt='img'
                            width={800}
                            height={800}
                            placeholder='blur'
                            className='min-w-full min-h-full object-cover rounded-tl-md rounded-bl-md'
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAwAB/5+C6OMAAAAASUVORK5CYII="
                          />
                        </div>
                        <div className='basis-3/5 flex flex-col  justify-between py-3 px-2'>
                          <h1 className='text-gray-600 font-semibold  text-sm'>{formation.category.categorie}</h1>
                          <h1 className='text-gray-700 font-bold  text-md'>{formation.formation}</h1>
                          <h1 className='text-gray-600 font-semibold text-sm'>{formation.formateur}</h1>
                        </div>
                      </div>

                    )) : (
                      <div className='h-full w-full flex justify-start items-center'>
                        <Loading />
                      </div>
                    )
                  }





                </div>
                <div className=' flex-grow w-full mx-auto'>
                  <h1 className='text-blue-700 text-2xl font-semibold my-5 '>Factures</h1>
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    {
                      facture && facture.length > 0 ? (
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <thead className="text-xs text-slate-100 uppercase bg-blue-600 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                              <th scope="col" className="px-6 py-3">
                                Formations
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Montant
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Date
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Etat
                              </th>
                              <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody>

                            {facture.map(facture => (
                              <tr key={facture._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  {facture.formations.formation}
                                </th>
                                <td className="px-6 py-4">
                                  {facture.formations.prix} Ar
                                </td>
                                <td className="px-6 py-4">
                                  {format(new Date(facture.createdAt), 'dd-MM-yyyy')}
                                </td>
                                <td className="px-6 py-4">
                                  {
                                    facture.etat == "Non payée" ?
                                      (
                                        <p className='font-semibold text-red-500'>{facture.etat}</p>
                                      )
                                      :
                                      (
                                        <p className='font-semibold text-green-500'>{facture.etat}</p>
                                      )
                                  }

                                </td>
                                <td className="px-6 py-4 text-right">
                                  <a onClick={() => handleDeleteFacture(facture._id)} className="font-medium text-red-600  hover:underline">Suppr</a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ) : (
                        <div className='flex justify-center items-start my-5'>
                          <p className='text-red-600 font-semibold text-lg md:text-xl'>Vous n{"'"}avez pas encore des factures</p>
                        </div>
                      )
                    }

                  </div>
                </div>
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

export default Factures
