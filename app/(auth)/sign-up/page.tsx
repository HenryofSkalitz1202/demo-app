import SignUpForm from '@/components/form/SignUpForm'
import Link from 'next/link'
import React from 'react'

const SignUp = () => {
  return (
    <div className='w-full'>
      <SignUpForm />
    </div>
    // <main>
    //     <div className="w-full h-screen flex justify-center items-center">
    //         <aside className="bg-slate-600 w-full max-w-md rounded-xl bg-opacity-20 shadow-lg shadow-black">
    //             <h1 className="text-center text-gray-300 font-light text-4xl bg-teal-700 rounded-t-xl m-0 py-4">Sign Up</h1>
    //             <form className="p-6">
    //                 <input type="text" name="" placeholder="Username" className="py-2 px-3 w-full text-white text-lg font-light outline-none"/>
    //                 <input type="email" name="" placeholder="E-mail" className="py-2 px-3 w-full text-white text-lg font-light outline-none mt-3"/>
    //                 <input type="text" name="" placeholder="Password" className="py-2 px-3 w-full text-white text-lg font-light outline-none mt-3"/>
    //                 <input type="text" name="" placeholder="Confirm Password" className="py-2 px-3 w-full text-white text-lg font-light outline-none mt-3"/>
    //                 <div className="flex mt-5 justify-between items-center">
    //                     <Link href="/sign-in" className="cursor-pointer transition hover:text-slate-100">Already Registered?</Link>
    //                     <button type="submit" className="bg-slate-900 text-white rounded-xl font-medium py-2 px-8 transition hover:text-slate-400">Sign Up</button>
    //                 </div>
    //             </form>
    //         </aside>
    //     </div>
    // </main>
  )
}

export default SignUp