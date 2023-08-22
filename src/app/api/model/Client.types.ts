import { User } from './User.types'

export type Client = {
  name: string
  agencyId: string
  users: User
}
export type ClientCreate = {
  name: string
  agencyId: string
  users: User
}
export interface GetAllPublicClients {
  id: string
  name: string
}

export type GetAllClients = {
  customers: Client[]
  totalCustomersCount: number
  totalPages: number
}
