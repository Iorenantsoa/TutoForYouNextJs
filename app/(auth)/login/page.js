"use client"
import Link from 'next/link'

import { signIn, useSession } from 'next-auth/react';
import React from 'react'
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useEffect } from 'react';

function Login() {

  const [info, setInfo] = useState({ email: "", password: "" })
  const [error, setError] = useState({})
  const [pending, setPending] = useState(false)
  const router = useRouter()


  const {data:session , status:sessionStatus} = useSession() 
  
  useEffect(()=>{
    if(sessionStatus ==="authenticated"){
      router.push('/etudiant/tableau-de-bord')
    }
  } ,  [sessionStatus , router])


  const handleInput = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!info.email || !info.password) {
      setError({ message: "Tous les champs sont obligatoires", success: false })
      toast.error("Tous les champs sont obligatoires")
      return
    }

    try {
      setPending(true)
      const res = await signIn("credentials", {
        email: info.email,
        password: info.password,
        redirect: false
      })

      if (res.error) {
        setError({ message: "Mauvais login ou mot de passe", success: false })
        toast.error("Mauvais login ou mot de passe") 
        setPending(false)
        return
      }
      toast.success('loggin successfully')
      router.push("/dashboard")

    } catch (error) {
      setPending(false)
      setError({ message: "Une erreur s\'est produite ", success: false })
      toast.error("Une erreur s\'est produite ")
    }
  }


  return (
    <div className='relative top-0 left-0 right-0'>
      <div className='w-full  bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800  shadow-lg shadow-slate-500   relative ' style={{ minHeight: "30vh" }}>
      </div>


      <div className='h-full w-full   bg-slate-50 ' style={{ minHeight: "70vh" }}>
        <div className='relative -top-28 w-11/12 md:w-1/4 mx-auto'>
          <div className='max-w-sm  mx-auto'>
            <h1 className=" text-transparent bg-clip-text bg-gradient-to-r from-white  to-orange-500 text-center   font-serif font-bold text-2xl py-3">{'<'}TutoForYou{'/>'}</h1>
            <div className=' bg-slate-50 shadow-md py-4  rounded'>
              <form className='mx-5' onSubmit={handleSubmit} >
                <div className='mb-3'>
                  <h2 className=' text-blue-800 text-xl md:text-2xl font-bold  '>Se connecter</h2>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input type="email" name="email" id="email" className="block py-2.5 px-0  w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => handleInput(e)} />
                  <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => handleInput(e)} />
                  <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mot de passe</label>
                </div>


                {pending ?
                  ( 
                    <button disabled type="button" className= "text-white bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  w-full   px-5 py-2.5 text-center ">
                      <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                      </svg>
                      Chargement...
                    </button>
                  )
                  :
                  (
                    <button type="submit" className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  w-full   px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Se connecter</button>
                  ) 
                }
                



              </form>
            </div>

            <div className='flex justify-center '>
              <span className=' text-gray-900 mt-3 text-sm  '>Vous n’avez pas de compte ? <Link href="/register" className='text-orange-500 font-semibold'>S’inscrire ici !</Link></span>
            </div>

          </div>

        </div>


      </div>

    </div>
  )
}

export default Login
