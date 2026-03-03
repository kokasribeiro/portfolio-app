# Nelson Ribeiro — Portfolio

A modern, responsive portfolio website showcasing professional experience, technical skills, and project work. Built with React and designed for clarity, performance, and a polished user experience.

---

## ✨ Features

- **Responsive design** — Optimized for desktop, tablet, and mobile
- **Dark / Light theme** — Theme toggle with persistence via `localStorage`
- **Scroll animations** — Smooth entrance animations on section visibility
- **Contact form** — Working contact form with email delivery via Resend
- **Project showcase** — Grid of projects with live demos and GitHub links
- **Skills carousel** — Animated carousel for frontend and backend technologies
- **Smooth navigation** — Hash-based routing with smooth scroll

---

## 🛠 Tech Stack

### Frontend

| Technology | Purpose |
|------------|---------|
| **React 19** | UI library |
| **Create React App** | Build tooling and dev server |
| **React Bootstrap** | Responsive layout and components |
| **React Router DOM** | Client-side routing |
| **React Router Hash Link** | Hash-based navigation (e.g. `#about`, `#projects`) |
| **React Bootstrap Icons** | Icon set |
| **Animate.css** | CSS animations |
| **react-on-screen** | Scroll-triggered visibility detection |

### Backend

| Technology | Purpose |
|------------|---------|
| **Express 5** | HTTP server |
| **Resend** | Transactional email delivery |
| **CORS** | Cross-origin requests |
| **dotenv** | Environment variable management |

### Development & Testing

| Technology | Purpose |
|------------|---------|
| **Jest** | Test runner |
| **React Testing Library** | Component testing |

---

## 📁 Project Structure

```
portfolio-app/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and fonts
│   ├── components/        # React components
│   │   ├── AnimatedOnScroll.js
│   │   ├── AboutMe.js
│   │   ├── Banner.js
│   │   ├── Contact.js
│   │   ├── NavBar.js
│   │   ├── ProjectCard.js
│   │   ├── Projects.js
│   │   └── Skills.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── server.js              # Express backend (contact form API)
├── package.json
└── vercel.json            # Vercel deployment config
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/kokasribeiro/portfolio-app.git
cd portfolio-app

# Install dependencies
npm install
```

### Development

```bash
# Start the React dev server (http://localhost:3000)
npm start

# Start the backend server for the contact form (http://localhost:5001)
npm run server
```

For the contact form to work locally, run both commands in separate terminals.

### Production Build

```bash
npm run build
```

The optimized build is output to the `build/` folder.

---

## ⚙️ Environment Variables

Create a `.env` file in the project root for the contact form backend:

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Resend API key for sending emails |
| `CONTACT_EMAIL` | Email address to receive form submissions |
| `FROM_EMAIL` | Verified sender email (e.g. `Portfolio <noreply@yourdomain.com>`) |
| `PORT` | Server port (default: 5001) |

For the frontend (e.g. when deployed separately):

| Variable | Description |
|----------|-------------|
| `REACT_APP_API_URL` | Backend API URL (e.g. `https://your-api.vercel.app`) |

---

## 📦 Deployment

The project is configured for deployment on **Vercel**:

- Frontend: static React build
- Backend: `server.js` can be deployed as a serverless function or separate service

Ensure environment variables are set in your Vercel project settings.

---

## 📄 License

This project is private. All rights reserved.

---

## 👤 Author

**Nelson Ribeiro**  
Web Developer · Geneva  
[GitHub](https://github.com/kokasribeiro) · [Get in Touch](#connect)
