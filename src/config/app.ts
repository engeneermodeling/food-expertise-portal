// src/config/app.ts
import packageJson from '../../package.json';

export const APP_NAME = 'FoodExpertisePortal';
export const APP_VERSION = packageJson.version;
export const APP_DESCRIPTION = 'Професійний портал з експертизи харчових продуктів';
export const BUILD_DATE = new Date().toLocaleDateString('uk-UA');

// Інформація про авторів
export const AUTHORS = {
  primary: {
    name: 'Попова Наталія Вікторівна',
    role: 'Основний автор курсу лекцій',
    email: 'nata_2506@nuft.edu.ua',
    department: 'Кафедра експертизи харчових продуктів',
  },
  developer: {
    name: 'Мисюра Тарас Григорович',
    role: 'Співавтор курсу лекцій та розробник порталу',
    email: 'taras_as@nuft.edu.ua',
    department: 'Кафедра процесів і апаратів харчових виробництв',
  },
};

export const INSTITUTION = {
  name: 'Національний університет харчових технологій',
  shortName: 'НУХТ',
  institute: 'Навчально-науковий інститут харчових технологій',
  instituteShort: 'ННІХТ',
  address: 'м. Київ, вул. Володимирська, 68',
  website: 'https://nuft.edu.ua',
};