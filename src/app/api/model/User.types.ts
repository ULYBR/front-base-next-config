import { Agency } from './Agency.types'
import { Client } from './Client.types'
export type Login = {
  token: string
}

export type GetAllUser = {
  users: User[]
  totalUsersCount: number
  totalPages: number
}

export type User = {
  id: string
  name: string
  email: string
  createdAt: string
  updatedAt: string
  role: string
  agency: Agency
  customers: Client[]
}

export type UpdateUser = {
  name: string
  email: string
  password: string
  agencyId: string
  customers: string
}

export type CreateUser = {
  name: string
  email: string
  password: string
  agencyId: string
  customers: string
}
