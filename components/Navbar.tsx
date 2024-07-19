import Link from 'next/link'
import React from 'react'
import { Button, buttonVariants } from './ui/button'
import { House } from 'lucide-react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { signOut } from 'next-auth/react'
import UserAccountNav from './UserAccountNav'

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className='bg-slate-100 py-2 border-m-black fixed w-full z-10 top-0'>
        <div className='container flex items-center justify-between text-black'>
            <Link href="/"><House /></Link>
            {session?.user ? (
              <UserAccountNav/>
            ) : <Link className={buttonVariants()} href="/sign-in">Sign in</Link>}
        </div>
    </div>
  )
}

export default Navbar