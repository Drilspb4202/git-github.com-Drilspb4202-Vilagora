"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  MapPin,
  CalendarIcon,
  Users,
  Phone,
  MessageCircle,
  Waves,
  TreePine,
  Home,
  Utensils,
  Droplets,
  Flame,
  ShoppingCart,
  Heart,
  Star,
  ArrowRight,
  Mountain,
  Check,
  X,
  CreditCard,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import NextImage from "next/image"
import { useState, useEffect } from "react"
import { format } from "date-fns"
import { ru } from "date-fns/locale"
import { OptimizedImage } from "@/components/optimized-image"
import { LoadingProgress } from "@/components/loading-progress"
import { NatureSounds } from "@/components/nature-sounds"
import { AnimatedNature } from "@/components/animated-nature"
import { FAQSection } from "@/components/faq-section"

// Импорты удалены

// Страница с SEO-оптимизацией для ретрита в Карелии
export default function KareliaRetreatLanding() {
  const [isVisible, setIsVisible] = useState(false)
  const [activePackage, setActivePackage] = useState(1)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState("")
  const [checkInDate, setCheckInDate] = useState<Date>()
  const [checkOutDate, setCheckOutDate] = useState<Date>()
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "1",
    message: "",
  })
  const [isMapOpen, setIsMapOpen] = useState(false)

  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [imageLoadingProgress, setImageLoadingProgress] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    // Preload critical hero background image with high priority
    const heroImage = new window.Image()
    heroImage.src = "/images/hero/hero.jpg"
    heroImage.onload = () => {
      console.log("Hero background loaded")
    }

    // Preload other critical images
    const preloadImages = [
      "/images/hero/hero.jpg", // Hero background
    ]

    preloadImages.forEach((src) => {
      const img = new window.Image()
      img.src = src
    })
  }, [])

  const preloadImageBatch = (imageUrls: string[]) => {
    let loadedCount = 0
    const totalImages = imageUrls.length

    imageUrls.forEach((url) => {
      const img = new window.Image()
      img.onload = () => {
        loadedCount++
        setImageLoadingProgress((loadedCount / totalImages) * 100)
        if (loadedCount === totalImages) {
          setImagesLoaded(true)
        }
      }
      img.src = url
    })
  }

  const packages = [
    {
      name: "Минимальный",
      duration: "3 дня",
      price: "39 000 ₽",
      description: "Идеально для первого знакомства",
      gradient: "from-forest-600 to-forest-700",
      features: ["Проживание", "Питание", "Трансфер", "Баня"],
    },
    {
      name: "Средний",
      duration: "5 дней",
      price: "59 000 ₽",
      description: "Оптимальный баланс отдыха",
      popular: true,
      gradient: "from-forest-500 to-forest-600",
      features: ["Проживание", "Питание", "Трансфер", "Баня", "Экотуры", "Ароматерапия"],
    },
    {
      name: "Комфортный",
      duration: "7 дней",
      price: "79 000 ₽",
      description: "Полное погружение в природу",
      gradient: "from-forest-400 to-forest-500",
      features: ["Проживание", "Питание", "Трансфер", "Баня", "Экотуры", "Ароматерапия", "Рыбалка"],
    },
    {
      name: "Максимальный",
      duration: "10 дней",
      price: "109 000 ₽",
      description: "Глубокая перезагрузка души",
      gradient: "from-amber-600 to-forest-600",
      features: ["Все включено", "Персональный гид", "Индивидуальные экскурсии", "Спа-процедуры"],
    },
  ]

  const features = [
    {
      id: "house",
      icon: <Home className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Уютный дом",
      description: "Двухэтажный дом в тишине карельской природы",
      color: "from-forest-400 to-forest-600",
      images: [
        "/placeholder.svg?height=600&width=800&text=Уютный+дом+1",
        "/placeholder.svg?height=600&width=800&text=Уютный+дом+2",
        "/placeholder.svg?height=600&width=800&text=Уютный+дом+3",
        "/placeholder.svg?height=600&width=800&text=Уютный+дом+4",
      ],
      fullDescription:
        "Просторный двухэтажный дом с панорамными окнами, откуда открывается потрясающий вид на карельскую природу. Дом оборудован всем необходимым для комфортного проживания: уютные спальни, общая гостиная с камином, полностью оборудованная кухня.",
    },
    {
      id: "kitchen",
      icon: <Utensils className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Домашняя кухня",
      description: "Калитки, окрошка, свежая рыба и сезонные угощения",
      color: "from-amber-500 to-amber-700",
      images: [
        "/placeholder.svg?height=600&width=800&text=Карельская+кухня+1",
        "/placeholder.svg?height=600&width=800&text=Карельская+кухня+2",
        "/placeholder.svg?height=600&width=800&text=Карельская+кухня+3",
        "/placeholder.svg?height=600&width=800&text=Карельская+кухня+4",
      ],
      fullDescription:
        "Аутентичная карельская кухня с использованием местных продуктов. Свежая рыба из озера, лесные ягоды и грибы, традиционные калитки и другие блюда региональной кухни. Все готовится с душой и заботой о ваших вкусовых предпочтениях.",
    },
    {
      id: "lake",
      icon: <Waves className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Сямозеро",
      description: "Трансфер к песчаным берегам для купания и медитаций",
      color: "from-slate-500 to-slate-700",
      images: [
        "/placeholder.svg?height=600&width=800&text=Сямозеро+1",
        "/placeholder.svg?height=600&width=800&text=Сямозеро+2",
        "/placeholder.svg?height=600&width=800&text=Сямозеро+3",
        "/placeholder.svg?height=600&width=800&text=Сямозеро+4",
      ],
      fullDescription:
        "Одно из красивейших озер Карелии с кристально чистой водой и песчаными пляжами. Идеальное место для купания, медитаций у воды, рыбалки и просто наслаждения природой. Организуем регулярные трансферы к самым живописным местам озера.",
    },
    {
      id: "ecotours",
      icon: <TreePine className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Экотуры",
      description: "Сбор ягод, грибов, рыбалка и прогулки по лесу",
      color: "from-forest-500 to-forest-700",
      images: [
        "/placeholder.svg?height=600&width=800&text=Экотуры+1",
        "/placeholder.svg?height=600&width=800&text=Экотуры+2",
        "/placeholder.svg?height=600&width=800&text=Экотуры+3",
        "/placeholder.svg?height=600&width=800&text=Экотуры+4",
      ],
      fullDescription:
        "Увлекательные экологические туры по карельским лесам. Изучаем местную флору и фауну, собираем сезонные ягоды и грибы, учимся рыбачить на озере. Все туры проводятся с опытным гидом, который расскажет о природе Карелии.",
    },
    {
      id: "aromatherapy",
      icon: <Droplets className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Ароматерапия",
      description: "Эфирные масла и аромаритуалы для восстановления",
      color: "from-forest-300 to-forest-500",
      images: [
        "/placeholder.svg?height=600&width=800&text=Ароматерапия+1",
        "/placeholder.svg?height=600&width=800&text=Ароматерапия+2",
        "/placeholder.svg?height=600&width=800&text=Ароматерапия+3",
        "/placeholder.svg?height=600&width=800&text=Ароматерапия+4",
      ],
      fullDescription:
        "Профессиональные сеансы ароматерапии с использованием натуральных эфирных масел. Индивидуальный подбор ароматов для каждого гостя, обучение основам ароматерапии, создание персональных аромакомпозиций для домашнего использования.",
    },
    {
      id: "sauna",
      icon: <Flame className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Баня на дровах",
      description: "Прогревание тела и расслабление под звёздами",
      color: "from-orange-500 to-red-600",
      images: [
        "/placeholder.svg?height=600&width=800&text=Баня+1",
        "/placeholder.svg?height=600&width=800&text=Баня+2",
        "/placeholder.svg?height=600&width=800&text=Баня+3",
        "/placeholder.svg?height=600&width=800&text=Баня+4",
      ],
      fullDescription:
        "Традиционная русская баня на дровах с панорамными окнами и выходом к озеру. Вечерние банные процедуры под звездным небом, ароматные веники из березы и дуба, возможность окунуться в прохладное озеро после парной.",
    },
    {
      id: "transfer",
      icon: <CreditCard className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Трансфер",
      description: "Комфортная доставка от вокзала до места отдыха",
      color: "from-blue-500 to-blue-700",
      images: [
        "/placeholder.svg?height=600&width=800&text=Трансфер+1",
        "/placeholder.svg?height=600&width=800&text=Трансфер+2",
        "/placeholder.svg?height=600&width=800&text=Трансфер+3",
        "/placeholder.svg?height=600&width=800&text=Трансфер+4",
      ],
      fullDescription:
        "Организуем комфортный трансфер от железнодорожного вокзала или аэропорта до места проведения ретрита. Современный транспорт, опытные водители, возможность остановок по пути для покупки необходимых вещей.",
    },
    {
      id: "karaoke",
      icon: <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Караоке",
      description: "Вечерние развлечения и музыкальные посиделки",
      color: "from-purple-500 to-purple-700",
      images: [
        "/placeholder.svg?height=600&width=800&text=Караоке+1",
        "/placeholder.svg?height=600&width=800&text=Караоке+2",
        "/placeholder.svg?height=600&width=800&text=Караоке+3",
        "/placeholder.svg?height=600&width=800&text=Караоке+4",
      ],
      fullDescription:
        "Современная караоке-система для вечерних развлечений. Большая коллекция песен на русском и английском языках, качественное звуковое оборудование, возможность записи выступлений на память.",
    },
    {
      id: "hospitality",
      icon: <Heart className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Гостеприимство",
      description: "Индивидуальный подход и забота о каждом госте",
      color: "from-pink-500 to-pink-700",
      images: [
        "/placeholder.svg?height=600&width=800&text=Гостеприимство+1",
        "/placeholder.svg?height=600&width=800&text=Гостеприимство+2",
        "/placeholder.svg?height=600&width=800&text=Гостеприимство+3",
        "/placeholder.svg?height=600&width=800&text=Гостеприимство+4",
      ],
      fullDescription:
        "Наша команда обеспечивает высочайший уровень сервиса и индивидуальный подход к каждому гостю. Мы учитываем все ваши пожелания и потребности, создавая атмосферу домашнего уюта и заботы.",
    },
  ]

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    console.log("Booking submitted:", {
      ...formData,
      package: selectedPackage,
      checkIn: checkInDate,
      checkOut: checkOutDate,
    })
    setIsBookingOpen(false)
    // Показать уведомление об успешной отправке
  }

  const openBookingModal = (packageName: string) => {
    setSelectedPackage(packageName)
    setIsBookingOpen(true)
  }

  const openFeatureGallery = (featureId: string) => {
    setSelectedFeature(featureId)
    setCurrentImageIndex(0)
  }

  const closeFeatureGallery = () => {
    setSelectedFeature(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    const feature = features.find((f) => f.id === selectedFeature)
    if (feature) {
      setCurrentImageIndex((prev) => (prev + 1) % feature.images.length)
    }
  }

  const prevImage = () => {
    const feature = features.find((f) => f.id === selectedFeature)
    if (feature) {
      setCurrentImageIndex((prev) => (prev - 1 + feature.images.length) % feature.images.length)
    }
  }

  const selectedFeatureData = features.find((f) => f.id === selectedFeature)

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-950 via-forest-900 to-slate-900 overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-forest-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animate-shimmer"></div>
        <div className="absolute -bottom-40 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-amber-600 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse animation-delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 text-center overflow-hidden"
        itemScope 
        itemType="https://schema.org/TouristAttraction">
        {/* Optimized Background with Next.js Image */}
        <div className="absolute inset-0">
          <NextImage
            src="/images/hero/hero.jpg"
            alt="Карельская природа, ретрит в Виллагоре, озеро Сямозеро, отдых на природе"
            fill
            priority
            quality={85}
            className="object-cover"
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            itemProp="image"
          />

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-forest-900/30 via-transparent to-forest-900/30 z-10"></div>
        </div>

        {/* Content */}
        <div
          className={`relative max-w-6xl mx-auto transition-all duration-1000 z-20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-6 sm:mb-8">
            <TreePine className="h-12 w-12 sm:h-16 sm:w-16 text-forest-300 mx-auto mb-4 sm:mb-6 animate-breathe drop-shadow-lg" />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 leading-tight px-2" itemProp="name">
            <span className="bg-gradient-to-r from-forest-200 via-forest-300 to-amber-300 bg-clip-text text-transparent animate-pulse drop-shadow-2xl">
              Камерный ретрит
            </span>
            <br />
            <span className="text-white drop-shadow-2xl">в сердце Карелии</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-12 text-stone-100 font-light max-w-4xl mx-auto leading-relaxed drop-shadow-lg px-4" itemProp="description">
            Перезагрузка души в окружении хвойных лесов, отдых на природе Карелии
          </p>
          
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="hidden">
            <span itemProp="addressLocality">Виллагора</span>,
            <span itemProp="addressRegion">Республика Карелия</span>,
            <span itemProp="postalCode">186135</span>,
            <span itemProp="addressCountry">Россия</span>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-8 sm:mb-12 px-4">
            <Badge
              className="text-sm sm:text-lg py-2 px-4 sm:py-3 sm:px-6 bg-black/30 backdrop-blur-md border-white/20 hover:bg-black/40 transition-all duration-300 transform hover:scale-105 text-white shadow-xl cursor-pointer animate-float-nature"
              onClick={() => setIsMapOpen(true)}
            >
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Деревня Виллагора
            </Badge>
            <Badge className="text-sm sm:text-lg py-2 px-4 sm:py-3 sm:px-6 bg-black/30 backdrop-blur-md border-white/20 hover:bg-black/40 transition-all duration-300 transform hover:scale-105 text-white shadow-xl">
              <CalendarIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              5-14 июля
            </Badge>
            <Badge className="text-sm sm:text-lg py-2 px-4 sm:py-3 sm:px-6 bg-black/30 backdrop-blur-md border-white/20 hover:bg-black/40 transition-all duration-300 transform hover:scale-105 text-white shadow-xl">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              До 5 человек
            </Badge>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-500 hover:to-forest-600 text-white text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 group border-0 w-full sm:w-auto"
                >
                  Забронировать место
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </DialogTrigger>
            </Dialog>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/60 text-white bg-black/20 backdrop-blur-md hover:bg-black/30 hover:border-white/80 text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl w-full sm:w-auto"
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative" itemScope itemType="https://schema.org/Resort">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-stone-100 to-stone-300 bg-clip-text text-transparent">
              Время услышать себя
            </h2>
            <p className="text-lg sm:text-xl text-stone-300 mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto px-4">
              Ты чувствуешь, что пора перезагрузиться? Отпустить суету и наконец услышать себя? Приглашаю тебя на ретрит
              в загородный дом на берегу ламбушки, в окружении карельских лесов и озёр.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Heart,
                title: "Для души",
                desc: "Отдых и восстановление в гармонии с природой",
                color: "from-rose-600 to-rose-700",
              },
              {
                icon: Mountain,
                title: "Природа",
                desc: "Карельские леса, озёра и чистый воздух",
                color: "from-forest-500 to-forest-700",
              },
              {
                icon: Users,
                title: "Камерность",
                desc: "Небольшая группа до 5 человек",
                color: "from-amber-600 to-amber-700",
              },
            ].map((item, index) => (
              <div key={index} className="group text-center transform hover:scale-105 transition-all duration-500">
                <div
                  className={`bg-gradient-to-r ${item.color} w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-2xl group-hover:shadow-3xl transition-all duration-300 group-hover:rotate-6`}
                >
                  {(() => {
                    const Icon = item.icon
                    return <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  })()}
                </div>
                <h3 className="font-bold text-xl sm:text-2xl mb-3 sm:mb-4 text-stone-100">{item.title}</h3>
                <p className="text-stone-300 text-base sm:text-lg leading-relaxed px-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative" itemScope itemType="https://schema.org/Hotel">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-stone-100 to-stone-300 bg-clip-text text-transparent">
            Что тебя ждёт
          </h2>
          <meta itemProp="name" content="Ретрит в Карелии - Виллагора" />
          <meta itemProp="description" content="Уникальный ретрит на природе в Карелии с экскурсиями, баней и отдыхом на озере Сямозеро" />
          <meta itemProp="telephone" content="+78952201078" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group bg-forest-900/30 backdrop-blur-sm border-forest-700/30 hover:bg-forest-800/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-2xl hover:shadow-3xl cursor-pointer"
                onClick={() => openFeatureGallery(feature.id)}
              >
                <CardHeader className="pb-3 sm:pb-4">
                  <div
                    className={`bg-gradient-to-r ${feature.color} w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-12`}
                  >
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <CardTitle className="text-xl sm:text-2xl text-stone-100 group-hover:text-forest-300 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-300 text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-forest-400 text-sm font-medium">
                    <span>Посмотреть фото</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 bg-gradient-to-r from-forest-900/20 to-forest-800/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-forest-700/30 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-stone-100">
              Дополнительные удобства
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {[
                { icon: ShoppingCart, text: "Магазин 24/7 в 3 минутах от дома" },
                { icon: Droplets, text: "Чистая родниковая вода" },
                { icon: "🏀", text: "Большой батут" },
                { icon: Flame, text: "Мангал для вечерних посиделок" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-forest-800/20 hover:bg-forest-700/30 transition-all duration-300 transform hover:scale-105"
                >
                  {typeof item.icon === "string" ? (
                    <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-xl sm:text-2xl">
                      {item.icon}
                    </div>
                  ) : (
                    (() => {
                      const Icon = item.icon
                      return <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-forest-400 flex-shrink-0" />
                    })()
                  )}
                  <span className="text-stone-300 text-base sm:text-lg">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-stone-100 to-stone-300 bg-clip-text text-transparent">
            Выбери свой пакет
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden bg-forest-900/30 backdrop-blur-sm border-forest-700/30 hover:bg-forest-800/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 shadow-2xl hover:shadow-3xl cursor-pointer ${
                  pkg.popular ? "ring-2 ring-forest-400 shadow-forest-400/25" : ""
                }`}
                onMouseEnter={() => setActivePackage(index)}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-forest-500 to-forest-600 text-white px-4 sm:px-6 py-1 sm:py-2 shadow-xl animate-pulse text-sm">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      Популярный
                    </Badge>
                  </div>
                )}

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <CardHeader className="text-center relative z-10 pt-6 sm:pt-8">
                  <CardTitle className="text-xl sm:text-2xl text-stone-100 group-hover:text-forest-300 transition-colors duration-300">
                    {pkg.name}
                  </CardTitle>
                  <CardDescription className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-forest-400 to-amber-400 bg-clip-text text-transparent">
                    {pkg.duration}
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center relative z-10 px-4 sm:px-6">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-100 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    {pkg.price}
                  </div>
                  <p className="text-stone-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{pkg.description}</p>

                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-xs sm:text-sm font-semibold text-forest-400 mb-2 sm:mb-3">Включено:</h4>
                    <div className="space-y-1 sm:space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs sm:text-sm text-stone-300">
                          <Check className="h-3 w-3 sm:h-4 sm:w-4 text-forest-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    className={`w-full bg-gradient-to-r ${pkg.gradient} hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-white border-0 text-sm sm:text-base py-2 sm:py-3`}
                    onClick={() => openBookingModal(pkg.name)}
                  >
                    Выбрать пакет
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12 p-6 sm:p-8 bg-forest-900/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-forest-700/30">
            <p className="text-lg sm:text-xl text-stone-300 mb-3 sm:mb-4">
              <strong className="text-forest-400">Предоплата:</strong> 10 000 ₽ за человека
            </p>
            <p className="text-stone-400 text-sm sm:text-base">
              В стоимость включено: проживание, питание, трансфер, все активности
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-stone-100 to-stone-300 bg-clip-text text-transparent">
            Место силы — Карелия
          </h2>

          {/* Loading progress indicator */}
          {!imagesLoaded && (
            <div className="mb-6 sm:mb-8">
              <p className="text-center text-stone-300 mb-3 sm:mb-4 text-sm sm:text-base">Загружаем фотографии...</p>
              <LoadingProgress progress={imageLoadingProgress} />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Карельские леса",
                subtitle: "Древние сосны и чистый воздух",
                images: [
                  "/placeholder.svg?height=400&width=600&text=Лес+1",
                  "/placeholder.svg?height=400&width=600&text=Лес+2",
                  "/placeholder.svg?height=400&width=600&text=Лес+3",
                ],
              },
              {
                title: "Озеро Сямозеро",
                subtitle: "Кристально чистая вода",
                images: [
                  "/placeholder.svg?height=400&width=600&text=Озеро+1",
                  "/placeholder.svg?height=400&width=600&text=Озеро+2",
                  "/placeholder.svg?height=400&width=600&text=Озеро+3",
                ],
              },
              {
                title: "Уютный дом",
                subtitle: "Ваш дом вдали от дома",
                images: [
                  "/placeholder.svg?height=400&width=600&text=Дом+1",
                  "/placeholder.svg?height=400&width=600&text=Дом+2",
                  "/placeholder.svg?height=400&width=600&text=Дом+3",
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative h-64 sm:h-80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500"
              >
                <OptimizedImage
                  src={item.images[0]}
                  alt={item.title}
                  priority={index === 0}
                  className="w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-800/30 to-transparent group-hover:from-forest-800/70 transition-all duration-500"></div>
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                  <h3 className="font-bold text-lg sm:text-2xl mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-stone-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm sm:text-base">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/20 via-forest-800/20 to-forest-900/30"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-10 text-stone-100 text-center">
            Часто задаваемые вопросы
          </h2>
          <p className="text-lg sm:text-xl mb-10 sm:mb-12 text-stone-300 leading-relaxed max-w-4xl mx-auto px-4 text-center">
            Всё, что вам нужно знать о нашем ретрите в Карелии перед бронированием
          </p>
          
          <div className="bg-forest-950/30 backdrop-blur-sm border border-forest-700/20 rounded-3xl p-6 sm:p-8">
            <FAQSection />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-forest-800/30 via-forest-700/20 to-forest-600/30"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-stone-100">
            Готов к перезагрузке?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-stone-300 leading-relaxed max-w-4xl mx-auto px-4">
            Это не просто поездка — это отдых для души. Радушие, лёгкость, искренние разговоры и ощущение, что ты
            наконец возвращаешься к себе.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <Card 
              className="group bg-forest-900/30 backdrop-blur-sm border-forest-700/30 hover:bg-forest-800/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-2xl cursor-pointer"
              onClick={() => window.open('tel:89522010778')}
            >
              <CardHeader>
                <div className="flex items-center justify-center mb-4 sm:mb-6">
                  <div className="bg-gradient-to-r from-forest-500 to-forest-600 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-12">
                    <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl sm:text-2xl text-stone-100">Позвони</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl sm:text-2xl font-bold text-forest-400 mb-2">8 952 201 07 78</p>
                <p className="text-stone-300 text-sm sm:text-base">Детали и бронь по телефону</p>
              </CardContent>
            </Card>

            <Card 
              className="group bg-forest-900/30 backdrop-blur-sm border-forest-700/30 hover:bg-forest-800/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-2xl cursor-pointer"
              onClick={() => window.open('https://t.me/RadmilaYakovleva')}
            >
              <CardHeader>
                <div className="flex items-center justify-center mb-4 sm:mb-6">
                  <div className="bg-gradient-to-r from-amber-600 to-amber-700 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-12">
                    <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl sm:text-2xl text-stone-100">Напиши в Telegram</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl sm:text-2xl font-bold text-amber-400 mb-2">@RadmilaYakovleva</p>
                <p className="text-stone-300 text-sm sm:text-base">Быстрые ответы в чате</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-500 hover:to-forest-600 text-white text-lg sm:text-xl px-8 sm:px-12 py-3 sm:py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 group border-0 w-full sm:w-auto"
              onClick={() => window.open('tel:89522010778')}
            >
              <Phone className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
              Позвонить сейчас
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white text-lg sm:text-xl px-8 sm:px-12 py-3 sm:py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 group border-0 w-full sm:w-auto"
              onClick={() => window.open('https://t.me/RadmilaYakovleva')}
            >
              <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
              Написать в Telegram
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-forest-950/40 backdrop-blur-sm border-t border-forest-700/30">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-4 sm:mb-6">
            <TreePine className="h-10 w-10 sm:h-12 sm:w-12 text-forest-400 mx-auto mb-3 sm:mb-4 animate-pulse" />
          </div>
          <p className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-forest-400 to-amber-400 bg-clip-text text-transparent">
            Камерный ретрит в Карелии
          </p>
          <p className="text-stone-400 mb-4 sm:mb-6 text-base sm:text-lg">
            Деревня Виллагора • 5-14 июля • До 5 человек
          </p>
          <p className="text-stone-500 text-base sm:text-lg italic px-4">
            Это про дыхание полной грудью. Про тишину и природу. Про возвращение к себе.
          </p>
        </div>
      </footer>

      {/* Feature Gallery Modal */}
      <Dialog open={!!selectedFeature} onOpenChange={closeFeatureGallery}>
        <DialogContent className="sm:max-w-[90vw] md:max-w-[900px] bg-forest-900/95 backdrop-blur-sm border-forest-700/30 text-stone-100 p-0 max-h-[90vh] overflow-y-auto">
          {selectedFeatureData && (
            <>
              <DialogHeader className="p-4 sm:p-6 pb-0">
                <DialogTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-forest-400 to-amber-400 bg-clip-text text-transparent flex items-center gap-2 sm:gap-3">
                  <div
                    className={`bg-gradient-to-r ${selectedFeatureData.color} w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center`}
                  >
                    <div className="text-white">{selectedFeatureData.icon}</div>
                  </div>
                  {selectedFeatureData.title}
                </DialogTitle>
                <DialogDescription className="text-stone-300 text-base sm:text-lg mt-3 sm:mt-4">
                  {selectedFeatureData.fullDescription}
                </DialogDescription>
              </DialogHeader>

              <div className="relative">
                <div className="relative h-64 sm:h-96 bg-forest-800/20">
                  <NextImage
                    src={selectedFeatureData.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${selectedFeatureData.title} ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                  />

                  {/* Navigation buttons */}
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-forest-900/80 border-forest-600/30 text-stone-200 hover:bg-forest-800/90 w-8 h-8 sm:w-10 sm:h-10"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-forest-900/80 border-forest-600/30 text-stone-200 hover:bg-forest-800/90 w-8 h-8 sm:w-10 sm:h-10"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
                  </Button>

                  {/* Image counter */}
                  <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-forest-900/80 backdrop-blur-sm rounded-full px-3 py-1 sm:px-4 sm:py-2 text-stone-200 text-sm">
                    {currentImageIndex + 1} / {selectedFeatureData.images.length}
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="flex gap-2 p-4 sm:p-6 justify-center overflow-x-auto">
                  {selectedFeatureData.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 flex-shrink-0 ${
                        index === currentImageIndex
                          ? "border-forest-400 scale-110"
                          : "border-forest-700/30 hover:border-forest-500/50"
                      }`}
                    >
                      <NextImage
                        src={image || "/placeholder.svg"}
                        alt={`${selectedFeatureData.title} thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Booking Modal */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="w-[95vw] max-w-[500px] bg-forest-900/95 backdrop-blur-sm border-forest-700/30 text-stone-100 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-forest-400 to-amber-400 bg-clip-text text-transparent">
              Бронирование ретрита
            </DialogTitle>
            <DialogDescription className="text-stone-300 text-sm sm:text-base">
              Заполните форму, и мы свяжемся с вами для подтверждения бронирования
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleBookingSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-stone-200 text-sm">
                    Имя *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-forest-800/30 border-forest-600/30 text-stone-100 placeholder:text-stone-400 h-9 sm:h-10"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-stone-200 text-sm">
                    Телефон *
                  </Label>
                  <Input
                    id="phone"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-forest-800/30 border-forest-600/30 text-stone-100 placeholder:text-stone-400 h-9 sm:h-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-stone-200 text-sm">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-forest-800/30 border-forest-600/30 text-stone-100 placeholder:text-stone-400 h-9 sm:h-10"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label className="text-stone-200 text-sm">Пакет</Label>
                  <Select value={selectedPackage} onValueChange={setSelectedPackage}>
                    <SelectTrigger className="bg-forest-800/30 border-forest-600/30 text-stone-100 h-9 sm:h-10">
                      <SelectValue placeholder="Выберите пакет" />
                    </SelectTrigger>
                    <SelectContent className="bg-forest-800 border-forest-600/30">
                      {packages.map((pkg) => (
                        <SelectItem key={pkg.name} value={pkg.name} className="text-stone-100 hover:bg-forest-700/50">
                          <span className="block sm:hidden">{pkg.name}</span>
                          <span className="hidden sm:block">
                            {pkg.name} - {pkg.price}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-stone-200 text-sm">Гостей</Label>
                  <Select
                    value={formData.guests}
                    onValueChange={(value) => setFormData({ ...formData, guests: value })}
                  >
                    <SelectTrigger className="bg-forest-800/30 border-forest-600/30 text-stone-100 h-9 sm:h-10">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-forest-800 border-forest-600/30">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <SelectItem key={num} value={num.toString()} className="text-stone-100 hover:bg-forest-700/50">
                          {num} {num === 1 ? "чел." : "чел."}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label className="text-stone-200 text-sm">Заезд</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal bg-forest-800/30 border-forest-600/30 text-stone-100 hover:bg-forest-700/40 h-9 sm:h-10"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkInDate ? format(checkInDate, "dd.MM", { locale: ru }) : "Дата"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-forest-800 border-forest-600/30" align="start">
                      <Calendar
                        mode="single"
                        selected={checkInDate}
                        onSelect={setCheckInDate}
                        disabled={(date) => date < new Date() || date < new Date("2024-07-05")}
                        initialFocus
                        className="text-stone-100"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label className="text-stone-200 text-sm">Выезд</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal bg-forest-800/30 border-forest-600/30 text-stone-100 hover:bg-forest-700/40 h-9 sm:h-10"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkOutDate ? format(checkOutDate, "dd.MM", { locale: ru }) : "Дата"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-forest-800 border-forest-600/30" align="start">
                      <Calendar
                        mode="single"
                        selected={checkOutDate}
                        onSelect={setCheckOutDate}
                        disabled={(date) =>
                          date < new Date() || date > new Date("2024-07-14") || (checkInDate && date <= checkInDate)
                        }
                        initialFocus
                        className="text-stone-100"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-stone-200 text-sm">
                  Пожелания
                </Label>
                <Textarea
                  id="message"
                  placeholder="Ваши пожелания..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-forest-800/30 border-forest-600/30 text-stone-100 placeholder:text-stone-400 min-h-[60px] resize-none"
                />
              </div>

              <div className="bg-forest-800/20 rounded-lg p-3 border border-forest-600/30">
                <h4 className="font-semibold text-forest-400 mb-1 text-sm">Условия:</h4>
                <ul className="text-xs text-stone-300 space-y-0.5">
                  <li>• Предоплата 10 000 ₽ за человека</li>
                  <li>• Отмена за 7 дней без штрафа</li>
                  <li>• Всё включено: проживание, питание, трансфер</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsBookingOpen(false)}
                  className="flex-1 bg-forest-800/30 border-forest-600/50 text-stone-300 hover:bg-forest-700/40 hover:text-stone-200 hover:border-forest-500/70 transition-all duration-200 order-2 sm:order-1"
                >
                  <X className="h-4 w-4 mr-2" />
                  Отмена
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-500 hover:to-forest-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-200 order-1 sm:order-2"
                >
                  <CreditCard className="h-4 w-4 mr-2" />
                  Забронировать
                </Button>
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      {/* Map Modal */}
      <Dialog open={isMapOpen} onOpenChange={setIsMapOpen}>
        <DialogContent className="w-[95vw] max-w-[800px] bg-forest-900/95 backdrop-blur-sm border-forest-700/30 text-stone-100 p-0 max-h-[90vh] overflow-y-auto">
          <DialogHeader className="p-4 sm:p-6 pb-4">
            <DialogTitle className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-forest-400 to-amber-400 bg-clip-text text-transparent flex items-center gap-2 sm:gap-3">
              <div className="bg-gradient-to-r from-forest-500 to-forest-600 w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center">
                <MapPin className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
              </div>
              Деревня Виллагора
            </DialogTitle>
            <DialogDescription className="text-stone-300 text-sm sm:text-base">
              посёлок Виллагора, Чалнинское сельское поселение, Пряжинский район, Республика Карелия
              <br />
              <span className="text-forest-400 font-mono text-xs sm:text-sm">Координаты: 61.891373, 33.688970</span>
            </DialogDescription>
          </DialogHeader>

          <div className="relative h-64 sm:h-96 bg-forest-800/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2134.8!2d33.688970!3d61.891373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjHCsDUzJzI5LjAiTiAzM8KwNDEnMjAuMyJF!5e0!3m2!1sru!2sru!4v1640000000000!5m2!1sru!2sru"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-b-lg"
            />
          </div>

          <div className="p-4 sm:p-6 pt-4">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                className="flex-1 bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-500 hover:to-forest-600 text-white border-0 text-sm sm:text-base"
                onClick={() => window.open(`https://maps.google.com/?q=61.891373,33.688970`, "_blank")}
              >
                <MapPin className="h-4 w-4 mr-2" />
                Открыть в Google Maps
              </Button>
              <Button
                className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white border-0 text-sm sm:text-base"
                onClick={() => {
                  navigator.clipboard.writeText("61.891373, 33.688970")
                  // Можно добавить уведомление о копировании
                }}
              >
                📋 Скопировать координаты
              </Button>
            </div>

            <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-forest-800/20 rounded-lg border border-forest-600/30">
              <h4 className="font-semibold text-forest-400 mb-2 text-sm sm:text-base">Как добраться:</h4>
              <ul className="text-xs sm:text-sm text-stone-300 space-y-1">
                <li>• Из Петрозаводска: ~45 км по трассе А-121</li>
                <li>• Ближайшая ж/д станция: Пряжа (15 км)</li>
                <li>• Трансфер включен во все пакеты</li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      {/* Animated Nature Effects */}
      <AnimatedNature />

      {/* Nature Sounds Control */}
      <NatureSounds />
    </div>
  )
}
