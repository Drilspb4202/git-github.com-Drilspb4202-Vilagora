import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

// SEO метаданные
export const metadata: Metadata = {
  metadataBase: new URL('https://vilagora-retreat.ru'),
  title: 'Ретрит в Карелии | Отдых на природе в Виллагоре | Экотуризм',
  description: 'Уникальный ретрит в Карелии с проживанием в Виллагоре. Отдых на природе, баня на дровах, чистейшее озеро Сямозеро, карельская кухня, экотуры и восстановление душевных сил.',
  generator: 'NextJS',
  applicationName: 'Ретрит Карелия',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'ретрит в Карелии', 'отдых в Карелии', 'Виллагора', 'Сямозеро', 'карельская природа', 
    'экотуризм', 'отдых на природе', 'баня на дровах', 'карельская кухня', 'медитация в лесу',
    'перезагрузка', 'восстановление сил', 'тишина', 'лесные прогулки', 'сбор ягод', 
    'рыбалка в Карелии', 'экотуры', 'ароматерапия', 'природа', 'отдых летом'
  ],
  authors: [{ name: 'Радмила Яковлева', url: 'https://t.me/RadmilaYakovleva' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Ретрит Карелия',
    description: 'Камерный ретрит в Виллагоре. Перезагрузка души в окружении хвойных лесов Карелии. Уникальный отдых на природе с баней, озером и эко-турами.',
    siteName: 'Ретрит Карелия',
    images: [{
      url: '/images/hero/hero.jpg',
      width: 1200,
      height: 630,
      alt: 'Ретрит в Карелии',
    }],
    locale: 'ru_RU',
    type: 'website',
    url: 'https://www.villagora.ru',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ретрит Карелия',
    description: 'Камерный ретрит в Виллагоре. Перезагрузка души в окружении хвойных лесов Карелии.',
    images: ['/images/hero/hero.jpg'],
    creator: '@RadmilaYakovleva',
  },
  alternates: {
    canonical: 'https://www.villagora.ru',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://www.villagora.ru" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Ссылки на превью страницы для мессенджеров */}
        <link rel="alternate" href="https://www.villagora.ru/preview" />
        <link rel="alternate" href="https://www.villagora.ru/share" />
        <link rel="alternate" href="https://www.villagora.ru/index-preview" />
        
        {/* Дополнительные мета-теги для корректного отображения при поделении ссылкой */}
        <meta property="og:title" content="Ретрит Карелия" />
        <meta property="og:description" content="Камерный ретрит в Виллагоре. Перезагрузка души в окружении хвойных лесов Карелии. Уникальный отдых на природе с баней, озером и эко-турами." />
        <meta property="og:image" content="https://www.villagora.ru/images/hero/hero.jpg" />
        <meta property="og:url" content="https://www.villagora.ru" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ретрит Карелия" />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Метатеги для Телеграма */}
        <meta name="application-name" content="Ретрит Карелия" />
      </head>
      <body suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
