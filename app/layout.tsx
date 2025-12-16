import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Civicera - Civic Transparency Platform',
  description: 'A modern platform for public meetings, agendas, and civic transparency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
