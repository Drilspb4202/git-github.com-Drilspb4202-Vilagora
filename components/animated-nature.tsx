"use client"

import { useEffect, useState } from "react"

interface AnimatedNatureProps {
  className?: string
}

export function AnimatedNature({ className = "" }: AnimatedNatureProps) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number; type: string }>>(
    [],
  )

  useEffect(() => {
    // Generate floating particles (leaves, snowflakes, etc.)
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 10,
      type: Math.random() > 0.5 ? "leaf" : "sparkle",
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute animate-float opacity-30 ${
            particle.type === "leaf" ? "text-forest-400" : "text-amber-300"
          }`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        >
          {particle.type === "leaf" ? "🍃" : "✨"}
        </div>
      ))}

      {/* Animated waves for water sections */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-20">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>

      {/* Floating mist/fog effect */}
      <div className="absolute inset-0">
        <div className="mist mist1"></div>
        <div className="mist mist2"></div>
        <div className="mist mist3"></div>
      </div>
    </div>
  )
}
