import { NextResponse } from 'next/server';

// API endpoint для сброса кэша и принудительного обновления превью
export async function GET() {
  // Генерируем новую версию для обхода кэша
  const version = Date.now();
  
  // Можно добавить логику для отправки запросов в API соцсетей для очистки кэша
  // Например, использовать Facebook Sharing Debugger API

  return NextResponse.json({ 
    success: true, 
    message: 'Cache invalidation triggered', 
    version,
    previewUrl: `https://www.villagora.ru/telegram-preview.html?v=${version}`
  });
}
