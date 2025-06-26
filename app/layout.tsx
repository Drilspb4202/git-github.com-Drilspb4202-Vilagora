import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

// SEO метаданные
export const metadata: Metadata = {
  metadataBase: new URL('https://www.villagora.ru'),
  title: {
    default: 'Карелия ретрит отдых | Виллагора | Отдых на природе',
    template: '%s | Ретрит Карелия'
  },
  description: 'Уникальный ретрит в Карелии с проживанием в уютном доме на берегу Сямозера. Отдых на природе, баня на дровах, карельская кухня и экотуры. Бронирование от 13,000₽ за человека.',
  generator: 'Next.js',
  applicationName: 'Ретрит Карелия',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'ретрит в Карелии', 'отдых в Карелии', 'Виллагора', 'Сямозеро', 'карельская природа',
    'экотуризм', 'отдых на природе', 'баня на дровах', 'карельская кухня', 'медитация в лесу',
    'перезагрузка', 'восстановление сил', 'тишина', 'лесные прогулки', 'сбор ягод',
    'рыбалка в Карелии', 'экотуры', 'ароматерапия', 'природа', 'отдых летом', 'бронирование',
    'турбаза Карелия', 'загородный отдых', 'эко отель', 'wellness retreat', 'digital detox',
    'дом ретрит', 'дом для ретрита', 'уютный дом в Карелии', 'отдых карелия дом', 'карелия дом ретрит'
  ],
  authors: [{ name: 'Радмила Яковлева', url: 'https://t.me/RadmilaYakovleva' }],
  creator: 'Радмила Яковлева',
  publisher: 'Ретрит Карелия',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Ретрит в Карелии | Отдых на природе в Виллагоре',
    description: 'Камерный ретрит в Виллагоре. Уютный дом на берегу Сямозера, баня и эко-туры. Перезагрузка души в хвойных лесах Карелии. Бронирование от 13,000₽.',
    siteName: 'Ретрит Карелия',
    images: [{
      url: '/images/hero/hero.jpg',
      width: 1200,
      height: 630,
      alt: 'Ретрит в Карелии - отдых на природе в Виллагоре',
    }, {
      url: '/images/gallery/hero-landscape.jpg',
      width: 1200,
      height: 800,
      alt: 'Карельская природа - озеро и лес',
    }],
    locale: 'ru_RU',
    type: 'website',
    url: 'https://www.villagora.ru',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ретрит в Карелии | Отдых на природе в Виллагоре',
    description: 'Камерный ретрит в Виллагоре. Уютный дом на берегу Сямозера и баня на дровах. Перезагрузка души в хвойных лесах Карелии. Бронирование от 13,000₽.',
    images: ['/images/hero/hero.jpg'],
    creator: '@RadmilaYakovleva',
    site: '@VillagoraRetreat',
  },
  alternates: {
    canonical: 'https://www.villagora.ru',
  },
  category: 'travel',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        {/* Мобильная оптимизация */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#1a2e05" />
        <meta name="msapplication-navbutton-color" content="#1a2e05" />
        <meta name="apple-mobile-web-app-title" content="Ретрит Карелия" />

        {/* SEO и индексация */}
        <link rel="canonical" href="https://www.villagora.ru" />
        <meta
          name="keywords"
          content="ретрит в Карелии, отдых в Карелии, Виллагора, Сямозеро, карельская природа, экотуризм, отдых на природе, баня на дровах, карельская кухня, медитация в лесу, перезагрузка, восстановление сил, тишина, лесные прогулки, сбор ягод, рыбалка в Карелии, экотуры, ароматерапия, природа, отдых летом, бронирование, турбаза Карелия, загородный отдых, эко отель, wellness retreat, digital detox, дом ретрит, дом для ретрита, уютный дом в Карелии, отдых карелия дом, карелия дом ретрит"
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="yandex" content="index, follow" />

        {/* Иконки и манифест */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Дополнительные мета-теги для корректного отображения при поделении ссылкой */}
        <meta property="og:title" content="Карелия ретрит отдых | Виллагора" />
        <meta property="og:description" content="Камерный ретрит в Виллагоре. Уютный дом на берегу Сямозера, баня и эко-туры. Перезагрузка души в хвойных лесах Карелии." />
        <meta property="og:image" content={`https://www.villagora.ru/images/hero/hero.jpg?v=${Date.now()}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Ретрит в Карелии - отдых на природе" />
        <meta property="og:url" content="https://www.villagora.ru" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ретрит Карелия" />
        <meta property="og:locale" content="ru_RU" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Карелия ретрит отдых | Виллагора" />
        <meta name="twitter:description" content="Камерный ретрит в Виллагоре. Уютный дом на берегу Сямозера и баня на дровах. Перезагрузка души в хвойных лесах Карелии." />
        <meta name="twitter:image" content={`https://www.villagora.ru/images/hero/hero.jpg?v=${Date.now()}`} />
        <meta name="twitter:image:alt" content="Ретрит в Карелии - отдых на природе" />
        <meta name="twitter:creator" content="@RadmilaYakovleva" />
        <meta name="twitter:site" content="@VillagoraRetreat" />

        {/* Дополнительные SEO метатеги */}
        <meta name="author" content="Радмила Яковлева" />
        <meta name="publisher" content="Ретрит Карелия" />
        <meta name="application-name" content="Ретрит Карелия" />
        <meta name="msapplication-TileColor" content="#1a2e05" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Геолокация для локального SEO */}
        <meta name="geo.region" content="RU-KR" />
        <meta name="geo.placename" content="Деревня Виллагора, Карелия, Россия" />
        <meta name="geo.position" content="61.89101283682342;33.68979055651442" />
        <meta name="ICBM" content="61.89101283682342, 33.68979055651442" />

        {/* Preconnect для улучшения производительности */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Preload критических изображений для мгновенной загрузки */}
        <link rel="preload" as="image" href="/images/hero/hero.jpg" />
        <link rel="preload" as="image" href="/images/gallery/hero-landscape.jpg" />
        <link rel="preload" as="image" href="/images/syamozero/syamozero-1.jpg" />
        <link rel="preload" as="image" href="/images/accommodation/house-1.jpg" />

        {/* Prefetch для изображений, которые скоро понадобятся */}
        <link rel="prefetch" as="image" href="/images/wellness/sauna-1.jpg" />
        <link rel="prefetch" as="image" href="/images/ecotours/karelian-forest-1.jpg" />

        {/* Структурированные данные JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristAttraction",
              "name": "Ретрит в Карелии - Виллагора",
              "description": "Уникальный ретрит в Карелии с отдыхом на природе, баней на дровах и экотурами. Проживание в уютном доме на берегу Сямозера.",
              "url": "https://www.villagora.ru",
              "image": [
                "https://www.villagora.ru/images/hero/hero.jpg",
                "https://www.villagora.ru/images/syamozero/syamozero-1.jpg",
                "https://www.villagora.ru/images/accommodation/house-1.jpg"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Карелия",
                "addressCountry": "RU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 61.89101283682342,
                "longitude": 33.68979055651442
              },
              "offers": {
                "@type": "Offer",
                "priceCurrency": "RUB",
                "price": "13000",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "13000",
                  "priceCurrency": "RUB",
                  "unitText": "за человека в день"
                }
              },
              "amenityFeature": [
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Баня на дровах"
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Проживание"
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Питание"
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Экотуры"
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Ароматерапия"
                }
              ],
              "provider": {
                "@type": "Person",
                "name": "Радмила Яковлева",
                "url": "https://t.me/RadmilaYakovleva"
              }
            })
          }}
        />
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
