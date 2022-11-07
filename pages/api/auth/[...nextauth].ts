import NextAuth, { NextAuthOptions } from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'

export const authOptions: NextAuthOptions = {
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID || '',
            clientSecret: process.env.DISCORD_CLIENT_SECRET || '',
            authorization: 'https://discord.com/api/oauth2/authorize?scope=identify+email+guilds'
        })
    ],
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async session({ session, token, user }) {
            session.accessToken = token.accessToken
            session.user.id = token.id
            return session
        },
        async jwt({ token, user, account, profile }) {
            if (account) {
                token.accessToken = account.access_token
                token.id = account.userId
            }
            return token
        }
    }
}

export default NextAuth(authOptions)