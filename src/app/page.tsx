'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from './contexts/AuthContext'

export default function Page() {
  // const { isAuthenticated } = useAuth()
  // const router = useRouter()

  // useEffect(() => {
  //   const handleVerifyAuth = () => {
  //     if (isAuthenticated === true) {
  //       router.push('/dashboard')
  //     } else {
  //       router.push('/login')
  //     }
  //   }

  //   handleVerifyAuth() // Perform the initial authentication check
  // }, [isAuthenticated, router])

  return <div>Checking authentication...</div>
}
