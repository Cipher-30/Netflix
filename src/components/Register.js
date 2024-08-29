import React from 'react'

const Register = () => {
  return (
    <div>
        <section className='mt-4'> 
            <h2 className='font-semibold'>Ready to watch? Enter your email to create or restart your membership.</h2>
            <div className='flex  justify-center items-center flex-wrap mx-auto'>
                <input type='email'  className='w-[60%] border border-white mt-4 bg-transparent px-6 py-2 '
                placeholder='Email Address'/>
                <button className='ml-4 mt-4 text-white text-xl bg-red-600 font-semibold px-6 py-3 rounded-sm'>Get Started </button>
            </div>
        </section>
    </div>
  )
}

export default Register