"use client"

import { useState } from "react"
import { CldImage } from "next-cloudinary"

interface CloudinaryImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  onLoad?: () => void
}

export function CloudinaryImage({
  src,
  alt,
  width = 800,
  height = 600,
  className = "",
  priority = false,
  onLoad,
}: CloudinaryImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  // Извлекаем публичный ID из URL, если ссылка уже в формате Cloudinary
  const getCloudinaryPublicId = () => {
    // Если это уже публичный ID Cloudinary
    if (!src.includes("http")) {
      return src
    }
    
    // Если это URL с ImgBB, нужно будет загрузить изображение в Cloudinary
    // и получить публичный ID. В этом примере мы просто передаем URL
    return src
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder/Skeleton */}
      {!isLoaded && <div className="absolute inset-0 skeleton rounded-lg"></div>}

      <CldImage
        src={getCloudinaryPublicId()}
        alt={alt}
        width={width}
        height={height}
        className={`object-cover transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        priority={priority}
        onLoad={handleLoad}
        quality={90}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}
