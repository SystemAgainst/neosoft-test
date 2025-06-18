Вот переписанный и структурированный `README.md`:

````markdown
# Task List SPA на Vue 3 + TypeScript + Vuex

Приложение для работы со списком задач: добавление, удаление, переключение статуса, фильтрация. Архитектура построена по FSD (Feature-Sliced Design).

## 🚀 Технологии

- Vue 3
- TypeScript
- Vuex 4
- Vite
- FSD-архитектура
- Без UI-фреймворков

## 📁 Структура

- `src/entities/` — бизнес-сущности (например, task)
- `src/features/` — фичи (add-task, фильтры)
- `src/widgets/` — крупные блоки (например, список задач)
- `src/app/` — App.vue, router, store
- `src/shared/` — общие типы, утилиты, стили

## 📦 Установка

```sh
yarn
````

## 🧪 Запуск проекта в режиме разработки

```sh
yarn dev
```

## 📦 Сборка проекта

```sh
yarn build
```

## 🧹 Линтинг

```sh
yarn lint
```

## 🌐 Продакшен

```
https://neosoft-test.vercel.app/
```
