# Movie DB App 🎬

[این را به فارسی بخوانید](./README.fa.md)
to start the project in local

```bash
npm run start
```

A React Native application for browsing movies and TV shows. This project uses The Movie Database API to fetch real-time data.

## 📱 Features

- Browse movies and TV shows
- Filter by genre, popularity, and rating
- View detailed information about each title

## 🛠 Tech Stack

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [React Native](https://reactnative.dev/) - Mobile app framework
- [Expo](https://expo.dev/) - Development platform
- [NativeWind](https://www.nativewind.dev/) - Utility-first styling

## 📚 Project Structure

```
Movie-DB/
├── assets/
├── src/
│   ├── components/
│   │   ├── ui/          # Glustack UI components
│   │   └── example.jsx  # Component examples
│   └── styles/
│       └── global.css   # Global styles (Tailwind)
```

## 🚀 Getting Started

See our [Contributing Guide](./CONTRIBUTING.md) for detailed setup instructions and how to contribute.

---

# Contributing to Movie DB 🎬

This guide will help you set up the project locally and make your first contribution. Don't worry if you're new to this - we'll walk through each step!

## 💻 Prerequisites

1. Create a [GitHub Account](https://github.com/signup)
2. Install required tools:
   - [Node.js](https://nodejs.org/) (v20.10.0 recommended)
   - [Git](https://git-scm.com/downloads)
   - [Visual Studio Code](https://code.visualstudio.com/)

## 🔧 Setup Steps

### 1. Install Node.js

1. Go to [Node.js website](https://nodejs.org/)
2. Download version 20.17.0
3. Run the installer
4. Verify installation:

```bash
node --version
npm --version
```

### 2. Install Git

1. Go to [Git website](https://git-scm.com/downloads)
2. Download and run the installer
3. Verify installation:

```bash
git --version
```

### 3. Setup VS Code

1. Install [Visual Studio Code](https://code.visualstudio.com/)
2. Install recommended extension:
   - Prettier - Code formatter

### 4. Clone & Setup Project

1. Open terminal (Command Prompt on Windows) in a folder you keep your projects in
2. Clone the repository:

```bash
git clone https://github.com/Amir-A-M/Movie-DB.git
cd Movie-DB
```

3. Install dependencies:

```bash
npm install
```

### Open the Movie-DB folder in vsCode

make sure to hit this button
![Manage Unsafe Repos](./readme_files/Manage%20Unsafe%20Repos.png)

after that use `CTRL + \`` to open terminal in vscode

and to run web
```bash
npm run web
```

## 🌿 Making Changes

### 1. Create a New Branch

```bash
# Replace 'username' with your name and 'feature-name' with what you're working on
git checkout -b feature/username/feature-name
```

Example:

```bash
git checkout -b feature/alex/add-search-button
```

### 2. Make Your Changes

1. Open the project in VS Code
2. Make your changes
3. Save all files

### 3. Commit Your Changes

```bash
# Add your changes
git add .

# Commit with a descriptive message
git commit -m "Add search button to home screen" # you can also use vscode GUI

# Push your branch
git push origin feature/username/feature-name
```

### 4. Create a Pull Request

1. Go to [project repository](https://github.com/Amir-A-M/Movie-DB.git)
2. Click 'Pull requests'
3. Click 'New Pull Request'
4. Select your branch
5. Click 'Create pull request'
6. Add description of your changes
7. Submit!

## ❓ Need Help?

- If you're stuck, ask your teammates or project maintainers
- Check the documentation of tools we use:
  - [React Native Docs](https://reactnative.dev/docs/getting-started)
  - [Expo Docs](https://docs.expo.dev/)
  - [NativeWind Docs](https://www.nativewind.dev/overview/)

Happy coding! 🚀
