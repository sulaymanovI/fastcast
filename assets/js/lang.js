const translations = {
    ru: {
        main_title: "FastCast",
        main_subtitle: "FastCast — скорость, которая приносит прибыль.<br>FastCast — делай быстрее, зарабатывай больше.<br>FastCast — технологии без очередей.",
        learn_more_btn: "Узнать больше",

        menu_main: "Главная",
        menu_about: "О нас",
        menu_features: "Преимущества",
        menu_contact: "Контакты",

        about_title: "FastCast — умный прогноз заказов и запасов для фастфуда",
        about_text: "FastCast — это инновационный стартап, который помогает фастфудам работать быстрее и эффективнее. Наша система прогнозирует заказы и контролирует складские запасы, чтобы снизить потери и избежать ошибок при хранении блюд.<br><br>Благодаря точным прогнозам FastCast рестораны сокращают очереди, экономят ресурсы и повышают прибыль — всё за счёт умной автоматизации процессов.",
        about_btn: "Узнать больше",

        why_title: "Почему FastCast важен для ресторанов",
        why_p1: "Рестораны теряют прибыль из-за неэффективного прогнозирования заказов и хранения блюд. FastCast решает эту проблему с помощью умных алгоритмов прогнозирования спроса и запасов.",

        problem_title: "Проблема рынка",
        problem_text: "🍲 До 15% блюд выбрасываются из-за неверных прогнозов.<br>⏱ В часы пик 40% гостей ждут дольше 15 минут.",

        solution_title: "Решение — FastCast",
        solution_text: "Наша система прогнозирует спрос по часам и дням, снижая списания на 25–40%. FastCast помогает готовить ровно столько, сколько нужно.",

        effect_title: "Экономический эффект",
        effect_text: "Снижение фудкоста всего на 1% повышает прибыль ресторана на 4%. FastCast делает это возможным.",
				lower_losses: "Хотите ускорить обслуживание?",

        contact_title: "Свяжитесь с нами",
        contact_text: "Мы будем рады ответить на ваши вопросы и рассказать больше о FastCast.",
        footer: "Copyright © 2025 FastCast Company"
    },

    uz: {
        main_title: "FastCast",
        main_subtitle: "FastCast — foyda keltiradigan tezlik.<br>FastCast — tezroq ishlang, ko‘proq daromad oling.<br>FastCast — navbatlarsiz texnologiyalar.",
        learn_more_btn: "Batafsil",

        menu_main: "Bosh sahifa",
        menu_about: "Biz haqimizda",
        menu_features: "Afzalliklar",
        menu_contact: "Aloqa",

        about_title: "FastCast — fastfudlar uchun aqlli buyurtma va zaxira prognozi",
        about_text: "FastCast — fastfudlar tez va samarali ishlashi uchun yaratilgan innovatsion tizim. U buyurtmalarni oldindan prognoz qiladi va ombordagi mahsulotlarni nazorat qiladi.<br><br>Aniq prognozlar tufayli restoranlar navbatlarni kamaytiradi, resurslarni tejaydi va daromadni oshiradi.",
        about_btn: "Batafsil",

        why_title: "Nega FastCast restoranlar uchun muhim",
        why_p1: "Restoranlar noto‘g‘ri prognozlar sabab foydani yo‘qotadi. FastCast bu muammoni aqlli algoritmlar yordamida hal qiladi.",

        problem_title: "Bozor muammosi",
        problem_text: "🍲 Restoranlarda 15% gacha taomlar noto‘g‘ri rejalashtirish sabab tashlab yuboriladi.<br>⏱ Peak paytlarda 40% mijozlar  15 daqiqadan ko‘proq kutadi.",

        solution_title: "Yechim — FastCast",
        solution_text: "Tizim kun va soatlarga qarab talabni prognoz qiladi, chiqindilarni 25–40% ga kamaytiradi.",

        effect_title: "Iqtisodiy samaradorlik",
        effect_text: "Foodcostni 1% ga kamaytirish restoran foydasini 4% ga oshiradi. FastCast buni ta’minlaydi.",
				lower_losses: "Xizmat ko‘rsatishni tezlashtirmoqchimisiz?",

        contact_title: "Biz bilan bog‘laning",
        contact_text: "Biz FastCast haqida ko‘proq ma’lumot berish va savollaringizga javob berishdan mamnunmiz.",
        footer: "Copyright © 2025 FastCast Company"
    }
};


function applyLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        element.innerHTML = translations[lang][key];
    });
}

// Язык по умолчанию
applyLanguage("ru");
