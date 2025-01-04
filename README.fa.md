# برنامه Movie DB 🎬

[Read This In En](./README.md)

برای اجرای پروژه روی لوکال

```bash
npm run start
```

یک اپلیکیشن React Native برای مرور فیلم‌ها و سریال‌ها. این پروژه از API پایگاه داده فیلم برای دریافت اطلاعات به‌روز استفاده می‌کند.

## 📱 امکانات

- مرور فیلم‌ها و سریال‌ها
- فیلتر بر اساس ژانر، محبوبیت و امتیاز
- مشاهده اطلاعات کامل هر عنوان

## 🛠 تکنولوژی‌های استفاده شده

- [Node.js](https://nodejs.org/) - پلتفرم اجرای جاوااسکریپت
- [React Native](https://reactnative.dev/) - فریم‌ورک توسعه موبایل
- [Expo](https://expo.dev/) - پلتفرم توسعه
- [NativeWind](https://www.nativewind.dev/) - کتابخانه استایل‌دهی

## 📚 ساختار پروژه

```
Movie-DB/
├── assets/
├── src/
│   ├── components/
│   │   ├── ui/          # کامپوننت‌های Glustack UI
│   │   └── example.jsx  # نمونه کامپوننت‌ها
│   └── styles/
│       └── global.css   # استایل‌های سراسری (Tailwind)
```

## 🚀 شروع به کار

برای راهنمای نصب و مشارکت در پروژه، [راهنمای مشارکت](./CONTRIBUTING.md) را مطالعه کنید.

---

# راهنمای مشارکت در Movie DB 🎬

این راهنما به شما کمک می‌کند تا پروژه را روی سیستم خود راه‌اندازی کنید و اولین مشارکت خود را انجام دهید. نگران نباشید اگر تازه‌کار هستید - ما هر مرحله را با هم پیش می‌رویم!

## 💻 پیش‌نیازها

1. ساخت [حساب کاربری GitHub](https://github.com/signup)
2. نصب ابزارهای مورد نیاز:
   - [Node.js](https://nodejs.org/) (نسخه 20.10.0 پیشنهاد می‌شود)
   - [Git](https://git-scm.com/downloads)
   - [Visual Studio Code](https://code.visualstudio.com/)

## 🔧 مراحل راه‌اندازی

### 1. نصب Node.js

1. به [وب‌سایت Node.js](https://nodejs.org/) بروید
2. نسخه 20.10.0 را دانلود کنید
3. نصب‌کننده را اجرا کنید
4. نصب را تایید کنید:

```bash
node --version
npm --version
```

### 2. نصب Git

1. به [وب‌سایت Git](https://git-scm.com/downloads) بروید
2. دانلود و نصب کنید
3. نصب را تایید کنید:

```bash
git --version
```

### 3. راه‌اندازی VS Code

1. [Visual Studio Code](https://code.visualstudio.com/) را نصب کنید
2. افزونه پیشنهادی را نصب کنید:
   - Prettier - Code formatter

### 4. دریافت و راه‌اندازی پروژه

1. ترمینال را باز کنید (در ویندوز: Command Prompt)
2. مخزن را کلون کنید:

```bash
git clone https://github.com/Amir-A-M/Movie-DB.git
cd Movie-DB
```

3. وابستگی‌ها را نصب کنید:

```bash
npm install
```

### پوشه Movie-DB در vsCode باز کنید

مطمئن شوید که این دکمه رو بزنید
![Manage Unsafe Repos](./readme_files/Manage%20Unsafe%20Repos.png)

و بعد میتوانید `CTRL + \`` برای باز کردن ترمینال vscode استفاده کنید

## 🌿 ایجاد تغییرات

### 1. ایجاد شاخه جدید

```bash
# به جای 'username' نام خود و به جای 'feature-name' نام ویژگی را قرار دهید
git checkout -b feature/username/feature-name
```

مثال:

```bash
git checkout -b feature/ali/add-search-button
```

### 2. اعمال تغییرات

1. پروژه را در VS Code باز کنید
2. تغییرات خود را اعمال کنید
3. همه فایل‌ها را ذخیره کنید

### 3. ثبت تغییرات

```bash
# افزودن تغییرات
git add .

# ثبت با پیام توضیحی
git commit -m "اضافه کردن دکمه جستجو به صفحه اصلی"  # همچنین میتونید از رابط گرافیکی vscode استفاده کنید

# ارسال شاخه
git push origin feature/username/feature-name
```

### 4. ایجاد Pull Request

1. به [مخزن پروژه](https://github.com/Amir-A-M/Movie-DB.git) بروید
2. روی 'Pull requests' کلیک کنید
3. روی 'New Pull Request' کلیک کنید
4. شاخه خود را انتخاب کنید
5. روی 'Create pull request' کلیک کنید
6. توضیحات تغییرات را اضافه کنید
7. ارسال کنید!

## ❓ نیاز به کمک دارید؟

- اگر در جایی گیر کردید، از هم‌تیمی‌ها یا نگهدارندگان پروژه کمک بگیرید
- مستندات ابزارهای مورد استفاده را بررسی کنید:
  - [مستندات React Native](https://reactnative.dev/docs/getting-started)
  - [مستندات Expo](https://docs.expo.dev/)
  - [مستندات NativeWind](https://www.nativewind.dev/overview/)

موفق باشید! 🚀
