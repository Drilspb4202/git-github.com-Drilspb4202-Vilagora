# 🔥 Фотографии бани на дровах

## 📁 Структура папки:

```
public/images/sauna/
├── sauna-exterior-1.jpg      # Внешний вид бани
├── sauna-interior-1.jpg      # Интерьер бани
├── sauna-steam-room.jpg      # Парная комната
├── sauna-relaxation-area.jpg # Комната отдыха
└── sauna-evening-view.jpg    # Вечерний вид с террасы
```

## 🎯 Описание каждого фото:

### 1. **sauna-exterior-1.jpg** - Внешний вид бани
- **Что показать**: Деревянная баня на фоне карельской природы
- **Время съемки**: Золотой час (закат/рассвет)
- **Ракурс**: Общий план, показывающий архитектуру
- **Детали**: Дымоход, деревянная отделка, окружающий лес

### 2. **sauna-interior-1.jpg** - Интерьер бани
- **Что показать**: Внутреннее убранство предбанника
- **Детали**: Деревянные скамьи, вешалки, уютное освещение
- **Атмосфера**: Теплая, домашняя, приглашающая
- **Элементы**: Полотенца, веники, традиционные аксессуары

### 3. **sauna-steam-room.jpg** - Парная комната
- **Что показать**: Парная с деревянными полками
- **Детали**: Печь-каменка, ковш, термометр
- **Освещение**: Мягкий свет, создающий атмосферу
- **Материалы**: Натуральное дерево, камни

### 4. **sauna-relaxation-area.jpg** - Комната отдыха
- **Что показать**: Зона релаксации после парной
- **Детали**: Удобные кресла/диваны, стол, чай
- **Атмосфера**: Спокойная, расслабляющая
- **Элементы**: Травяные чаи, мед, варенье

### 5. **sauna-evening-view.jpg** - Вечерний вид с террасы
- **Что показать**: Терраса бани с видом на природу
- **Время**: Вечер, возможно звездное небо
- **Детали**: Деревянная терраса, кресла, фонари
- **Атмосфера**: Романтичная, умиротворяющая

## 📐 Технические требования:

### **Размеры и качество:**
- **Основные фото**: 1200×800px (горизонтальные)
- **Вертикальные допустимы**: 800×1200px
- **Качество**: 85-90%
- **Формат**: JPG или WebP
- **Вес**: 150-300 КБ каждое

### **Стиль съемки:**
- **Освещение**: Теплое, естественное
- **Цветовая гамма**: Теплые тона (дерево, огонь, золотой час)
- **Композиция**: Сбалансированная, показывающая детали
- **Настроение**: Уютное, расслабляющее, аутентичное

## 🎨 Цветовая схема:

- **Основные цвета**: Коричневый (дерево), оранжевый (огонь)
- **Дополнительные**: Зеленый (природа), золотой (свет)
- **Акценты**: Красный (угли), белый (пар, полотенца)

## 🔧 Интеграция в код:

Фотографии уже подключены в `app/page.tsx`:
```javascript
{
  id: "sauna",
  title: "Баня на дровах",
  images: [
    "/images/sauna/sauna-exterior-1.jpg",
    "/images/sauna/sauna-interior-1.jpg", 
    "/images/sauna/sauna-steam-room.jpg",
    "/images/sauna/sauna-relaxation-area.jpg",
    "/images/sauna/sauna-evening-view.jpg",
  ]
}
```

## 📱 Адаптивность:

Галерея автоматически адаптируется к ориентации фото:
- **Горизонтальные**: `object-fit: cover` (красиво заполняют экран)
- **Вертикальные**: `object-fit: contain` (показываются полностью)
- **Мобильная оптимизация**: Свайпы, большие кнопки, плавная прокрутка

## 🎉 Готово к использованию!

После добавления 5 фотографий в эту папку, блок "Баня на дровах" будет полностью функционален с красивой адаптивной галереей!
