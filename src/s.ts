// import { NextResponse } from 'next/server'
// import { useAuth } from '../src/app/contexts/AuthContext'
// import { parseCookies } from 'nookies'

// const AUTH_PAGES = ['/login', '/register']

// const isAuthPages = (url: any) =>
//   AUTH_PAGES.some((page) => page.startsWith(url))

// export async function middleware(req: any) {
//   const { url, nextUrl } = req
//   const cookies = parseCookies(req)
//   const { user_token: token } = cookies

//   const hasVerifiedToken = token == (await cookies.user_token)
//   const isAuthPageRequested = isAuthPages(nextUrl.pathname)

//   // Use o contexto de autenticação para verificar se o usuário está autenticado
//   // const { user } = useAuth()

//   if (isAuthPageRequested) {
//     if (!hasVerifiedToken) {
//       const response = NextResponse.next()
//       response.cookies.delete('use_token')
//       return response
//     }

//     const response = NextResponse.redirect(new URL('/dashboard', url))
//     return response
//   }

//   if (!hasVerifiedToken) {
//     const searchParams = new URLSearchParams(nextUrl.searchParams)
//     searchParams.set('next', nextUrl.pathname)

//     const response = NextResponse.redirect(
//       new URL(`/login?${searchParams}`, url)
//     )
//     response.cookies.delete('user_token')

//     return response
//   }
//   // if (user && user.role === 'ADMIN') {
//   //   const response = NextResponse.redirect(new URL(`/admin`, nextUrl.href))
//   //   return response
//   // } else {
//   //   const response = NextResponse.redirect(new URL(`/dashboard`, nextUrl.href))
//   //   return response
//   // }
// }
// export const config = {
//   matcher: ['/', '/admin:path*', '/dashboard/:path*'],
// }
