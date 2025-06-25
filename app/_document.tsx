import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        {/* Основные мета-теги */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Уникальный ретрит в Карелии с проживанием в Виллагоре. Отдых на природе, баня на дровах, чистейшее озеро Сямозеро, карельская кухня, экотуры." />
        
        {/* Основные фавиконки */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Канонический URL */}
        <link rel="canonical" href="https://www.villagora.ru" />

        {/* OpenGraph теги для соцсетей - самое главное для превью */}
        <meta property="og:title" content="Ретрит в Карелии | Отдых на природе" />
        <meta property="og:description" content="Уникальный ретрит в Карелии. Перезагрузка души в окружении хвойных лесов." />
        <meta property="og:image" content="https://www.villagora.ru/images/hero/hero.jpg" />
        <meta property="og:url" content="https://www.villagora.ru" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ретрит Карелия" />
        <meta name="theme-color" content="#1f6e36" />

        {/* Twitter Card теги */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ретрит в Карелии | Виллагора" />
        <meta name="twitter:description" content="Уникальный отдых в Карелии с проживанием в деревне Виллагора." />
        <meta name="twitter:image" content="https://www.villagora.ru/images/hero/hero.jpg" />

        {/* Метаданные для телеграма и мессенджеров */}
        <meta property="telegram:title" content="Ретрит в Карелии | Виллагора" />
        <meta property="telegram:description" content="Уникальный отдых в Карелии с проживанием в деревне Виллагора." />
        <meta property="telegram:image" content="https://www.villagora.ru/images/hero/hero.jpg" />
        
        {/* Альтернативные теги для других мессенджеров */}
        <meta name="title" content="Ретрит в Карелии | Виллагора" />
        <meta name="application-name" content="Ретрит Карелия" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
