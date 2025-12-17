import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
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
        <Link
          to="/login"
          className="px-8 py-4 text-lg bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition shadow-md"
        >
          Почати роботу
        </Link>
      </section>
      <section className="max-w-6xl mx-auto px-8 py-16 grid md:grid-cols-3 gap-10">
        <div className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Статистика</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Перегляд ключових показників у реальному часі на дашборді.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Користувачі</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Додавання, редагування та управління користувачами.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Замовлення</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Контроль статусів замовлень та їх обробка в один клік.
          </p>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
