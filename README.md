# 🍽️ FoodExpertisePortal

**Професійний портал з експертизи харчових продуктів**

> Платформа для стандартів харчової безпеки, систем менеджменту, лабораторних досліджень та освітніх матеріалів.

[![Version](https://img.shields.io/badge/version-v0.2.0-blue)](./ROADMAP.md)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![License](https://img.shields.io/badge/license-All%20rights%20reserved-red)](#-ліцензія)

---

## 🛠️ Технічний стек

| Технологія | Версія | Призначення |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16 | Framework (App Router, Turbopack) |
| [React](https://react.dev/) | 19 | UI (Server Components) |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | Стилізація + Dark Mode |
| [MDX](https://mdxjs.com/) | — | Навчальні матеріали |
| [next-intl](https://next-intl-docs.vercel.app/) | — | i18n (uk, en, ru) |
| [next-themes](https://github.com/pacocoursey/next-themes) | — | Перемикання теми |
| TypeScript | latest | Типізація |

---

## 🚀 Запуск

### Вимоги
- Node.js `>= 18.0`
- npm `>= 9.0`

```bash
# Клонування
git clone https://github.com/your-username/food-expertise-portal.git
cd food-expertise-portal

# Встановлення залежностей
npm install

# Dev-сервер
npm run dev
```

Відкрити: `http://localhost:3000/uk`

### Команди
```bash
npm run dev      # Режим розробки
npm run build    # Production збірка
npm run start    # Production сервер
npm run lint     # ESLint перевірка
```

---

## 📁 Структура проєкту

```
food-expertise-portal/
├── public/
│   ├── favicon.ico
│   ├── grid.svg
│   └── images/
│
├── src/
│   ├── app/
│   │   └── [locale]/              # uk | en | ru
│   │       ├── education/
│   │       ├── standards/
│   │       ├── systems/
│   │       ├── laboratory/
│   │       ├── glossary/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── layout/                # Header, Footer, PageContainer
│   │   ├── mdx/                   # Definition, KeyPoint, Warning...
│   │   └── theme/                 # ThemeProvider
│   │
│   ├── config/
│   │   ├── i18n.ts
│   │   └── app.ts
│   │
│   ├── content/                   # MDX контент курсів
│   │   └── uk/courses/
│   │
│   ├── lib/
│   │   └── mdx.ts
│   │
│   └── messages/                  # uk.json | en.json | ru.json
│
├── docs/
│   └── courses.md                 # Каталог курсів та їх зміст
│
├── ROADMAP.md
└── README.md
```

---

## 🏷️ Версіонування

Проєкт використовує [Semantic Versioning](https://semver.org/). Версія визначається в `package.json` і автоматично підтягується у Footer сайту.

```bash
npm version patch   # 0.2.0 → 0.2.1  (виправлення)
npm version minor   # 0.2.0 → 0.3.0  (нова функція)
npm version major   # 0.2.0 → 1.0.0  (breaking change)
```

Детальна історія змін — у [ROADMAP.md](./ROADMAP.md).

---

## 📄 Ліцензія

© 2021–2026 Попова Н.В., Мисюра Т.Г. Всі права захищено.  
Використання матеріалів — лише з посиланням на авторів та НУХТ.

---

## 📞 Контакти

| | Попова Наталія Вікторівна | Мисюра Тарас Григорович |
|---|---|---|
| **Роль** | Автор курсу | Співавтор + розробник порталу |
| **Посада** | к.т.н., доцент | к.т.н., доцент |
| **Кафедра** | Експертизи харчових продуктів | Процесів і апаратів харчових виробництв |
| **Email** | [nata_2506@nuft.edu.ua](mailto:nata_2506@nuft.edu.ua) | [taras_as@nuft.edu.ua](mailto:taras_as@nuft.edu.ua) |

🏛️ НУХТ · ННІХТ · м. Київ, вул. Володимирська, 68 · [nuft.edu.ua](https://nuft.edu.ua)

---

<div align="center">Зроблено з ❤️ в Україні</div>
