import { axiosInstance } from '../axios'
import {
  Agency,
  CreateAgency,
  GetAllAgencies,
  GetAllPublicAgencies,
} from '../model/Agency.types'
import {
  Client,
  ClientCreate,
  GetAllClients,
  GetAllPublicClients,
} from '../model/Client.types'
import {
  Login,
  GetAllUser,
  User,
  CreateUser,
  UpdateUser,
} from '../model/User.types'

export const api = axiosInstance()

export function loginUser(email: string, password: string) {
  return api.post<Login>('/auth/login', { email, password })
}
export function createUser(data: CreateUser) {
  return api.post<CreateUser>('/users', data)
}

export function getCurrentUser() {
  return api.get<User>('/users/me')
}

export function getAllUser(page: number, limit: number) {
  return api.get<GetAllUser>('/users', { params: { page, limit } })
}

export function updateUser(data: UpdateUser) {
  return api.put<UpdateUser>('/users/me', data)
}

export function deleteUser() {
  return api.delete('/users/me')
}

// Client

export function getAllClients(page: number, limit: number) {
  return api.get<GetAllClients>('/clients', {
    params: {
      page,
      limit,
    },
  })
}

export function createClient(data: ClientCreate) {
  return api.post<ClientCreate>('/clients', data)
}

export function getAllPublicClients() {
  return api.get<GetAllPublicClients>('/clients/all')
}

export function getClientById(clientId: string) {
  return api.get<Client>(`/clients/${clientId}`)
}

export function updateClient(clientId: string, data: Client) {
  return api.put<Client>(`/clients/${clientId}`, data)
}
export function deleteClient(clientId: string) {
  return api.delete(`/clients/${clientId}`)
}

// Agency

export function getAllPublicAgencies() {
  return api.get<GetAllPublicAgencies>('/agencies/all')
}

export function createAgency(data: CreateAgency) {
  return api.post<CreateAgency>('/agencies', data)
}

export function getAllAgencies(page: number, limit: number) {
  return api.get<GetAllAgencies>('/agencies/all', {
    params: {
      page,
      limit,
    },
  })
}

export function deleteAgency(agencyId: string) {
  return api.delete(`/agencies/${agencyId}`)
}

export function updateAgency(agencyId: string, data: Agency) {
  return api.put<Agency>(`/agencies/${agencyId}`, data)
}
