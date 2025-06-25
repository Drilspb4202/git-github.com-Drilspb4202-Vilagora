// Конфигурация изображений для проекта Виллагора
export interface ImageConfig {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
}

// Изображения для размещения
export const accommodationImages = {
  house: [
    {
      src: "/images/accommodation/house-exterior-1.jpg",
      alt: "Внешний вид дома в Виллагоре - фасад с панорамными окнами",
    },
    {
      src: "/images/accommodation/house-exterior-2.jpg", 
      alt: "Дом среди карельских сосен - вид сбоку",
    },
    {
      src: "/images/accommodation/house-interior-living.jpg",
      alt: "Уютная гостиная с камином и видом на лес",
    },
    {
      src: "/images/accommodation/house-interior-bedroom.jpg",
      alt: "Спальня с панорамными окнами на природу",
    },
  ],
  kitchen: [
    {
      src: "/images/accommodation/kitchen-1.jpg",
      alt: "Полностью оборудованная кухня с современной техникой",
    },
    {
      src: "/images/accommodation/kitchen-2.jpg",
      alt: "Обеденная зона с видом на карельский лес",
    },
  ],
}

// Изображения природы и активностей
export const natureImages = {
  forest: [
    {
      src: "/images/nature/karelian-forest-1.jpg",
      alt: "Древние карельские сосны в утреннем тумане",
    },
    {
      src: "/images/nature/karelian-forest-2.jpg",
      alt: "Лесная тропа среди высоких сосен",
    },
    {
      src: "/images/nature/karelian-forest-3.jpg",
      alt: "Солнечные лучи пробиваются сквозь кроны деревьев",
    },
  ],
  lake: [
    {
      src: "/images/nature/syamozero-1.jpg",
      alt: "Озеро Сямозеро - кристально чистая вода и песчаный берег",
    },
    {
      src: "/images/nature/syamozero-2.jpg",
      alt: "Закат над озером Сямозеро",
    },
    {
      src: "/images/nature/syamozero-3.jpg",
      alt: "Утренний туман над водой озера Сямозеро",
    },
  ],
}

// Изображения активностей
export const activityImages = {
  ecotours: [
    {
      src: "/images/activities/mushroom-picking.jpg",
      alt: "Сбор грибов в карельском лесу",
    },
    {
      src: "/images/activities/berry-picking.jpg",
      alt: "Сбор лесных ягод - черника и брусника",
    },
    {
      src: "/images/activities/fishing.jpg",
      alt: "Рыбалка на озере Сямозеро",
    },
    {
      src: "/images/activities/forest-walk.jpg",
      alt: "Прогулка по лесным тропам",
    },
  ],
  wellness: [
    {
      src: "/images/wellness/sauna-exterior.jpg",
      alt: "Традиционная русская баня на берегу озера",
    },
    {
      src: "/images/wellness/sauna-interior.jpg",
      alt: "Интерьер бани с панорамными окнами",
    },
    {
      src: "/images/wellness/aromatherapy.jpg",
      alt: "Сеанс ароматерапии с натуральными маслами",
    },
  ],
}

// Изображения еды
export const foodImages = {
  karelian: [
    {
      src: "/images/food/kalitki.jpg",
      alt: "Традиционные карельские калитки",
    },
    {
      src: "/images/food/fresh-fish.jpg",
      alt: "Свежая рыба из озера Сямозеро",
    },
    {
      src: "/images/food/forest-berries.jpg",
      alt: "Лесные ягоды - черника, брусника, морошка",
    },
    {
      src: "/images/food/mushroom-soup.jpg",
      alt: "Суп из лесных грибов",
    },
  ],
}

// Главные изображения для галереи
export const galleryImages = [
  {
    src: "/images/gallery/hero-landscape.jpg",
    alt: "Панорамный вид на карельскую природу",
    title: "Карельские просторы",
    subtitle: "Бескрайние леса и чистые озера",
  },
  {
    src: "/images/gallery/sunrise-lake.jpg", 
    alt: "Рассвет над озером в Карелии",
    title: "Рассвет над озером",
    subtitle: "Магия утренней природы",
  },
  {
    src: "/images/gallery/cozy-evening.jpg",
    alt: "Уютный вечер у камина в доме",
    title: "Домашний уют",
    subtitle: "Тепло и комфорт вдали от города",
  },
]

// Временные placeholder изображения (для разработки)
export const placeholderImages = {
  unsplash: {
    forest: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&crop=center",
    lake: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center", 
    house: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&crop=center",
    sauna: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop&crop=center",
    food: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop&crop=center",
  },
  picsum: {
    nature: (id: number) => `https://picsum.photos/800/600?random=${id}`,
  }
}

// Функция для получения изображения с fallback
export function getImageWithFallback(primarySrc: string, fallbackSrc: string): string {
  // В продакшене можно добавить проверку существования файла
  return primarySrc
}

// Функция для генерации alt текста
export function generateAltText(category: string, description: string): string {
  return `${category} - ${description} | Карельский ретрит Виллагора`
}
