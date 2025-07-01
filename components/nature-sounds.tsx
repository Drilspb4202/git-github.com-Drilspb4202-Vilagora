"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX, Play, Pause, ChevronUp, ChevronDown, Music } from "lucide-react"
import { Slider } from "@/components/ui/slider"

interface NatureSoundsProps {
  className?: string
}

export function NatureSounds({ className = "" }: NatureSoundsProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState([0.5])
  const [currentSound, setCurrentSound] = useState("forest")
  const [isExpanded, setIsExpanded] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const sounds = [
    {
      id: "forest",
      name: "Лес",
      icon: "🌲",
      url: "/sounds/forest.mp3",
      fallbackUrl: "https://assets.mixkit.co/active_storage/sfx/212/212.mp3",
    },
    {
      id: "water",
      name: "Озеро",
      icon: "🌊",
      url: "/sounds/water.mp3",
      fallbackUrl: "https://assets.mixkit.co/active_storage/sfx/2515/2515.mp3",
    },
    {
      id: "fire",
      name: "Костер",
      icon: "🔥",
      url: "/sounds/fire.mp3",
      fallbackUrl: "https://assets.mixkit.co/active_storage/sfx/555/555.mp3",
    },
    {
      id: "rain",
      name: "Дождь",
      icon: "🌧️",
      url: "/sounds/rain.mp3",
      fallbackUrl: "https://assets.mixkit.co/active_storage/sfx/149/149.mp3",
    },
  ]

  // Инициализация аудио элемента только один раз при монтировании компонента
  useEffect(() => {
    // Создаем аудио элемент
    const audio = new Audio();
    
    // Обработчик для событий
    const handleCanPlayThrough = () => {
      setIsLoaded(true);
    };
    
    const handleError = (e: Event) => {
      console.error("Ошибка загрузки аудио:", e);
      setError("Ошибка загрузки звука");
      setIsPlaying(false);
    };
    
    const handleEnded = () => {
      // Дополнительная проверка для зацикливания
      if (audio && isPlaying) {
        audio.currentTime = 0;
        audio.play().catch(err => {
          console.log("Ошибка автовоспроизведения:", err);
          setError("Не удалось воспроизвести звук");
          setIsPlaying(false);
        });
      }
    };
    
    // Настройка аудио
    audio.preload = "auto";
    audio.loop = true;
    audio.volume = volume[0];
    
    // Добавляем обработчики событий
    audio.addEventListener('canplaythrough', handleCanPlayThrough);
    audio.addEventListener('error', handleError);
    audio.addEventListener('ended', handleEnded);
    
    // Сохраняем ссылку на аудио элемент
    audioRef.current = audio;
    
    // Очистка при размонтировании
    return () => {
      if (audio) {
        audio.pause();
        audio.removeEventListener('canplaythrough', handleCanPlayThrough);
        audio.removeEventListener('error', handleError);
        audio.removeEventListener('ended', handleEnded);
        audioRef.current = null;
      }
    };
  }, []);

  // Обновление громкости при изменении значения слайдера
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume[0];
    }
  }, [volume]);

  // Обработка взаимодействия с пользователем для мобильных устройств
  useEffect(() => {
    const handleUserInteraction = () => {
      // Предзагрузка звука при первом взаимодействии пользователя
      if (audioRef.current && !audioRef.current.src) {
        const sound = sounds.find((s) => s.id === currentSound);
        if (sound) {
          audioRef.current.src = sound.url;
          audioRef.current.load();
        }
      }
    };

    // Добавляем обработчики для первого взаимодействия
    document.addEventListener('click', handleUserInteraction, { once: true });
    document.addEventListener('touchstart', handleUserInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, [currentSound]);

  const togglePlay = async () => {
    if (!audioRef.current) return;
    setError(null);

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      const sound = sounds.find((s) => s.id === currentSound);
      if (sound && audioRef.current) {
        // Проверяем, нужно ли менять источник
        if (!audioRef.current.src.includes(currentSound)) {
          audioRef.current.src = sound.url;
          audioRef.current.load();
        }
        
        try {
          setIsLoaded(false);
          const playPromise = audioRef.current.play();
          
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                setIsPlaying(true);
              })
              .catch((error) => {
                console.log("Ошибка воспроизведения, используем запасной источник:", error);
                
                // Пробуем запасной источник
                if (audioRef.current) {
                  audioRef.current.src = sound.fallbackUrl;
                  audioRef.current.load();
                  
                  audioRef.current.play()
                    .then(() => {
                      setIsPlaying(true);
                    })
                    .catch((fallbackError) => {
                      console.log("Ошибка воспроизведения запасного источника:", fallbackError);
                      setError("Не удалось воспроизвести звук. Разрешите автовоспроизведение в настройках браузера.");
                      setIsPlaying(false);
                    });
                }
              });
          }
        } catch (error) {
          console.log("Общая ошибка воспроизведения:", error);
          setError("Ошибка воспроизведения");
          setIsPlaying(false);
        }
      }
    }
  };

  const changeSound = async (soundId: string) => {
    setCurrentSound(soundId);
    setError(null);
    
    const sound = sounds.find((s) => s.id === soundId);
    if (!sound || !audioRef.current) return;
    
    // Всегда меняем источник при смене звука
    audioRef.current.src = sound.url;
    audioRef.current.load();
    
    if (isPlaying) {
      try {
        setIsLoaded(false);
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Ошибка при смене звука, используем запасной источник:", error);
            
            if (audioRef.current) {
              audioRef.current.src = sound.fallbackUrl;
              audioRef.current.load();
              
              audioRef.current.play().catch((fallbackError) => {
                console.log("Ошибка воспроизведения запасного источника:", fallbackError);
                setError("Не удалось воспроизвести звук");
                setIsPlaying(false);
              });
            }
          });
        }
      } catch (error) {
        console.log("Общая ошибка при смене звука:", error);
        setIsPlaying(false);
      }
    }
  };

  const currentSoundData = sounds.find((s) => s.id === currentSound);

  return (
    <div className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 ${className}`}>
      {/* Toggle Button - Always Visible */}
      <div className="flex flex-col items-end gap-2">
        {/* Expanded Player */}
        <div
          className={`transition-all duration-300 transform ${
            isExpanded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95 pointer-events-none"
          }`}
        >
          <div className="bg-forest-900/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-forest-700/30 shadow-2xl min-w-[260px] sm:min-w-[280px]">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <Button
                size="sm"
                variant="ghost"
                onClick={togglePlay}
                className="text-forest-300 hover:text-forest-200 hover:bg-forest-800/50 p-1 sm:p-2"
              >
                {isPlaying ? <Pause className="h-3 w-3 sm:h-4 sm:w-4" /> : <Play className="h-3 w-3 sm:h-4 sm:w-4" />}
              </Button>

              <div className="flex items-center gap-1 sm:gap-2 flex-1">
                <span className="text-base sm:text-lg">{currentSoundData?.icon}</span>
                <span className="text-forest-200 text-xs sm:text-sm font-medium">{currentSoundData?.name}</span>
              </div>

              <div className="flex items-center gap-1">
                {isPlaying && (
                  <div className="flex gap-0.5 sm:gap-1">
                    <div className="w-0.5 h-2 sm:w-1 sm:h-3 bg-forest-400 rounded-full animate-pulse"></div>
                    <div className="w-0.5 h-1.5 sm:w-1 sm:h-2 bg-forest-400 rounded-full animate-pulse animation-delay-200"></div>
                    <div className="w-0.5 h-3 sm:w-1 sm:h-4 bg-forest-400 rounded-full animate-pulse animation-delay-400"></div>
                  </div>
                )}
                {!isPlaying && isLoaded && error && (
                  <span className="text-red-400 text-xs">!</span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
              <VolumeX className="h-3 w-3 sm:h-4 sm:w-4 text-forest-400" />
              <Slider value={volume} onValueChange={setVolume} max={1} step={0.1} className="w-16 sm:w-20" />
              <Volume2 className="h-3 w-3 sm:h-4 sm:w-4 text-forest-400" />
            </div>

            <div className="grid grid-cols-2 gap-1 sm:gap-2">
              {sounds.map((sound) => (
                <Button
                  key={sound.id}
                  size="sm"
                  variant={currentSound === sound.id ? "default" : "ghost"}
                  onClick={() => changeSound(sound.id)}
                  className={`text-xs py-1 px-2 sm:py-2 sm:px-3 h-auto ${
                    currentSound === sound.id
                      ? "bg-forest-600 text-white"
                      : "text-forest-300 hover:text-forest-200 hover:bg-forest-800/50"
                  }`}
                >
                  <span className="mr-1 text-xs">{sound.icon}</span>
                  <span className="text-xs">{sound.name}</span>
                </Button>
              ))}
            </div>
            
            {error && (
              <div className="mt-2 text-xs text-red-400 text-center">
                {error}
              </div>
            )}
          </div>
        </div>

        {/* Compact Toggle Button */}
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`bg-forest-900/90 backdrop-blur-md border border-forest-700/30 shadow-2xl hover:bg-forest-800/90 transition-all duration-300 ${
            isExpanded ? "rounded-full p-2 sm:p-3" : "rounded-2xl py-2 px-3 sm:py-3 sm:px-4"
          }`}
          size="sm"
        >
          <div className="flex items-center gap-1 sm:gap-2">
            <Music className="h-3 w-3 sm:h-4 sm:w-4 text-forest-300" />
            {!isExpanded && (
              <>
                <span className="text-forest-200 text-xs sm:text-sm hidden sm:inline">Звуки природы</span>
                <span className="text-forest-200 text-xs sm:hidden">Звуки</span>
                {isPlaying && (
                  <div className="flex gap-0.5 sm:gap-1">
                    <div className="w-0.5 h-1.5 sm:w-1 sm:h-2 bg-forest-400 rounded-full animate-pulse"></div>
                    <div className="w-0.5 h-2 sm:w-1 sm:h-3 bg-forest-400 rounded-full animate-pulse animation-delay-200"></div>
                    <div className="w-0.5 h-1.5 sm:w-1 sm:h-2 bg-forest-400 rounded-full animate-pulse animation-delay-400"></div>
                  </div>
                )}
              </>
            )}
            {isExpanded ? (
              <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 text-forest-300" />
            ) : (
              <ChevronUp className="h-3 w-3 sm:h-4 sm:w-4 text-forest-300" />
            )}
          </div>
        </Button>
      </div>
    </div>
  )
}
