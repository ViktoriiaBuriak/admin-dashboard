import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="w-full py-6 px-8 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl font-bold">
          Admin<span className="text-purple-500">Dashboard</span>
        </h1>
        <nav className="flex gap-4">
          <Link to="/login" className="px-4 py-2 rounded-xl bg-purple-500 text-white hover:bg-purple-600 transition">Увійти</Link>
          <Link to="/register" className="px-4 py-2 rounded-xl border border-purple-500 text-purple-500 hover:bg-purple-600 hover:text-white transition">Реєстрація</Link>
        </nav>
      </header>
      <section className="max-w-5xl mx-auto px-8 py-20 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          Керуйте даними
          <br />
          <span className="text-purple-500">швидко та зручно</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
          Простий та сучасний інтерфейс адміністративної панелі для керування
          користувачами, замовленнями та аналітикою.
        </p>
        <Link to="/login" className="px-8 py-4 text-lg bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition shadow-md">Почати роботу</Link>
      </section>
      <section className="max-w-6xl mx-auto px-8 py-16 grid md:grid-cols-3 gap-10">
        <div className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Статистика</h3>
          <p className="text-gray-600 dark:text-gray-300">Перегляд ключових показників у реальному часі на дашборді.</p>
        </div>
        <div className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Користувачі</h3>
          <p className="text-gray-600 dark:text-gray-300">Додавання, редагування та управління користувачами.</p>
        </div>
        <div className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Замовлення</h3>
          <p className="text-gray-600 dark:text-gray-300">Контроль статусів замовлень та їх обробка в один клік.</p>
        </div>
      </section>
      <footer className="text-center py-6 text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
        © {new Date().getFullYear()} AdminDashboard. Всі права захищені.
      </footer>
    </div>
  );
};

export default LandingPage;
