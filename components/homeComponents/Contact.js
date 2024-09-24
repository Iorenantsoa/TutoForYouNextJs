import React from 'react'
import { FaEnvelope, FaFacebookSquare, FaLinkedin, FaPhoneAlt, FaTwitterSquare, FaYoutube } from "react-icons/fa";

function Contact() {
    return (
        <div className='w-full bg-slate-900 ' id='contact'>
            <div className='w-11/12 md:w-4/6 mx-auto py-6 flex justify-between flex-wrap'>
                <div className="flex flex-col my-5 mx-2">
                    <h2 className='text-xl font-semibold text-slate-100 '>RÉSEAUX SOCIAUX</h2>
                    <div className='flex justify-between mt-3'>
                        {/* <div> */}
                        <FaFacebookSquare className='text-white text-xl' />
                        {/* </div> */}
                        {/* <div> */}
                        <FaLinkedin className='text-white text-xl' />
                        {/* </div> */}
                        {/* <div> */}
                        <FaTwitterSquare className='text-white text-xl' />
                        {/* </div> */}
                        {/* <div>  */}
                        <FaYoutube className='text-white text-xl' />
                        {/* </div> */}
                    </div>
                </div>
                <div className="flex flex-col my-5 mx-2 ">
                    <h2 className='text-xl font-semibold text-slate-100'>CONTACTS</h2>
                    <div className='flex justify-between mt-3 items-center'>
                        <FaEnvelope className='text-white mr-3' /> <span className='text-slate-300 font-light '>admin@gmail.com</span>
                    </div>
                    <div className='flex justify-between mt-3 items-center'>
                        <FaPhoneAlt className='text-white mr-3' /> <span className='text-slate-300 font-light '>+261 34 20 347 68</span>
                    </div>
                </div>
                <div className="flex flex-col items-center my-5 mx-2 basis-11/12 md:basis-1/4">
                    <h2 className='text-xl font-semibold text-slate-100'>NOUS ÉCRIRE</h2>
                    <input type="text" id="name" aria-describedby="nameDescription" className=" my-2  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Votre nom" />
                    <input type="email" id="email" aria-describedby="emaildescription" className="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="exemple@email.com" />
                    <input type="text" id="message" aria-describedby="emaildescription" className="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[50px]" placeholder="Votre message" />
                    <button className='relative inline-flex mx-auto items-center justify-center w-full p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-slate-50 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-slate-200 dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800'>
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75   dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Envoyer
                        </span>
                    </button>
                </div>

            </div>
             
        </div>
    )
}

export default Contact
