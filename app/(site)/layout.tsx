export const metadata = {
  title: 'Shoebox Storage Solutions',
  description: 'Shoebox storage solutions based in York',
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
