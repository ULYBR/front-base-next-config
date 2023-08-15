'use client'

import { FiSettings } from 'react-icons/fi'
import { AiFillBulb } from 'react-icons/ai'
import { HiLogout } from 'react-icons/hi'
import { IoLogoOctocat } from 'react-icons/io'
import Link from 'next/link'
import { useAuth } from '../../contexts/AuthContext'
import { destroyCookie } from 'nookies'

export default function Dashboard() {
  const { signOut } = useAuth()

  const handleLogout = () => {
    destroyCookie(null, 'user_token')

    signOut()
  }

  return (
    <>
      <nav
        className="flex p-2 mt-0.5 bg-white border-b border-gray-300 justify-between 
      shadow-2xl "
      >
        <div className="p-2 text-center shadow-lg rounded-sm bg-black">
          <AiFillBulb className="bg-black text-white" />
        </div>
        <div className="bg-purple-950 text-white p-2 rounded-md">
          <IoLogoOctocat />
        </div>
        <button
          onClick={handleLogout}
          className="bg-black text-white p-2 rounded-md"
        >
          <HiLogout />
        </button>
      </nav>

      <aside className="flex flex-col items-center w-16 h-screen py-8 overflow-y-auto bg-white border-r rtl:border-l rtl:border-r-0 dark:bg-gray-900 dark:border-gray-700">
        <nav className="flex flex-col space-y-6">
          <Link
            href={'#'}
            className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
          >
            agency
          </Link>

          <Link
            href={'#'}
            className="p-2 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg text-center justify-center dark:text-gray-200 dark:hover:bg-gray-800 "
          >
            client
          </Link>
          <Link
            href={'#'}
            className="p-2 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg text-center justify-center dark:text-gray-200 dark:hover:bg-gray-800 "
          >
            User
          </Link>
          <Link
            href={'#'}
            className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
          >
            <FiSettings />
          </Link>
        </nav>
      </aside>
    </>
  )
}
