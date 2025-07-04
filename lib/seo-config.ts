// SEO конфигурация для различных разделов сайта
export const seoConfig = {
  // Основные метатеги для главной страницы
  home: {
    title: 'Отдых Карелия Дом Ретрит | Виллагора | Аренда дома у озера Сямозеро',
    description: 'Отдых в Карелии в уютном доме-ретрите Виллагора у озера Сямозеро. Аренда загородного дома с баней на дровах, карельской кухней и экотурами. Идеальное место для восстановления сил на природе. Бронирование от 13,000₽ за человека.',
    keywords: [
      'отдых карелия', 'дом ретрит', 'ретрит карелия', 'отдых карелия дом', 'карелия дом отдых',
      'виллагора', 'сямозеро', 'аренда дома карелия', 'загородный дом карелия', 'баня на дровах',
      'карельская кухня', 'экотуры карелия', 'отдых на природе', 'ретрит на природе'
    ]
  },

  // Метатеги для раздела размещения
  accommodation: {
    title: 'Дом для отдыха в Карелии | Аренда загородного дома Виллагора',
    description: 'Уютный загородный дом для отдыха в Карелии у озера Сямозеро. Комфортное размещение до 8 человек с баней на дровах, кухней и всеми удобствами.',
    keywords: [
      'дом для отдыха карелия', 'аренда дома карелия', 'загородный дом карелия', 'коттедж карелия',
      'дом у озера карелия', 'размещение карелия', 'жилье карелия', 'дом на сямозере'
    ]
  },

  // Метатеги для раздела услуг
  services: {
    title: 'Услуги ретрита в Карелии | Баня, питание, экотуры | Виллагора',
    description: 'Полный спектр услуг для отдыха в Карелии: баня на дровах, карельская кухня, экотуры по лесам и озерам, ароматерапия и восстановительные практики.',
    keywords: [
      'баня на дровах карелия', 'карельская кухня', 'экотуры карелия', 'ароматерапия',
      'услуги отдыха карелия', 'лесные прогулки', 'рыбалка карелия', 'сбор ягод'
    ]
  },

  // Метатеги для раздела галереи
  gallery: {
    title: 'Фото отдыха в Карелии | Дом Виллагора, озеро Сямозеро, природа',
    description: 'Фотографии дома-ретрита Виллагора, озера Сямозеро, карельской природы и отдыха. Посмотрите, как выглядит идеальный отдых в Карелии.',
    keywords: [
      'фото карелия', 'виллагора фото', 'сямозеро фото', 'карельская природа фото',
      'дом отдыха фото', 'баня фото', 'озеро карелия фото'
    ]
  },

  // Метатеги для раздела бронирования
  booking: {
    title: 'Бронирование отдыха в Карелии | Дом ретрит Виллагора | От 13,000₽',
    description: 'Забронируйте отдых в доме-ретрите Виллагора в Карелии. Цены от 13,000₽ за человека. Проживание, питание, баня и экотуры включены.',
    keywords: [
      'бронирование карелия', 'забронировать дом карелия', 'цены отдых карелия',
      'стоимость отдыха карелия', 'заказать отдых карелия', 'резерв дома карелия'
    ]
  }
}

// Дополнительные SEO настройки
export const additionalSeoTags = {
  // Альтернативные названия для поисковых систем
  alternateNames: [
    'Отдых в Карелии',
    'Дом ретрит Карелия',
    'Виллагора ретрит',
    'Карелия отдых дом',
    'Ретрит на Сямозере',
    'Загородный отдых Карелия'
  ],

  // Локальные поисковые запросы
  localKeywords: [
    'отдых на сямозере',
    'дом у озера карелия',
    'виллагора карелия',
    'ретрит сямозеро',
    'отдых пряжинский район',
    'карелия пряжа отдых'
  ],

  // Сезонные ключевые слова
  seasonalKeywords: {
    summer: ['отдых летом карелия', 'летний отдых карелия', 'карелия июнь июль август'],
    autumn: ['отдых осенью карелия', 'осенняя карелия', 'карелия сентябрь октябрь'],
    winter: ['зимний отдых карелия', 'карелия зимой', 'новый год карелия'],
    spring: ['весенний отдых карелия', 'карелия весной', 'майские праздники карелия']
  },

  // Целевая аудитория
  audienceKeywords: [
    'семейный отдых карелия',
    'корпоративный отдых карелия',
    'романтический отдых карелия',
    'отдых с детьми карелия',
    'отдых для взрослых карелия',
    'wellness отдых карелия'
  ]
}

// Функция для генерации метатегов для конкретной страницы
export function generatePageMeta(pageType: keyof typeof seoConfig, customData?: any) {
  const baseMeta = seoConfig[pageType]
  
  return {
    title: customData?.title || baseMeta.title,
    description: customData?.description || baseMeta.description,
    keywords: [...baseMeta.keywords, ...(customData?.keywords || [])],
    openGraph: {
      title: customData?.title || baseMeta.title,
      description: customData?.description || baseMeta.description,
      images: customData?.images || ['/images/hero/hero.jpg'],
      url: `https://www.villagora.ru${customData?.path || ''}`,
    },
    twitter: {
      title: customData?.title || baseMeta.title,
      description: customData?.description || baseMeta.description,
      images: customData?.images || ['/images/hero/hero.jpg'],
    }
  }
}
