// RegisterForm.tsx
'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  createUser,
  getAllPublicAgencies,
  getAllPublicClients,
} from '@/app/api/auth/api'
import { useRouter } from 'next/navigation'
import { GetAllPublicAgencies } from '@/app/api/model/Agency.types'
import { GetAllPublicClients } from '@/app/api/model/Client.types'

export default function RegisterForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [selectedAgency, setSelectedAgency] = useState('')
  const [selectedCustomer, setSelectedCustomer] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [agencies, setAgencies] = useState<GetAllPublicAgencies[]>([])
  const [customers, setCustomers] = useState<GetAllPublicClients[]>([])
  const router = useRouter()

  useEffect(() => {
    async function fetchAgenciesAndClients() {
      try {
        const agencyResponse = await getAllPublicAgencies()
        const clientResponse = await getAllPublicClients()

        setAgencies(agencyResponse.data)
        setCustomers(clientResponse.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchAgenciesAndClients()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Perform some validation checks
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.')
      return
    }

    try {
      const userData = {
        email,
        password,
        name: username,
        agencyId: selectedAgency,
        customers: selectedCustomer,
      }

      await createUser(userData)

      console.log('Usuário registrado com sucesso!')
      router.push('/dashboard')
    } catch (error) {
      console.error('Erro ao registrar o usuário:', error)
      setError(
        'Ocorreu um erro ao registrar o usuário. Por favor, tente novamente.'
      )
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
          <label htmlFor="username" className="block text-gray-700 font-bold">
            Nome:
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-3 py-2 border rounded mt-1"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700 font-bold"
          >
            Confirmar Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full px-3 py-2 border rounded mt-1"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="agency" className="block text-gray-700 font-bold">
            Agência:
          </label>
          <select
            id="agency"
            className="w-full px-3 py-2 border rounded mt-1"
            value={selectedAgency}
            onChange={(e) => setSelectedAgency(e.target.value)}
          >
            <option value="">Selecione uma agência</option>
            {agencies.map((agency) => (
              <option key={agency.id} value={agency.id}>
                {agency.name || 'Nome não Disponível'}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="customer" className="block text-gray-700 font-bold">
            Cliente:
          </label>
          <select
            id="customer"
            className="w-full px-3 py-2 border rounded mt-1"
            value={selectedCustomer}
            onChange={(e) => setSelectedCustomer(e.target.value)}
          >
            <option value="">Selecione um cliente</option>
            {customers.map((client) => (
              <option key={client.id} value={client.id}>
                {client.name || ' Cliente não Disponível'}
              </option>
            ))}
          </select>
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-purple-800 text-white font-bold py-2 px-4 rounded hover:bg-purple-500"
        >
          Register
        </button>
        <p className="text-sm mt-4">
          Já possui uma conta?{' '}
          <Link href="/login" className="text-purple-800 font-bold">
            Faça login
          </Link>
        </p>
      </form>
    </div>
  )
}
