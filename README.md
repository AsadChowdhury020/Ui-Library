# 🎨 React UI Component Library (Vite + Tailwind CSS)

## 📌 Project Description
This project is a simple **React UI Component Library** built using **Vite and Tailwind CSS**.  
It includes reusable and customizable UI components such as:

- 🔘 Button (multiple variants)
- 🧾 Card (content container)
- 🪟 Modal (popup dialog)

The goal of this project is to demonstrate **component reusability, clean architecture, and modern UI design practices** in React.

---

## 🛠️ Technologies Used
- React.js  
- Vite  
- Tailwind CSS  
- JavaScript (ES6+)  

---

## 📂 Project Structure
```
src/
│── components/
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Modal.jsx
│── App.jsx
│── main.jsx
│── index.css
```

---

## ⚙️ Features
- Reusable UI components  
- Multiple button variants (primary, secondary, danger)  
- Clean and modern card design  
- Functional modal with overlay  
- Responsive and user-friendly UI  
- Component-based architecture  

---

## ▶️ Installation Instructions

### 1. Clone the repository
```bash
git clone https://github.com/AsadChowdhury020/Ui-Library
```

### 2. Navigate to project folder
```bash
cd Ui-Library
```

### 3. Install dependencies
```bash
npm install
```

### 4. Run the project
```bash
npm run dev
```

---

## 🚀 Usage Guidelines

### 🔘 Button Component
```jsx
<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Delete</Button>
```

---

### 🧾 Card Component
```jsx
<Card title="Card Title">
  <p>This is a reusable card component.</p>
</Card>
```

---

### 🪟 Modal Component
```jsx
const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open Modal</Button>

<Modal isOpen={open} onClose={() => setOpen(false)}>
  <p>This is a modal content.</p>
</Modal>
```

---

## 🧠 Concepts Used
- Component-based architecture  
- Props passing  
- State management (`useState`)  
- Reusable UI design  
- Tailwind CSS styling  
