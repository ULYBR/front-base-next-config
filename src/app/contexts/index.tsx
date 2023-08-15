import { AuthProvider } from './AuthContext'
import { ReactNode } from 'react'
type AppProviderProps = {
  children: ReactNode
}
export function AppProvider({ children }: AppProviderProps) {
  return <AuthProvider>{children}</AuthProvider>
}
