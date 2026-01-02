# Admin Dashboard

A modern admin dashboard built with React, focused on clean UI, responsive layout, and clear architecture.

## ✨ Features

- Authentication (Redux-based, frontend-only)
- Dashboard with analytics overview
- Orders management
- Users management
- Profile settings (name & avatar stored locally)
- Theme switcher (dark / light)
- Language switcher (EN / UA)
- Responsive layout (desktop & mobile)
- Reusable UI components

## 🛠 Tech Stack

- React
- Redux Toolkit
- React Router
- Tailwind CSS
- i18next
- Vite

## 📊 Dashboard

Dashboard metrics are calculated from existing users and orders data to simulate real analytics.

## 🌍 Internationalization

The application supports:
- English
- Ukrainian

Language can be switched dynamically from the UI.

## 🎨 Theming

- Light / Dark mode
- Theme preference stored locally

## 🔐 Authentication

Authentication is currently implemented on the frontend using Redux.
No real backend is connected at this stage.

### Planned:
- Integration with ReqRes API (https://reqres.in) for real authentication and users data.

## 🚀 Getting Started

```bash
npm install
npm run dev
