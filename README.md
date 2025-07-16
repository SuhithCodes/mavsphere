# MavSphere 🧑‍🎓🌐

**The Academic Networking Platform for Graduate Students & Academics**

---

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-13-blue)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://react.dev/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-green)](https://www.prisma.io/)
[![MySQL](https://img.shields.io/badge/Database-MySQL-orange)](https://www.mysql.com/)

---

## 🏷️ Tags

`#AcademicNetworking` `#GraduateStudents` `#Mentorship` `#CareerDevelopment` `#NextJS` `#React` `#Prisma` `#MySQL` `#WebApp`

---

## 📖 About the Project

**MavSphere** is a full-featured web application designed to connect graduate students, researchers, and academics. It fosters collaboration, career development, and knowledge sharing through a suite of interactive features:

- **Academic Forums & Messaging**
- **Mentorship Program**
- **Career Opportunities (Jobs & Internships)**
- **Event Calendar & Registration**
- **Resource Library & Roadmaps**
- **Profile Management & Networking**

The platform is built with a modern stack (Next.js 13, React 18, Prisma, MySQL, Tailwind, NextAuth) and follows best practices for scalability, security, and user experience.

---

## ✨ Features

### 👤 User & Profile
- Secure authentication (NextAuth, JWT, OAuth-ready)
- User registration & onboarding
- Rich profile with education, experience, skills, research, social links
- Avatar upload & profile editing
- Privacy controls

### 🗣️ Academic Forums & Messaging
- Browse, subscribe, and participate in academic forums
- Post questions, discussions, and resources
- Real-time messaging (peer-to-peer)
- Notifications for replies and messages

### 🎓 Mentorship Program
- Mentor/mentee matching
- Request, accept, and manage mentorship relationships
- Track mentorship status (pending, active, completed)
- Mentor/mentee profile highlights

### 💼 Career Opportunities
- Browse and search job & internship listings
- Filter by company, location, type, skills, etc.
- Application tracking (M:M user-job relationship)
- Admin: Add/edit job/internship postings

### 📅 Events & Activities
- Academic event calendar (conferences, workshops, deadlines)
- Register for events, track attendance
- Event details, location, organizer info
- Recent activities & upcoming events on dashboard

### 📚 Resources & Roadmaps
- Curated articles, guides, and career roadmaps
- Downloadable resources (PDF, CSV)
- Categorized by career stage, research area, or skill

### ⚙️ Settings & Admin
- Profile and account settings
- Admin dashboard (add/edit resources, moderate forums)
- Role-based access (user, mentor, admin)

### 🌐 Landing & Home
- Modern, minimalist landing page
- About, team, and service highlights
- Quick access to all platform features

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 13** (App directory, SSR, API routes)
- **React 18**
- **Tailwind CSS** (utility-first styling)
- **Radix UI** (accessible UI primitives)
- **Framer Motion** (animations)
- **Leaflet/Google Maps** (event/location mapping)

### Backend
- **Node.js** (API layer)
- **NextAuth** (authentication)
- **Prisma ORM** (database access)
- **MySQL** (relational database)
- **Axios** (API requests)

### Other Libraries
- **Lucide React** (icons)
- **React Icons**
- **Sonner** (toasts/notifications)
- **BcryptJS** (password hashing)
- **TanStack Table** (data tables)
- **Radix UI** (dialogs, menus, etc.)

---

## 🏗️ Architecture & Implementation Notes

- **Monorepo Structure:** All features are modularized under `app/` and `components/` for scalability.
- **API Routes:** RESTful endpoints under `app/api/` for articles, listings, roadmaps, authentication, etc.
- **Database:** MySQL schema managed via Prisma and raw SQL (see `prisma/schema.prisma` and `mavsphere.sql`).
- **Authentication:** NextAuth with JWT, session, and OAuth support. Custom signup/login flows.
- **Data Flow:** Static data (JSON/CSV) for landing/resources; dynamic data via API for user/content features.
- **UI Components:** Reusable, accessible components in `components/ui/` and `components/page-components/`.
- **State Management:** React context/providers for auth, theme, and notifications.
- **Styling:** Tailwind CSS with custom themes and dark mode support.
- **Testing:** (Add details if tests exist)

---

## 📦 Deployment Notes

- **Production Build:**
  ```bash
  npm run build
  npm run start
  ```
- **Environment Variables:**
  - Create `.env.local` with:
    ```bash
    DATABASE_URL=your-mysql-connection-string
    NEXTAUTH_SECRET=your-secret
    NEXTAUTH_URL=https://your-domain.com
    NEXT_PUBLIC_POSITIONSTACK_API_KEY=your-api-key
    ```
- **Database Setup:**
  - Run migrations with Prisma or import `mavsphere.sql` for initial schema.
- **CPanel Deployment:**
  - Upload build output, set environment variables, and start the Node.js app.
- **Static Assets:**
  - Place images and downloads in `public/`.

---

## 🧑‍💻 Implementation Details

- **API Endpoints:**
  - `/api/auth` (login, signup, session)
  - `/api/listings` (jobs, internships)
  - `/api/roadmaps` (career resources)
  - `/api/articles` (resource articles)
- **Database Models:**
  - Users, Profiles, Education, Experience, Skills, Events, Forums, Posts, Mentorship, Jobs, Internships, Applications
- **Static Data:**
  - Landing/services/team/events in `app/data/landing-page/`
  - Career resources in `app/data/resources/`

---

## 📚 Course Information

**CSE-5335-002 Web Data Management**  
**Team Members:**
- **Riddhi Dhanani** (1002194201)
- **Aliza Gowlani** (1002170065)
- **Varun Dhanalakota** (1002167514)
- **Pavan Gogineni** (1002167456)
- **Suhith Ghanathay** (1002170591)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.x or later)
- npm or yarn

### Installation
```bash
git clone https://github.com/SuhithCodes/mavsphere.git
cd mavsphere
npm install
# or
yarn install
```

### Running Locally
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000)

---

## 📜 Available Scripts
- `npm run dev` / `yarn dev` - Development server
- `npm run build` / `yarn build` - Production build
- `npm run start` / `yarn start` - Start production server
- `npm run lint` / `yarn lint` - Lint codebase

---

## 📝 User Guide
See `user-guide.pdf` for a detailed walkthrough.

### Demo Credentials
- **Username:** john.doe@example.com
- **Password:** qwerty123

---

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.
