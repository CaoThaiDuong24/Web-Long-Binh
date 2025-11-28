import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Đại Hội LBBA - Hội Doanh Nghiệp Phường Long Bình',
  description: 'Đại Hội Thành Lập Hội Doanh Nghiệp Phường Long Bình - 29.11.2025',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  )
}
