# Скрипт для создания placeholder изображений
# Создает пустые файлы для всех необходимых изображений

Write-Host "Создание placeholder изображений для проекта Виллагора..." -ForegroundColor Green

# Базовая папка
$baseDir = "public\images"

# Список всех необходимых изображений
$images = @(
    # Размещение
    "accommodation\house-exterior-1.jpg",
    "accommodation\house-exterior-2.jpg", 
    "accommodation\house-interior-living.jpg",
    "accommodation\house-interior-bedroom.jpg",
    "accommodation\kitchen-1.jpg",
    "accommodation\kitchen-2.jpg",
    
    # Еда
    "food\kalitki.jpg",
    "food\fresh-fish.jpg",
    "food\forest-berries.jpg",
    "food\mushroom-soup.jpg",
    
    # Природа
    "nature\syamozero-1.jpg",
    "nature\syamozero-2.jpg",
    "nature\syamozero-3.jpg",
    "nature\karelian-forest-1.jpg",
    "nature\karelian-forest-2.jpg",
    "nature\karelian-forest-3.jpg",
    
    # Активности
    "activities\mushroom-picking.jpg",
    "activities\berry-picking.jpg",
    "activities\fishing.jpg",
    "activities\forest-walk.jpg",
    
    # Велнес
    "wellness\sauna-exterior.jpg",
    "wellness\sauna-interior.jpg",
    "wellness\aromatherapy.jpg",
    
    # Развлечения
    "entertainment\karaoke.jpg",
    "entertainment\evening-gathering.jpg",
    
    # Трансфер
    "transport\transfer-car.jpg",
    
    # Галерея
    "gallery\hero-landscape.jpg",
    "gallery\sunrise-lake.jpg",
    "gallery\cozy-evening.jpg"
)

# Создание placeholder файлов
foreach ($image in $images) {
    $fullPath = Join-Path $baseDir $image
    $dir = Split-Path $fullPath -Parent
    
    # Создаем папку если не существует
    if (!(Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
        Write-Host "Создана папка: $dir" -ForegroundColor Yellow
    }
    
    # Создаем placeholder файл если не существует
    if (!(Test-Path $fullPath)) {
        # Создаем пустой файл
        New-Item -ItemType File -Path $fullPath -Force | Out-Null
        Write-Host "Создан placeholder: $image" -ForegroundColor Cyan
    } else {
        Write-Host "Уже существует: $image" -ForegroundColor Gray
    }
}

Write-Host "`nГотово! Создано $($images.Count) placeholder изображений." -ForegroundColor Green
Write-Host "Теперь вы можете заменить эти файлы на настоящие изображения." -ForegroundColor Yellow
