# Этапы выполнения проекта

## 1. Создание проекта

- Установите Node.js (версия 18 или выше).
- Создайте новую папку для проекта:

```bash
mkdir my-frontend-project && cd my-frontend-project
```
- Инициализируйте проект с помощью npm:

```bash
npm init -y
```
- Установите инструменты сборки (например, Vite):

```bash
npm create vite@latest . --template react
```
- Следуйте инструкциям и выберите шаблон для React.

## 2. Настройка проекта

- Установите дополнительные зависимости:
npm install axios react-router-dom
Эти библиотеки понадобятся для работы с API и маршрутизации.
- Настройте ESLint и Prettier:
- Установите пакеты:

```bash
npm install eslint prettier eslint-plugin-react eslint-config-prettier --save-dev
```
- Создайте файлы конфигурации .eslintrc.json и .prettierrc.

## 3. Разработка интерфейса
- Создайте базовую структуру проекта:
• src/components — для UI-компонентов;
• src/pages — для страниц;
• src/styles — для стилей;
• src/App.jsx — основной файл маршрутизации.

- Перенесите UI-компоненты из предыдущих заданий в src/components.
- Разработайте базовые страницы приложения:
• Главная страница (Home) — информация о приложении.
• Авторизация (Login) — вход пользователя.
• Каталог (Products) — отображение списка товаров (если эта страница
необходима.

## 4. Работа с API
- Настройте файл src/api.js:

```
import axios from 'axios';
const api = axios.create({
baseURL: 'https://api.example.com',
});
export default api;
```

- Реализуйте запросы к API, например:
• авторизация пользователя;
• загрузка списка товаров.

## 5. Маршрутизация
### Настройте маршруты в App.jsx, используя react-router-dom:
```
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Login from './pages/Login';
function App() {
return (
<Router>
<Routes>
<Route path=”/” element={<Home />} />
<Route path=”/products” element={<Products />} />
<Route path=”/login” element={<Login />} />
</Routes>
</Router>
);
}
export default App;
```

## 6. Добавление Service Worker
- Установите библиотеку workbox:
```bash
npm install workbox-webpack-plugin
```
- Настройте Service Worker для офлайн-режима и кэширования данных.

## 7. Сборка и развёртывание
- Выполните команду сборки run build:

```bash
npm run build
```
- Проверьте папку dist для подтверждения успешной сборки.
- Разместите проект на платформе:
• Vercel;
• Netlify;
• сервер с Docker и Nginx.