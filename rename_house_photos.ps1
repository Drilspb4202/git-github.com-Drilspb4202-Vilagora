# 🏠 Скрипт переименования фотографий дома
# Автоматически переименовывает все фото в папке по схеме house-1.jpg, house-2.jpg, etc.

param(
    [string]$FolderPath = ".\public\images\accommodation",
    [string]$Prefix = "house"
)

Write-Host "🏠 ПЕРЕИМЕНОВАНИЕ ФОТОГРАФИЙ ДОМА" -ForegroundColor Green
Write-Host "==================================" -ForegroundColor Green
Write-Host ""

if (!(Test-Path $FolderPath)) {
    Write-Host "❌ Папка не найдена: $FolderPath" -ForegroundColor Red
    Read-Host "Нажмите Enter для выхода"
    exit
}

# Получаем все JPG файлы
$images = Get-ChildItem -Path $FolderPath -Filter "*.jpg" -File | Sort-Object Name

if ($images.Count -eq 0) {
    Write-Host "❌ JPG файлы не найдены в папке: $FolderPath" -ForegroundColor Red
    Read-Host "Нажмите Enter для выхода"
    exit
}

Write-Host "📊 Найдено изображений: $($images.Count)" -ForegroundColor Cyan
Write-Host "📁 Папка: $FolderPath" -ForegroundColor Cyan
Write-Host "🏷️ Префикс: $Prefix" -ForegroundColor Cyan
Write-Host ""

# Показываем текущие имена файлов
Write-Host "📋 ТЕКУЩИЕ ФАЙЛЫ:" -ForegroundColor Yellow
for ($i = 0; $i -lt $images.Count; $i++) {
    Write-Host "   $($i + 1). $($images[$i].Name)" -ForegroundColor White
}

Write-Host ""
$confirm = Read-Host "Переименовать все файлы? (y/N)"

if ($confirm -ne "y" -and $confirm -ne "Y") {
    Write-Host "❌ Операция отменена" -ForegroundColor Red
    Read-Host "Нажмите Enter для выхода"
    exit
}

Write-Host ""
Write-Host "🔄 ПЕРЕИМЕНОВАНИЕ..." -ForegroundColor Yellow

$renamed = 0
$errors = 0

for ($i = 0; $i -lt $images.Count; $i++) {
    $oldName = $images[$i].Name
    $newName = "$Prefix-$($i + 1).jpg"
    $oldPath = $images[$i].FullName
    $newPath = Join-Path $FolderPath $newName
    
    try {
        if ($oldName -ne $newName) {
            Rename-Item -Path $oldPath -NewName $newName -Force
            Write-Host "   ✅ $oldName → $newName" -ForegroundColor Green
            $renamed++
        } else {
            Write-Host "   ⏭️ $oldName (уже правильное имя)" -ForegroundColor Gray
        }
    }
    catch {
        Write-Host "   ❌ Ошибка переименования $oldName : $($_.Exception.Message)" -ForegroundColor Red
        $errors++
    }
}

Write-Host ""
Write-Host "🎉 ПЕРЕИМЕНОВАНИЕ ЗАВЕРШЕНО!" -ForegroundColor Green
Write-Host "=============================" -ForegroundColor Green
Write-Host "✅ Переименовано: $renamed" -ForegroundColor Green
Write-Host "❌ Ошибок: $errors" -ForegroundColor Red

if ($renamed -gt 0) {
    Write-Host ""
    Write-Host "📋 РЕЗУЛЬТАТ:" -ForegroundColor Yellow
    $finalImages = Get-ChildItem -Path $FolderPath -Filter "$Prefix-*.jpg" -File | Sort-Object Name
    for ($i = 0; $i -lt $finalImages.Count; $i++) {
        Write-Host "   $($i + 1). $($finalImages[$i].Name)" -ForegroundColor Cyan
    }
}

Read-Host "`nНажмите Enter для завершения"
