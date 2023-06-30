<h1 align="center">Salam messenger</h1>

# Работа находится по адресу [Netlify](https://deploy--heroic-narwhal-c23110.netlify.app/)

# Макет приложения (немного отличается от риализации) [Figma](https://www.figma.com/file/FaWv54YtO9KdXAkqTSFKo7/MessengerSalam?type=design&node-id=0-1&t=RbZvfVu2JYjkag7f-0)

### Запуск проекта

```
npm run start - запускает билд и express
npm run build - билдит
```

Запускается на порте 3000

### Используемые технологии

- typeScript
- viteJs
- EventBus - шина событий
- eslit
- prettier - выбран вместо stylelint

### Архитектура проекта

- vite.config.js - конфигурация вебпака

- EventBus.ts - шина событий

- Block.ts - главный класс блока

- src

  -api
  -xhr.ts - главный класс для апи

  - components
    - button - кнопка (может быть в 3-х вариантах)
    - input
    - modal - враппер модалок
    - popup - попап пока используется только для смены аватарки и сброса пароля
    - index.js - сюда сливаются все шаблоны компонентов для удобства
    - index.less - сюда сливаются все стили компонентов для удобства
  - fonts - шрифты решил положить в src для удобства подключения

  - pages

    - loginPage - главный страница авторизации
    - chatPage - главная страница с чатом
    - profilePage - страница пользователя
    - registrationPage - страница регистрации
      - index.tmpl.ts - класс страницы
      - styles.less - стили страницы
    - index.ts - сюда сливаются все шаблоны страниц для удобства
    - index.less - сюда сливаются все стили страниц для удобства

  - favicon.ico - иконка пока лежит в src, иначе она не будет видна

  - index.html - главный html файл - подключаются стили, js и содержит рут компонент

  - main.ts - главный ts файл в котором компилятся шаблоны и настраивается роутинг
