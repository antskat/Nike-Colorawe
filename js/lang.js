function setLanguage(langCode) {
    localStorage.setItem("lang", langCode);
  
    const langUaElement = document.getElementById("lang-ua");
    const langEngElement = document.getElementById("lang-eng");
  
    if (langCode === "ua") {
      langUaElement.classList.add("lang-active");
      langEngElement.classList.remove("lang-active");
      document.getElementById("order-btn").style.left = "58.5%";
  
      const uaTranslations = {
        "main-page": 'Головна',
        "benefits-page": 'Переваги',
        "advantages-page": 'Переваги',
        "reviews-page": 'Відгуки',
        "contacts-page": 'Контакти',
        "order-page": 'Замовити',
        "hero-subtitle": 'Твій омріяний Nike',
        "hero-text": 'На цьому сайті ви можете знайти індивідуальні кросівки Nike своєї мрії. <br /> Оригінальна компанія не зможе створити таку красу <br /> кросівки як ми. <br /> Успіхів у пошуку кросівок на замовлення.',
        "hero-btn": 'Купити Nike',
        "advantages-title-1": 'Чудова якість',
        "advantages-title-2": 'Незмивна фарба',
        "advantages-title-3": 'Швидка доставка',
        "reviews-title": 'Відгуки',
        "reviews-text-1": 'Кросівки дуже зручні і добре пофарбовані, нічого не носили через рік.',
        "reviews-text-2": 'Я дуже задоволений цією кольоровою гамою. Вони відповідають всім моїм одяг.',
        "reviews-text-3": 'Якраз підійде, якщо вам потрібно піти на вечірку. Я ними активно користуюся, фарба супер.',
        "username-1": 'Джон Тейлор',
        "username-2": 'Елізабет Гарсія',
        "username-3": 'Том Макваре',
        "reg-date-1": 'Разом з нами з 2018',
        "reg-date-2": 'Разом з нами з 2020',
        "reg-date-3": 'Разом з нами з 2019',
        "order-title": 'Замовити',
        "order-btn": 'Підтвердити',
        "order-submit-btn": 'Замовити Nike',
        "your-email": 'Напишіть ваш Email',
        "your-country": 'Ваша країна',
        "your-city": 'Ваше місто',
        "your-address": 'Ваша адреса',
        "footer-questions-text-1": 'Є питання?',
        "footer-questions-text-2": 'Є пропозиція про співпрацю?',
        "footer-questions-text-3": 'Питання щодо реклами?',
        "copyright-text": '2022 ColoRawe @Всі права захищені',
        "copyright-us-text": 'Сполучені Штати',
      };
  
      for (const id in uaTranslations) {
        document.getElementById(id).innerHTML = uaTranslations[id];
        document.getElementById(id).placeholder = uaTranslations[id];
      }
    } else if (langCode === "eng") {
      window.location.reload();
      langEngElement.classList.add("lang-active");
      langUaElement.classList.remove("lang-active");
    }
  }
  
  document.getElementById("lang-ua").addEventListener("click", function () {
    setLanguage("ua");
  });
  
  document.getElementById("lang-eng").addEventListener("click", function () {
    setLanguage("eng");
  });
  