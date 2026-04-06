# Nude — Romantic Dating App (Frontend)

## 🔹 Tech Stack

- React, TypeScript, Next.js (app router)
- Radix UI, CSS Modules
- Storybook для компонентов
- Node.js 20+, NPM

## 🔹 Запуск

1. `git clone git@github.com:velesfight/intership-project-nextjs.git`
2. в директории проекта создать файл `.env` с переменной, которая содержит api url:
   ```
   NEXT_PUBLIC_API_URL = 'https://dev-back-nude-sdhf43sd5f-v2.ghfls.ru
   ```
3. `npm i`
4. `npm run dev`

## My Contributions

Перенос проекта на Next.js с использованием app router
Адаптация компонентов для работы с серверным рендерингом ('use client' для интерактивных частей)
Создала структуру app/[locale]/layout.tsx и app/[locale]/(auth)/sign-in/page.tsx для локализации и авторизации.
Переписала существующие UI компоненты под Next.js (например, AuthLayout, Button).
Настроила навигацию через next-intl с кастомными Link и redirect.
Начала интеграцию авторизации: редиректы на страницу входа, проверка маршрутов, placeholder для SignInPage.
Учла особенности Next.js routing и app-директории, чтобы компоненты работали с серверным рендерингом и i18n.

⚠️ Этот проект находится в процессе: авторизация и функционал страниц ещё не завершены.
