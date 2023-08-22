import { User } from '../model/User.types'

export type Agency = {
  id: string
  name: string
  cnpj: string
  createdAt: string
  updatedAt: string
}

export interface GetAllPublicAgencies {
  id: string
  name: string
}

export type CreateAgency = {
  name: string
  cnpj: string
  users: User
  Client: string
}

export type GetAllAgencies = {
  agencies: Agency[]
  totalAgenciesCount: number
  totalPages: number
}
