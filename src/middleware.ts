import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  if (!request.cookies.has("csrf_token")) {
    response.cookies.set("csrf_token", crypto.randomUUID(), {
      sameSite: "strict",
      path: "/",
      secure: process.env.NODE_ENV === "production",
    })
  }

  return response
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.svg|brand/).*)"],
}
