# 🥚 Egg Timer Web Application

A retro-themed egg timer built with modern web technologies. This application allows users to track cooking times for different egg doneness levels with real-time countdown, visual feedback, and sound effects.

---

## Features

- Real-time countdown timer  
- Three egg presets:
  - Soft-boiled (6 minutes)
  - Medium-boiled (8 minutes)
  - Hard-boiled (12 minutes)
- Retro pixel-art UI design  
- Audio feedback (click + alarm sounds)  
- Visual progress bar  

---

## Screenshots

### Main Interface
<img width="1914" height="942" alt="ui_main" src="https://github.com/user-attachments/assets/99ecd7c3-c84e-4bb3-bce3-37a7d239f485" />

### Timer Running
<img width="1915" height="940" alt="ui_running" src="https://github.com/user-attachments/assets/dfeb4373-e7a3-4412-baa3-01997ed54fce" />

### Timer Complete
<img width="1918" height="946" alt="ui_complete" src="https://github.com/user-attachments/assets/a8969dc7-4c4d-4614-8047-766eb1305743" />

---

## Tech Stack

- Frontend: React (with Hooks)  
- Build Tool: Vite  
- Styling: Tailwind CSS  
- Language: TypeScript  
- Audio: Web Audio API  

---

## Getting Started (Run Locally)

### 1. Clone the Repository
```bash
git clone https://github.com/kevsvoid/egg-timer.git
cd egg-timer
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Install Required Dependencies
```bash
npm install react react-dom
```

### 4. Start Development Server
```bash
npm run dev
```

### 5. Open in Browser
http://localhost:5173/

---

## Notes

- Make sure Node.js (v18 or higher) is installed  
- Do not mix package managers (npm, pnpm, yarn)  

If you encounter errors:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📂 Project Structure

```bash
src/
├── main.tsx
├── app/
│   ├── App.tsx
│   ├── components/
│   │   └── PixelEgg.tsx
│   └── utils/
│       └── sounds.ts
└── styles/
```
