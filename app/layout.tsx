export const metadata = {
  title: 'ALAI Network',
  description: 'Rebuilt. Secured. Ready to Earn.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        padding: 0,
        fontFamily: 'sans-serif',
        backgroundImage: 'url("/bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        minHeight: '100vh'
      }}>
        {children}
      </body>
    </html>
  )
}