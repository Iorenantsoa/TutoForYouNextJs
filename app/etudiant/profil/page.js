"use client"
import React, { useEffect, useState } from 'react'
import imgDev1 from '../../../public/images/home/exemplePDP.JPG'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { Separator } from '@/components/ui/separator'
import { toast } from 'react-toastify'


function Profil() {
  const { data: session, status: sessionStatus } = useSession()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('') 
  const [contact, setContact] = useState('')
  const [old_password, setOldPassword] = useState('')
  const [password, setPassword] = useState('')
  const [repeat_password, setRepeatPassword] = useState('')


  const [pendingBtn1, setPendingBtn1] = useState('true')
  const [pendingBtn2, setPendingBtn2] = useState('true')


  const fetchUser = async () => {


    const user = await fetch(`http://localhost:3000/api/user/findOneUser/${session.user?.id}`,
      {
        method: "GET"
      }
    ).then((res) => {
      if (res.ok) {
        const u = res.json()
        u.then(response => {
          setName(response.name)
          setEmail(response.email)
          setContact(response.contact)
          setPendingBtn1(false)
        })
      }
    }).catch(err => {
      setPendingBtn1(true)
      clg(err)
      return
    }).catch(err => {
      setPendingBtn1(true)
      clg(err)
      return
    })

  }


  useEffect(() => {
    if (session?.user) {
      fetchUser()
      setPendingBtn1(false)
      setPendingBtn2(false)
    }

  }, [session])


  const handleUpdtateInfo = async (e) => {
    e.preventDefault()
    setPendingBtn1(true)

    if (!name || !email || !contact) {
      toast.error("tous les champs sont obligatoires")
      setPendingBtn1(false)
      return
    }

    const userUpdate = await fetch(`http://localhost:3000/api/user/updateUser/${session.user?.id}`, {
      headers: {
        "content-type": "application/json"
      },
      method: "PUT",
      body: JSON.stringify({
        "name": name,
        "contact": contact
      })
    }).then(res => {
      if (res.ok) {
        toast.success("Mis à jour avec success")
        setPendingBtn1(false)
      } else {
        toast.error("Une erreur s'est produite")
        setPendingBtn1(false)
        return
      }

    }).catch((err) => {
      toast.error(err)
      setPendingBtn1(false)
      return
    })
  }
  const handleUpdatePassword = async (e) => {
    e.preventDefault()
    setPendingBtn2(true)

    if (!old_password || !repeat_password || !password) {
      toast.error("tous les champs sont obligatoires")
      setPendingBtn2(false)
      return
    }

    if (password !== repeat_password) {
      toast.error("Les deux mot de passes ne se correspondent pas")
      setPendingBtn2(false)
      return
    }

    const passwordUpdate = await fetch(`http://localhost:3000/api/user/changePassword/${session.user?.id}`, {
      headers: {
        "content-type": "application/json"
      },
      method: "PUT",
      body: JSON.stringify({
        "old_password": old_password,
        "password": password
      })
    }).then(res => {
      if (res.ok) {
        setOldPassword('')
        setRepeatPassword('')
        setPassword('')
        toast.success("Mis à jour avec success")
        setPendingBtn2(false)
      } else {
        res.json().then((response) => {
          toast.error(response.error)
          setPendingBtn2(false)
        })
        return
      }

    })

  }
  return (
    <div className='w-full mb-10'>
      <div className='w-11/12 md:w-4/5 mx-auto '>
        <div className='w-full mb-10'>
          <div className='w-11/12 md:w-4/5  mx-auto  '>
            <div className='flex justify-center flex-wrap '>
              <div className=' w-1/4 min-w-[175px] text-right mt-5  flex justify-center'>
               
                  <Image className="rounded-full w-36 h-36 md:w-40 md:h-40 object-cover " src={imgDev1} alt="Extra large avatar" />
                


              </div>
              <div className=' flex-grow mx-3'>
                <div>
                  <h1 className='text-blue-700 text-lg md:text-xl font-semibold  mt-5 mb-3'>Modifier vos informations générales</h1>

                  <div >
                    <form className="max-w-xl  ">
                      <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_name" id="floating_name" value={name} onChange={(e) => setName(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nom et Prénom</label>
                      </div>
                      <div className="relative z-0 w-full mb-5 group">
                        <input disabled type="email" name="floating_email" id="floating_email" value={email} onChange={(e) => setEmail(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Adresse email</label>
                      </div>
                      <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_contact" id="floating_contact" value={contact} onChange={(e) => setContact(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_contact" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contact</label>
                      </div>

                      {
                        pendingBtn1 ?
                          (<button disabled type="button" className="text-white bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  w-full   px-5 py-2.5 text-center ">
                            <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                            </svg>
                            Chargement...
                          </button>) : (
                            <button onClick={handleUpdtateInfo} className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm min-w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Modifier</button>
                          )
                      }



                      <Separator className="my-5   mx-auto" />
                    </form>

                  </div>
                </div>

                <div>
                  <h1 className='text-blue-700 text-lg md:text-xl font-semibold  mt-5 mb-3 '>Modifier votre mot de passe</h1>
                  <div>
                    <form className="max-w-xl  ">
                      <div className="relative z-0 w-full mb-5 group">
                        <input onChange={(e) => setOldPassword(e.target.value)} type="password" name="old_password" id="old_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="old_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ancien mot de passe</label>
                      </div>
                      <div className="relative z-0 w-full mb-5 group">
                        <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nouveau mot de passe</label>
                      </div>
                      <div className="relative z-0 w-full mb-5 group">
                        <input onChange={(e) => setRepeatPassword(e.target.value)} type="password" name="repeat_password" id="repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirmation du mot de passe</label>
                      </div>

                      {
                        pendingBtn2 ?
                          (<button disabled type="button" className="text-white bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  w-full   px-5 py-2.5 text-center ">
                            <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                            </svg>
                            Chargement...
                          </button>) : (
                            <button onClick={handleUpdatePassword} className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm min-w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Modifier</button>
                          )
                      }
                    </form>


                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Profil


