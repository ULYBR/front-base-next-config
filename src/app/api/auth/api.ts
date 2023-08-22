import { axiosInstance } from '../axios'
import { Agency, CreateAgency } from '../model/Agency.types'
import { Client, ClientCreate } from '../model/Client.types'
import { CreateUser, UpdateUser } from '../model/User.types'

export const api = axiosInstance()

export function loginUser(email: string, password: string) {
  const response = api.post('/auth/login', { email, password })

  return response
}
export function createUser(data: CreateUser) {
  const response = api.post('/users', data)
  return response
}

export function getCurrentUser() {
  const response = api.get('/users/me')
  return response
}

export function getAllUser(page: number, limit: number) {
  const response = api.get('/users', { params: { page, limit } })
  return response
}

export function updateUser(data: UpdateUser) {
  const response = api.put('/users/me', data)
  return response
}

export function deleteUser() {
  const response = api.delete('/users/me')
  return response
}

// Client

export function getAllClients(page: number, limit: number) {
  const response = api.get('/clients', {
    params: {
      page,
      limit,
    },
  })
  return response
}

export function createClient(data: ClientCreate) {
  const response = api.post('/clients', data)
  return response
}

export function getAllPublicClients() {
  const response = api.get('/clients/all')
  return response
}

export function getClientById(clientId: string) {
  const response = api.get<Client>(`/clients/${clientId}`)
  return response
}

export function updateClient(clientId: string, data: Client) {
  const response = api.put(`/clients/${clientId}`, data)
  return response
}
export function deleteClient(clientId: string) {
  const response = api.delete(`/clients/${clientId}`)
  return response
}

// Agency

export function getAllPublicAgencies() {
  const response = api.get('/agencies/all')
  return response
}

export function createAgency(data: CreateAgency) {
  const response = api.post('/agencies', data)
  return response
}

export function getAllAgencies(page: number, limit: number) {
  const response = api.get('/agencies/all', {
    params: {
      page,
      limit,
    },
  })
  return response
}

export function deleteAgency(agencyId: string) {
  const response = api.delete(`/agencies/${agencyId}`)
  return response
}

export function updateAgency(agencyId: string, data: Agency) {
  const response = api.put(`/agencies/${agencyId}`, data)
  return response
}
