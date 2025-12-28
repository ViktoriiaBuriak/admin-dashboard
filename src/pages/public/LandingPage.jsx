import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const {t} = useTranslation();
  return (
    <>
      <section className="max-w-5xl mx-auto px-8 py-20 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          {t('landing.hero_title_1')}
          <br />
          <span className="text-purple-500">{t('landing.hero_title_2')}</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
          {t('landing.hero_description')}
        </p>
        <Link
          to="/login"
          className="px-8 py-4 text-lg bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition shadow-md"
        >
          {t('landing.get_started')}
        </Link>
      </section>
      <section className="max-w-6xl mx-auto px-8 py-16 grid md:grid-cols-3 gap-10">
        <div className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">{t('landing.features.stats_title')}</h3>
          <p className="text-gray-600 dark:text-gray-300">
            {t('landing.features.stats_desc')}
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">{t('landing.features.users_title')}</h3>
          <p className="text-gray-600 dark:text-gray-300">
            {t('landing.features.users_desc')}
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">{t('landing.features.orders_title')}</h3>
          <p className="text-gray-600 dark:text-gray-300">
            {t('landing.features.orders_desc')}
          </p>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
