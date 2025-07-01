"use client"

import Image from "next/image"
import { useState } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  placeholder?: string
  onLoad?: () => void
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  placeholder,
  onLoad,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setHasError(true)
  }

  if (hasError) {
    return (
      <div className={`bg-forest-800/20 flex items-center justify-center ${className}`}>
        <div className="text-forest-400 text-center">
          <div className="text-2xl mb-2">🖼️</div>
          <p className="text-sm">Изображение загружается...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder/Skeleton */}
      {!isLoaded && <div className="absolute inset-0 skeleton rounded-lg"></div>}

      {/* Low quality placeholder if provided */}
      {placeholder && !isLoaded && (
        <Image src={placeholder || "/placeholder.svg"} alt={alt} fill className="object-cover blur-sm" quality={10} />
      )}

      {/* Main image */}
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        fill={!width && !height}
        className={`object-cover transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        priority={priority}
        quality={90}
        onLoad={handleLoad}
        onError={handleError}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}
