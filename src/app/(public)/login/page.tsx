'use client'
import LoginForm from '@/app/components/LoginForm/LoginForm'
import { useAuth } from '@/app/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Login() {
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    const handleVerifyAuth = () => {
      if (isAuthenticated === true) {
        router.push('/dashboard')
      } else {
        router.push('/login')
      }
    }

    handleVerifyAuth()
  }, [isAuthenticated, router])

  return (
    <div>
      <LoginForm />
    </div>
  )
}
