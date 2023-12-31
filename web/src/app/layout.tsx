import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjure = BaiJamjuree({ subsets: ['latin'],weight:'700', variable: '--font-bai-jamjuree' })

export const metadata: Metadata = {
  title: 'NLW Spacetime',
  description: 'Uma cápsula do tempo construida com React, Next.Js, Tailwind ...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body 
    className=
    {`${roboto.variable} ${baiJamjure.variable} bg-gray-900 text-gray-100 font-sans`}>{children}</body>
    </html>
  )
}
