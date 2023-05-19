import Link from 'next/link'
import './assets/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Learn Next.js Basic',
  description: 'it is a basic tutorial for learning Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{metadata.title}</title> 
    </head>
    <body className={inter.className}>
        <div>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/portofolio">Portofolio</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/users">Users Github</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>

        {children}

        {/* <div>
          footer
        </div> */}
    </body>

    </html>
  )
}
