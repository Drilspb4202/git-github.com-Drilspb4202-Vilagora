# Настройка Telegram бота для приема заявок

## Шаг 1: Создание бота

1. Откройте Telegram и найдите бота @BotFather
2. Отправьте команду `/newbot`
3. Введите имя для вашего бота (например: "Карелия Ретрит Бот")
4. Введите username для бота (например: "karelia_retreat_bot")
5. Скопируйте полученный токен

## Шаг 2: Получение Chat ID

### Вариант 1: Личные сообщения
1. Найдите бота @userinfobot в Telegram
2. Отправьте ему любое сообщение
3. Он пришлет вам ваш Chat ID

### Вариант 2: Групповой чат
1. Добавьте вашего бота в группу
2. Найдите бота @userinfobot
3. Добавьте его в ту же группу
4. Отправьте любое сообщение в группу
5. @userinfobot пришлет Chat ID группы

## Шаг 3: Настройка переменных окружения

1. Откройте файл `.env.local`
2. Замените `YOUR_BOT_TOKEN_HERE` на токен вашего бота
3. Замените `YOUR_CHAT_ID_HERE` на полученный Chat ID

Пример:
```
TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHAT_ID=123456789
```

## Шаг 4: Тестирование

1. Перезапустите приложение
2. Заполните форму бронирования на сайте
3. Проверьте, что сообщение пришло в Telegram

## Формат сообщения

Бот будет отправлять сообщения в следующем формате:

```
🏞️ НОВАЯ ЗАЯВКА НА РЕТРИТ В КАРЕЛИИ

👤 Имя: Иван Иванов
📞 Телефон: +7 (999) 123-45-67
📧 Email: ivan@example.com
📦 Пакет: Эко-тур "Карельские леса"
👥 Количество гостей: 2 чел.
📅 Заезд: 15.07.2024
📅 Выезд: 18.07.2024
💬 Пожелания: Хотим тихое место для отдыха

⏰ Время подачи заявки: 10.07.2024 14:30
```

## Безопасность

⚠️ **Важно**: Никогда не публикуйте токен бота в открытом доступе!
- Добавьте `.env.local` в `.gitignore`
- Используйте переменные окружения на продакшене
- Регулярно обновляйте токены
