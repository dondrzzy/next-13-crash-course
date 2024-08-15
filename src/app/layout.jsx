import Header from '@/app/components/Header';
import { Poppins } from 'next/font/google';
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"]
})

export const metadata = {
  title: 'Stack Tech',
  description: 'WebDev Next JS App',
  keywords: "web development, nextjs, web design"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ poppins.className }>
        <Header />
        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  )
}
