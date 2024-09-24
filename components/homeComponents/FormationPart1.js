import Image from 'next/image'
import React from 'react'
import imgDev1 from '../../public/images/home/dev1.jpg'
import imgDev2 from '../../public/images/home/dev2.jpg'
import imgDev3 from '../../public/images/home/dev3.jpg'
import imgDev4 from '../../public/images/home/dev4.jpg'

function FormationPart1() {



    return (
        <div className='bg-slate-50 w-full'>
            <div className='w-4/5 md:w-4/6 mx-auto py-6'>
                <div className='md:columns-2 sm:columns-1 my-5'>
                    <div className='mx-4 my-auto'>
                        <h1 className='text-blue-700 text-3xl font-bold '>Formation pratique</h1>
                        <p className='text-slate-700 mt-2'>{'<'}TutoForYou{'/>'} vous offre les meilleures des formations. Les leçons sont expliquées point par point, détail par détail, étape par étape pour que vous puissiez bien assimiler. Les cours sont sous format vidéo facilement téléchargeable et les explications sont en Malagasy. Chaque leçon est suivie d’un exercice qui sera corrigé par votre formateur. Tous les outils nécessaires pour les travaux pratiques (logiciels, images, fichiers etc.) sont fournis. Un certificat est délivré après chaque formation.</p>
                    </div>
                    <div className='mx-4'>
                        <Image src={imgDev1} placeholder="blur" className='w-full h-[200px] mx-auto my-auto rounded-lg  shadow-md shadow-stone-300 object-cover' alt='image' />
                    </div>
                </div>

                <div className='md:columns-2 sm:columns-1 my-5'>
                    <div className='mx-4  mt-5 '>
                        <Image src={imgDev2} placeholder="blur" className='w-full h-[200px] mx-auto my-auto rounded-lg  shadow-md shadow-stone-300 object-cover' alt='image' />
                    </div>
                    <div className='mx-4 my-auto'>
                        <h1 className='text-blue-700 text-3xl font-bold  mt-5'>À votre rythme</h1>
                        <p className='text-slate-700 mt-2'>Vous avez choisi de vous former en ligne car vous n’avez pas le temps pour une formation en présentiel. Sur {'<'}TutoForYou{'/>'}, les horaires de cours sont flexibles ! Vous pouvez travailler quand vous voulez, où vous voulez et vous progressez à votre rythme.</p>
                    </div>
                </div>
                <div className='md:columns-2 sm:columns-1 my-5'>
                    <div className='mx-4 my-auto'>
                        <h1 className='text-blue-700 text-3xl font-bold  mt-5' >Avec suivi individuel</h1>
                        <p className='text-slate-700 my-auto mt-2'>Vous bénéficiez d’un accompagnement individualisé. Votre coach suit votre progression, vous donne des devoirs et les corrige. Vous pouvez échanger à tout moment avec lui via le système de messagerie de la plateforme ou bien sur son compte Facebook.</p>
                    </div>
                    <div className='mx-4'>
                        <Image src={imgDev4} placeholder="blur"  className='w-full h-[200px] mx-auto my-auto rounded-lg  shadow-md shadow-stone-300 object-cover' alt='image' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormationPart1
