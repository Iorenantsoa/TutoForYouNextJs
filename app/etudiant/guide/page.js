 
function Guide() {
   
  
  return (
    <div className='relative top-0 left-0 right-0'>
      <div className='w-full  bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800  shadow-md shadow-slate-500   relative ' style={{ minHeight: "15vh" }}>
        <div className='w-11/12 md:w-9/12 mx-auto py-6'>
          <h1 className='text-white text-3xl font-semibold  '>Guide</h1>
        </div>
      </div>
      <div className='w-full mb-10'>
        <div className='w-11/12 md:w-9/12 mx-auto py-6'>
          <div className=' mt-2'>
            <video className="rounded-sm w-full h-[450px] md:w-[850px] md:h-[500px] object-cover" controls  >
              <source src="/videoGuide/Guide.mp4" type="video/mp4" /> 
              Your browser does not support the video tag.
            </video> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guide

