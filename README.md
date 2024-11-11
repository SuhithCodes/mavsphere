# MavSphere 🧑‍🎓🌐

**The Academic Networking Site**

MavSphere is an innovative web application designed to connect graduate students and academics, fostering collaboration and career development within the academic community. Built with **React** and **Next.js 13** using the new app directory structure and **JavaScript**, this platform enables users to explore forums, find job/internship opportunities, participate in academic events, and access mentorship resources.

## 📚 Course Information

**CSE-5335-002 Web Data Management**  
**Team Members:**

- **Riddhi Dhanani** (1002194201)
- **Aliza Gowlani** (1002170065)
- **Varun Dhanalakota** (1002167514)
- **Pavan Gogineni** (1002167456)
- **Suhith Ghanathay** (1002170591)

## 🚀 Getting Started

To get a local copy of this project up and running, follow these simple steps.

### Prerequisites 🧰

Make sure you have the following installed:

- Node.js (v18.x or later)
- npm or yarn

### Installation ⚙️

Clone the repository:

```bash
git clone https://github.com/SuhithCodes/mavsphere.git
```

Navigate to the project directory:

```bash
cd mavsphere
```

Install dependencies:

```bash
npm install
```

or

```bash
yarn install
```

Run the development server:

```bash
npm run dev
```

or

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## User Guide : Refer document "user-guide.pdf" for a detailed guide through

### Credentials

- **Username:** john.doe@example.com
- **Password:** qwerty123

## 🛠️ Technologies

- Next.js 13 with the app directory structure
- React 18
- JavaScript
- CSS Modules for styling
- Node.js (Backend)
- NextAuth for handling authentication

## 🏗️ Project Structure

```bash
.
├── app/
│   ├── landing/page                  # Landing pages
│   ├── home/page                     # Home pages
│   ├── networking              # networking pages
│   ├   ├── messaging/page            # messaging page
│   ├   ├── forums/page               # Forum pages
│   ├── resources                     # resources pages
│   ├    ├── career-development/page    # career development pages
│   ├    ├── mentorship-program/page    # mentorship program pages
│   ├── opportunities/page         # opportunites pages
│   ├── events/page                   # events page
│   └── layout.jsx                    # App layout
├── components/                   # Reusable components
├── public/                       # Static assets
├── styles/                       # Global and component-specific styles
├── lib/                          # Utility functions and custom hooks
├── context/                      # React Context providers
├── services/                     # API service functions
├── middleware.js                 # Next.js middleware
├── next.config.js                # Next.js configuration
└── jsconfig.json                 # JavaScript configuration
```

## 🔧 Setup

You can customize your environment by setting up a `.env.local` file for environment-specific configurations, such as API keys and backend URLs.

```bash

NEXT_PUBLIC_POSITIONSTACK_API_KEY= your-positionstack-url
```

## 📜 Available Scripts

- `npm run dev` or `yarn dev` - Runs the app in development mode.
- `npm run build` or `yarn build` - Builds the app for production.
- `npm run start` or `yarn start` - Starts the production server.
- `npm run lint` or `yarn lint` - Lints the codebase.

## 📊 ER Diagram Overview

MavSphere's database includes 15 tables with complex relationships between entities such as Users, Jobs, Internships, Events, Forums, and more. Key relationships include:

- **Users & Jobs/Internships:** M:M relationship with applications.
- **Users & Events:** M:M relationship represented via `User_Events`.
- **Users & Forums:** M:M relationship using `User_Forums_Sub`.

## ✨ Features

- **Minimalist UI** for ease of use.
- **Forum Interaction:** Subscribe to and explore forums.
- **Mentorship Program** to foster academic growth.
- **Career Opportunities** with job and internship listings.
- **Event Calendar** showcasing academic conferences and workshops.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📦 Deployment

This project is set up for easy deployment on Cpanel. Make sure to build the project first:

```bash
npm run build
```

Then start the production server:

```bash
npm run start
```
