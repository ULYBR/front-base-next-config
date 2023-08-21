import { NextRequest, NextResponse } from 'next/server'

const AUTH_PAGES: string[] = ['/login', '/register']

const isAuthPages = (url: string): boolean =>
  AUTH_PAGES.some((page) => page.startsWith(url))

export async function middleware(request: NextRequest): Promise<NextResponse> {
  const { url, nextUrl, cookies } = request;
  const token = cookies.get("user_token");
  const isAuthenticated = !!token;
  const isAuthPageRequested = isAuthPages(nextUrl.pathname)

  if (isAuthPageRequested) {
    if (isAuthenticated) {
      const response = NextResponse.redirect(new URL(`/dashboard`, url));
      return response;
    }
    const response = NextResponse.next();
    response.cookies.delete("user_token"); // inexistente, invalido, ou expirado
    return response;
  }

  // qualquer outra página configurada no middlware
  if (!isAuthenticated) {
    const searchParams = new URLSearchParams(nextUrl.searchParams);
    searchParams.set("next", nextUrl.pathname);

    const response = NextResponse.redirect(
      new URL(`/login?${searchParams}`, url)
    );
    response.cookies.delete("user_token");
    return response;
  }


  return NextResponse.next();
}
export const config = {
  matcher: ['/', '/dashboard', '/register', '/login'],
}
