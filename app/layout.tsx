import './globals.css'
import { ReactNode } from 'react'
import { WagmiConfig } from 'wagmi'
import { config } from '../config/wagmi' // ✅ make sure this path is correct

export const metadata = {
  title: 'ALAI Network',
  description: 'Rebuilt. Secured. Ready to Earn.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: 'sans-serif',
          backgroundImage: 'url("/bg.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <WagmiConfig config={config}>
          {children}
        </WagmiConfig>
      </body>
    </html>
  )
}