import React from 'react';

export default function Head() {
  // Добавляем случайное число к URL изображения, чтобы мессенджеры обновили кэш
  const imageVersion = Math.floor(Math.random() * 10000);
  
  return (
    <>
      <title>Ретрит в Карелии | Отдых на природе в Виллагоре | Экотуризм</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Уникальный ретрит в Карелии с проживанием в Виллагоре. Отдых на природе, баня на дровах, чистейшее озеро Сямозеро, карельская кухня, экотуры." />
      
      {/* OpenGraph теги с версионированием для обхода кэша */}
      <meta property="og:title" content="Ретрит в Карелии | Виллагора" />
      <meta property="og:description" content="Уникальный ретрит с проживанием в Карелии. Перезагрузка души в окружении хвойных лесов." />
      <meta property="og:image" content={`https://www.villagora.ru/images/hero/hero.jpg?v=${imageVersion}`} />
      <meta property="og:url" content="https://www.villagora.ru" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Ретрит Карелия" />
    </>
  );
}
