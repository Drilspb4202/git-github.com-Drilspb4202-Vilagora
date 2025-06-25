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
      <div className={`bg-gradient-to-br from-forest-800/20 to-forest-700/30 flex items-center justify-center ${className} border border-forest-600/20`}>
        <div className="text-forest-400 text-center p-4">
          <div className="text-3xl mb-2">🏞️</div>
          <p className="text-sm font-medium">Скоро здесь будет фото</p>
          <p className="text-xs text-forest-500 mt-1">Карельская природа</p>
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
