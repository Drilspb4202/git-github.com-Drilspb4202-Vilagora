# Скрипт для создания 30 placeholder файлов для дома
Write-Host "Создание 30 placeholder файлов для блока 'Уютный дом'..." -ForegroundColor Green

$baseDir = "public\images\accommodation"

# Создаем 30 файлов house-1.jpg до house-30.jpg
for ($i = 1; $i -le 30; $i++) {
    $fileName = "house-$i.jpg"
    $fullPath = Join-Path $baseDir $fileName
    
    if (!(Test-Path $fullPath)) {
        New-Item -ItemType File -Path $fullPath -Force | Out-Null
        Write-Host "Создан: $fileName" -ForegroundColor Cyan
    } else {
        Write-Host "Уже существует: $fileName" -ForegroundColor Gray
    }
}

Write-Host "`nГотово! Создано 30 placeholder файлов для дома." -ForegroundColor Green
Write-Host "Файлы: house-1.jpg до house-30.jpg" -ForegroundColor Yellow
