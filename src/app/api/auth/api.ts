import { axiosInstance } from '../axios'

export const api = axiosInstance()

export function loginUser(email: string, password: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return api.post<any>('/auth/login', { email, password })
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createUser(data: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return api.post<any>('/users', data)
}

export function getCurrentUser() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return api.get<any>('/users/me')
}

export function getAllUser(page: number, limit: number) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return api.get<any>('/users', { params: { page, limit } })
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function updateUser(data: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return api.put<any>('/users/me', data)
}

export function deleteUser() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return api.delete<any>('/users/me')
}

// Client

export function getAllClients(page: number, limit: number) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return api.get<any>('/clients', {
    params: {
      page,
      limit,
    },
  })
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createClient(data: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return api.post<any>('/clients', data)
}

export function getAllPublicClients() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return api.get<any>('/clients/all')
}

export function getClientById(clientId: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return api.get<any>(`/clients/${clientId}`)
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function updateClient(clientId: string, data: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return api.put<any>(`/clients/${clientId}`, data)
}

export function deleteClient(clientId: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return api.delete<any>(`/clients/${clientId}`)
}

// Agency

export function getAllPublicAgencies() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return api.get<any>('/agencies/all')
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createAgency(data: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return api.post<any>('/agencies', data)
}

export function getAllAgencies(page: number, limit: number) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return api.get<any>('/agencies/all', {
    params: {
      page,
      limit,
    },
  })
}

export function deleteAgency(agencyId: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return api.delete<any>(`/agencies/${agencyId}`)
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function updateAgency(agencyId: string, data: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return api.put<any>(`/agencies/${agencyId}`, data)
}
