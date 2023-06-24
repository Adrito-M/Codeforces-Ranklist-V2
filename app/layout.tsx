import '@/app/globals.css'
import { Montserrat } from 'next/font/google'
import Provider from './components/provider'
import { Analytics } from '@vercel/analytics/react'
import { Footer } from '@/components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Codeforces Ranklist',
  description: 'Codeforces Ranklist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <Provider>
        <body
          className={`${montserrat.className} bg-gradient-to-r from-bgblueleft to-bgblueright`}
        >
          {children}
          <Footer />
        </body>
      </Provider>
      <Analytics />
    </html>
  )
}
