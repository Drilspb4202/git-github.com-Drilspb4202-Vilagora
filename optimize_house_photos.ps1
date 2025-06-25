# 🏠 Скрипт оптимизации фотографий дома для проекта Виллагора
# Автоматически изменяет размер всех фото до 800x600px и оптимизирует их

param(
    [string]$InputFolder = ".\house_photos_original",
    [string]$OutputFolder = ".\public\images\accommodation",
    [int]$Width = 800,
    [int]$Height = 600,
    [int]$Quality = 85
)

Write-Host "🏠 ОПТИМИЗАЦИЯ ФОТОГРАФИЙ ДОМА ДЛЯ ВИЛЛАГОРА" -ForegroundColor Green
Write-Host "=============================================" -ForegroundColor Green
Write-Host ""

# Проверяем наличие папок
if (!(Test-Path $InputFolder)) {
    Write-Host "❌ Папка с исходными фото не найдена: $InputFolder" -ForegroundColor Red
    Write-Host "📁 Создайте папку 'house_photos_original' и поместите туда все фото дома" -ForegroundColor Yellow
    New-Item -ItemType Directory -Path $InputFolder -Force | Out-Null
    Write-Host "✅ Папка создана: $InputFolder" -ForegroundColor Green
    Write-Host "📋 Поместите туда все фотографии дома и запустите скрипт снова" -ForegroundColor Cyan
    Read-Host "Нажмите Enter для выхода"
    exit
}

if (!(Test-Path $OutputFolder)) {
    New-Item -ItemType Directory -Path $OutputFolder -Force | Out-Null
    Write-Host "✅ Создана папка для результата: $OutputFolder" -ForegroundColor Green
}

# Получаем список всех изображений
$imageExtensions = @("*.jpg", "*.jpeg", "*.png", "*.bmp", "*.tiff", "*.webp")
$images = @()
foreach ($ext in $imageExtensions) {
    $images += Get-ChildItem -Path $InputFolder -Filter $ext -File
}

if ($images.Count -eq 0) {
    Write-Host "❌ Изображения не найдены в папке: $InputFolder" -ForegroundColor Red
    Write-Host "📋 Поддерживаемые форматы: JPG, JPEG, PNG, BMP, TIFF, WEBP" -ForegroundColor Yellow
    Read-Host "Нажмите Enter для выхода"
    exit
}

Write-Host "📊 Найдено изображений: $($images.Count)" -ForegroundColor Cyan
Write-Host "📐 Целевой размер: ${Width}x${Height}px" -ForegroundColor Cyan
Write-Host "🎯 Качество: $Quality%" -ForegroundColor Cyan
Write-Host ""

# Загружаем .NET сборки для работы с изображениями
Add-Type -AssemblyName System.Drawing
Add-Type -AssemblyName System.Drawing.Imaging

# Функция для изменения размера изображения
function Resize-Image {
    param(
        [string]$InputPath,
        [string]$OutputPath,
        [int]$Width,
        [int]$Height,
        [int]$Quality
    )
    
    try {
        # Загружаем исходное изображение
        $originalImage = [System.Drawing.Image]::FromFile($InputPath)
        
        # Вычисляем пропорции для обрезки по центру
        $sourceWidth = $originalImage.Width
        $sourceHeight = $originalImage.Height
        
        $sourceRatio = $sourceWidth / $sourceHeight
        $targetRatio = $Width / $Height
        
        if ($sourceRatio -gt $targetRatio) {
            # Исходное изображение шире - обрезаем по ширине
            $cropWidth = [int]($sourceHeight * $targetRatio)
            $cropHeight = $sourceHeight
            $cropX = [int](($sourceWidth - $cropWidth) / 2)
            $cropY = 0
        } else {
            # Исходное изображение выше - обрезаем по высоте
            $cropWidth = $sourceWidth
            $cropHeight = [int]($sourceWidth / $targetRatio)
            $cropX = 0
            $cropY = [int](($sourceHeight - $cropHeight) / 2)
        }
        
        # Создаем новое изображение
        $newImage = New-Object System.Drawing.Bitmap($Width, $Height)
        $graphics = [System.Drawing.Graphics]::FromImage($newImage)
        
        # Настраиваем качество
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        
        # Обрезаем и изменяем размер
        $srcRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropWidth, $cropHeight)
        $destRect = New-Object System.Drawing.Rectangle(0, 0, $Width, $Height)
        $graphics.DrawImage($originalImage, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
        
        # Настраиваем параметры сохранения JPG
        $jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
        $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $Quality)
        
        # Сохраняем
        $newImage.Save($OutputPath, $jpegCodec, $encoderParams)
        
        # Освобождаем ресурсы
        $graphics.Dispose()
        $newImage.Dispose()
        $originalImage.Dispose()
        
        return $true
    }
    catch {
        Write-Host "❌ Ошибка обработки $InputPath : $($_.Exception.Message)" -ForegroundColor Red
        return $false
    }
}

# Обрабатываем каждое изображение
$processed = 0
$errors = 0

foreach ($image in $images) {
    $inputPath = $image.FullName
    $baseName = [System.IO.Path]::GetFileNameWithoutExtension($image.Name)
    $outputPath = Join-Path $OutputFolder "$baseName.jpg"
    
    Write-Host "🔄 Обрабатываем: $($image.Name)" -ForegroundColor Yellow
    
    if (Resize-Image -InputPath $inputPath -OutputPath $outputPath -Width $Width -Height $Height -Quality $Quality) {
        $processed++
        
        # Показываем информацию о файле
        $fileInfo = Get-Item $outputPath
        $fileSizeKB = [math]::Round($fileInfo.Length / 1KB, 1)
        Write-Host "   ✅ Готово: $($fileInfo.Name) ($fileSizeKB КБ)" -ForegroundColor Green
    } else {
        $errors++
    }
}

Write-Host ""
Write-Host "🎉 ОБРАБОТКА ЗАВЕРШЕНА!" -ForegroundColor Green
Write-Host "========================" -ForegroundColor Green
Write-Host "✅ Обработано успешно: $processed" -ForegroundColor Green
Write-Host "❌ Ошибок: $errors" -ForegroundColor Red
Write-Host "📁 Результат сохранен в: $OutputFolder" -ForegroundColor Cyan

if ($processed -gt 0) {
    Write-Host ""
    Write-Host "📋 СЛЕДУЮЩИЕ ШАГИ:" -ForegroundColor Yellow
    Write-Host "1. Проверьте качество фотографий в папке: $OutputFolder" -ForegroundColor White
    Write-Host "2. Переименуйте файлы по схеме: house-1.jpg, house-2.jpg, house-3.jpg..." -ForegroundColor White
    Write-Host "3. Обновите код сайта для отображения всех 30 фотографий" -ForegroundColor White
}

Read-Host "`nНажмите Enter для завершения"
