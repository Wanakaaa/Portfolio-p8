import '../styles/globals.css'
import Header from '../components/header/Header'
import ScrollToTop from '../components/ScrollToTop'

export const metadata = {
  title: 'Mon Portfolio - Développeuse Web',
  description: 'Bienvenue sur mon portfolio, où je présente mes projets et mes compétences en développement web.',
  keywords: ['Développement Web', 'Portfolio', 'React', 'Next.js', 'Node.js', 'JavaScript'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
