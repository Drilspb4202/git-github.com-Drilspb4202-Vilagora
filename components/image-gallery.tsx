"use client"

import { useState, useEffect } from "react"
import { OptimizedImage } from "./optimized-image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageGalleryProps {
  images: string[]
  title: string
  className?: string
}

export function ImageGallery({ images, title, className = "" }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set())

  // Preload next and previous images
  useEffect(() => {
    const preloadIndexes = [(currentIndex + 1) % images.length, (currentIndex - 1 + images.length) % images.length]

    preloadIndexes.forEach((index) => {
      const imageUrl = images[index]
      if (!preloadedImages.has(imageUrl)) {
        const img = new Image()
        img.src = imageUrl
        img.onload = () => {
          setPreloadedImages((prev) => new Set([...prev, imageUrl]))
        }
      }
    })
  }, [currentIndex, images, preloadedImages])

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className={`relative ${className}`}>
      <div className="relative h-96 rounded-lg overflow-hidden">
        <OptimizedImage
          src={images[currentIndex]}
          alt={`${title} ${currentIndex + 1}`}
          priority={currentIndex === 0}
          className="w-full h-full"
        />

        {/* Navigation */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 border-white/20 text-white hover:bg-black/70"
          onClick={prevImage}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 border-white/20 text-white hover:bg-black/70"
          onClick={nextImage}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex ? "bg-white scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all duration-200 ${
              index === currentIndex ? "border-forest-400 scale-110" : "border-transparent hover:border-forest-500/50"
            }`}
          >
            <OptimizedImage src={image} alt={`${title} thumbnail ${index + 1}`} className="w-full h-full" />
          </button>
        ))}
      </div>
    </div>
  )
}
