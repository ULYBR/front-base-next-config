'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { loginUser, getCurrentUser } from '../api/auth/api'

import { destroyCookie, parseCookies, setCookie } from 'nookies'
import { useRouter } from 'next/navigation'

interface User {
  id: string
  email: string
  name: string
  role: string
  password: string
  agencyId: string
  customers: string
}

interface AuthContextData {
  user: User | null
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => void
  isAuthenticated: boolean
}
const AuthContext = createContext<AuthContextData | undefined>(undefined)
type AuthProviderProps = {
  children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()
  const isAuthenticated = !!user

  // useEffect(() => {
  //   async function fetchCurrentUser() {
  //     try {
  //       const response = await getCurrentUser()
  //       setUser(response.data)
  //     } catch (e) {
  //       console.error('Error ao buscar informações do Usuário :', e)
  //     }
  //   }

  //   fetchCurrentUser()
  // }, [])

  const signIn = async (email: string, password: string) => {
    try {
      const response = await loginUser(email, password)
      setUser(response.data.user)

      const token = response.data.token

      setCookie(undefined, 'user_token', token, {
        maxAge: 60 * 60 * 24 * 7, // Expiração de uma semana
        path: '/',
      })
      router.push('/dashboard')

      console.log(token)
    } catch (e) {
      console.error('Erro ao efetuar o login:', e)
    }
  }


  const signOut = () => {
    const cookies = parseCookies()
    setUser(null)
    destroyCookie(null, cookies.user_token)
    router.push('/login')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        isAuthenticated,
      }}
    >
      {children}{' '}
    </AuthContext.Provider>
  )
}
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an authProvider')
  }
  return context
}
