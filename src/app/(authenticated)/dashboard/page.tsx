'use client'

import { HiLogout } from 'react-icons/hi'
import { useAuth } from '../../contexts/AuthContext'

export default function Dashboard() {
  const { signOut } = useAuth()
  const handleLogout = () => {
    signOut()
  }

  return (
    <>
       <button
          onClick={handleLogout}
          className="bg-black text-white p-2 rounded-md"
        >
          <HiLogout />
        </button>
    </>
  )
}
