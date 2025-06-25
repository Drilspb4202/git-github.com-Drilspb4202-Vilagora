# Создание 30 placeholder файлов для фотографий дома

Write-Host "Создание placeholder файлов для фотографий дома..." -ForegroundColor Green

$outputDir = "public\images\accommodation"

# Создаем папку если не существует
if (!(Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
}

# Создаем 30 placeholder файлов
for ($i = 1; $i -le 30; $i++) {
    $fileName = "house-$i.jpg"
    $filePath = Join-Path $outputDir $fileName
    
    if (!(Test-Path $filePath)) {
        New-Item -ItemType File -Path $filePath -Force | Out-Null
        Write-Host "Создан: $fileName" -ForegroundColor Cyan
    } else {
        Write-Host "Уже существует: $fileName" -ForegroundColor Gray
    }
}

Write-Host ""
Write-Host "Готово! Создано 30 placeholder файлов для фотографий дома." -ForegroundColor Green
Write-Host "Папка: $outputDir" -ForegroundColor Yellow
