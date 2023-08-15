'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '../../contexts/AuthContext'

export default function LoginForm() {
  const { signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await signIn(email, password)

      console.log('User autenticado')
    } catch (error) {
      console.error('Erro ao efetuar o login:', error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        className="w-full max-w-sm p-4 bg-white rounded shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded mt-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-800 text-white font-bold py-2 px-4 rounded hover:bg-purple-500"
        >
          Login
        </button>
        <p className="text-sm mt-4">
          Ainda não possui uma conta?{' '}
          <Link href={'/register'} className="text-purple-800  font-bold">
            Cadastre-se
          </Link>
        </p>
      </form>
    </div>
  )
}
