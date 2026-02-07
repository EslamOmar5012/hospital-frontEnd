# 🏥 Hospital Management System -- Frontend

A modern, responsive **React-based admin dashboard** designed for
managing hospital consultants and nurses.\
This frontend provides a clean UI for efficient healthcare data
management.

------------------------------------------------------------------------

## 📋 Table of Contents

-   [✨ Features](#-features)
-   [🛠️ Tech Stack](#️-tech-stack)
-   [📁 File Structure](#-file-structure)
-   [🚀 Installation](#-installation)
-   [⚙️ Configuration](#️-configuration)
-   [🌐 API Endpoints](#-api-endpoints)
-   [🧩 Components Overview](#-components-overview)
-   [👨‍💻 Author](#-author)

------------------------------------------------------------------------

## ✨ Features

  -----------------------------------------------------------------------
  Feature                             Description
  ----------------------------------- -----------------------------------
  🔐 **Authentication**               Secure admin login with JWT token
                                      handling.

  👨‍⚕️ **Consultant Management**        View, add, and delete consultants
                                      with integrated pagination.

  👩‍⚕️ **Nurse Management**             Full CRUD operations for nurse
                                      records (Name, Address, Ward).

  📊 **Pagination**                   Efficient data browsing with
                                      customizable limits.

  🎨 **Modern UI**                    Responsive Tailwind CSS design.

  🔄 **Real-time Updates**            Updated UI after operations using
                                      Context API.

  ⚡ **Performance**                  Optimized with React 19 + Vite for
                                      fast load times.
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 🛠️ Tech Stack

-   **Framework:** React \^19.2.0 ⚛️\
-   **Routing:** React Router DOM \^7.11.0 🛣️\
-   **Styling:** Tailwind CSS \^4.1.18 🎨\
-   **Icons:** Lucide React 🛠️\
-   **Build Tool:** Vite \^7.2.4 ⚡\
-   **State Management:** React Context API & Hooks 🎣

------------------------------------------------------------------------

## 📁 File Structure

``` text
hospital-frontend/
├── 📂 public/                 # Static assets
├── 📂 src/
│   ├── 📂 assets/             # Images & icons
│   ├── 📂 components/         # Reusable UI components
│   │   ├── AddConsultantsModal.jsx
│   │   ├── AddNurseModal.jsx
│   │   ├── AppLayout.jsx
│   │   └── Pagination.jsx
│   ├── 📂 contexts/           # Global State (Auth, Consultants, Nurses)
│   ├── 📂 hooks/              # Custom React hooks
│   ├── 📂 pages/              # Main pages
│   │   ├── consultantsPage.jsx
│   │   ├── loginPage.jsx
│   │   └── NursesPage.jsx
│   ├── App.jsx                # Main routing logic
│   ├── main.jsx               # Entry point
│   └── styles.css             # Tailwind & Global styles
├── package.json               # Dependencies
└── vite.config.js             # Vite configuration
```

------------------------------------------------------------------------

## 🚀 Installation

### 1️⃣ Clone the Repository

``` bash
git clone https://github.com/EslamOmar5012/hospital-frontEnd.git
cd hospital-frontEnd
```

### 2️⃣ Install Dependencies

``` bash
npm install
```

### 3️⃣ Start the Development Server

``` bash
npm run dev
```

App runs on:\
👉 **http://localhost:5173**

------------------------------------------------------------------------

## ⚙️ Configuration

### Environment Variables

The frontend communicates with the backend at:

    http://127.0.0.1:3000

If your backend address is different, update the API URLs in:

-   `src/contexts/authContext.jsx`
-   `src/contexts/consultantsContext.jsx`
-   `src/contexts/nursesContext.jsx`

------------------------------------------------------------------------

## 🌐 API Endpoints

  Category          Method   Endpoint              Description
  ----------------- -------- --------------------- -----------------------------
  **Auth**          POST     `/auth/admin/login`   Admin authentication
  **Consultants**   GET      `/consultants`        Fetch paginated consultants
  **Consultants**   POST     `/consultants`        Add new consultant
  **Nurses**        GET      `/nurses`             Fetch paginated nurses
  **Nurses**        DELETE   `/nurses/:id`         Remove nurse

------------------------------------------------------------------------

## 🧩 Components Overview

### **AppLayout**

Main wrapper containing sidebar + navigation.

### **ProtectedRoute**

Restricts dashboard to authenticated admins.

### **Pagination**

Reusable pagination component across pages.

### **Modals**

Dynamic popup forms for: - Adding Consultants\
- Adding Nurses

Without leaving the page.

------------------------------------------------------------------------

## 👨‍💻 Author

**Eslam Omar**\
GitHub: https://github.com/EslamOmar5012

⭐ *If you find this project helpful, consider giving it a star!*
