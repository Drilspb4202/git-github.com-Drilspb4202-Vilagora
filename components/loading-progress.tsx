"use client"

interface LoadingProgressProps {
  progress: number
  className?: string
}

export function LoadingProgress({ progress, className = "" }: LoadingProgressProps) {
  return (
    <div className={`w-full bg-forest-900/30 rounded-full h-2 ${className}`}>
      <div
        className="bg-gradient-to-r from-forest-500 to-forest-400 h-2 rounded-full transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
