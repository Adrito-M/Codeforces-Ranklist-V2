import { User } from '@/models'
import NextAuth, { getServerSession } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

import { z } from 'zod'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/',
  },
  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     const isAllowedToSignIn = true
  //     if (isAllowedToSignIn) {
  //       return true
  //     } else {
  //       // Return false to display a default error message
  //       return false
  //       // Or you can return a URL to redirect to:
  //       // return '/unauthorized'
  //     }
  //   },
  // },
}

const handler = NextAuth({
  ...authOptions,
  callbacks: {
    async signIn({ user }) {
      if (!user.email || !user.name) return false
      const query = await User.findOne({ email: user.email })
      if (query) return true
      const info = user.email.split('@')[0].split('.').pop()!
      await User.create({
        name: user.name,
        email: user.email,
        username: [],
        dept: info.substring(0, 3),
        adm_yr: 2000 + parseInt(info.substring(3)),
      })
      return true
    },
  },
})

const sessionSchema = z.object({
  user: z.object({
    name: z.string(),
    email: z.string(),
    image: z.string(),
  }),
})

export const getAuthServerSession = async () => {
  const session = await getServerSession(authOptions)
  if (!session) return null
  else if (sessionSchema.safeParse(session).success)
    return sessionSchema.parse(session)
  else return null
}

export { handler as GET, handler as POST }
