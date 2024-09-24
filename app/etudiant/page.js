"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

function Etudiant() {
  const router = useRouter() 
  const {data:session , status:sessionStatus} = useSession() 
  
  useEffect(()=>{
    if(sessionStatus ==="authenticated"){
      router.push('/etudiant/tableau-de-bord')
    }
  } ,  [sessionStatus , router])


  return (
    <div className='w-full my-auto flex justify-center items-center  '>
      loading...
    </div>
  )
}

export default Etudiant
