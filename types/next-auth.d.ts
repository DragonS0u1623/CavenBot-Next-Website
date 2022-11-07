import NextAuth, { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string | unknown
    } & DefaultSession['user']
    accessToken: string | unknown
  }
}