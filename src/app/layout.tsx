import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { AuthProvider } from './contexts/AuthContext'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'HOME',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <AuthProvider>
          <Theme>{children}</Theme>
        </AuthProvider>
      </body>
    </html>
  )
}
