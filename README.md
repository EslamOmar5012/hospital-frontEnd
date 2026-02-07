🏥 Hospital Management System - Frontend
A modern, responsive React-based admin dashboard for managing hospital consultants and nurses with a clean UI and efficient data management.

📋 Table of Contents

Features
Tech Stack
File Structure
Installation
Usage
API Endpoints
Components Overview
Context & State Management


✨ Features
FeatureDescription🔐 AuthenticationSecure admin login with error handling👨‍⚕️ Consultant ManagementAdd, view, and delete consultants with pagination👩‍⚕️ Nurse ManagementComplete CRUD operations for nurse records📊 PaginationEfficient data browsing with customizable page limits🎨 Modern UIClean, responsive design using Tailwind CSS🔄 Real-time UpdatesInstant UI updates after data modifications⚡ PerformanceOptimized with React hooks and context API

🛠️ Tech Stack
TechnologyVersionPurposeReact^19.2.0UI FrameworkReact Router DOM^7.11.0Client-side routingTailwind CSS^4.1.18Styling frameworkLucide React^0.562.0Icon libraryVite^7.2.4Build tool & dev server

📁 File Structure
hospital-frontend/
│
├── 📂 public/
│   └── vite.svg                    # Vite logo
│
├── 📂 src/
│   ├── 📂 assets/
│   │   └── react.svg               # React logo
│   │
│   ├── 📂 components/
│   │   ├── AddConsultantsModal.jsx # Modal for adding consultants
│   │   ├── AddNurseModal.jsx       # Modal for adding nurses
│   │   ├── AppLayout.jsx           # Main app layout with sidebar
│   │   ├── Error.jsx               # Error boundary component
│   │   ├── Pagination.jsx          # Reusable pagination component
│   │   └── ProtectedRoute.jsx      # Route protection wrapper
│   │
│   ├── 📂 contexts/
│   │   ├── authContext.jsx         # Authentication state management
│   │   ├── consultantsContext.jsx  # Consultants data management
│   │   └── nursesContext.jsx       # Nurses data management
│   │
│   ├── 📂 hooks/
│   │   ├── useAuth.jsx             # Custom hook for auth context
│   │   ├── useConsultants.jsx      # Custom hook for consultants
│   │   └── useNurses.jsx           # Custom hook for nurses
│   │
│   ├── 📂 pages/
│   │   ├── consultantsPage.jsx     # Consultants management page
│   │   ├── loginPage.jsx           # Login authentication page
│   │   └── NursesPage.jsx          # Nurses management page
│   │
│   ├── App.jsx                     # Main app component withClaude's response was interruptedRetrymake readme.md for this project add emojis , tables , file structure1:00 AM🏥 Hospital Management System - Frontend
A modern, responsive React-based admin dashboard for managing hospital consultants and nurses with a clean UI and efficient data management.

📋 Table of Contents

Features
Tech Stack
File Structure
Prerequisites
Installation
Configuration
Usage
API Endpoints
Components Overview
Screenshots
Contributing
License


✨ Features
FeatureDescription🔐 AuthenticationSecure admin login with JWT token handling👨‍⚕️ Consultant ManagementAdd, view, and delete consultants with pagination👩‍⚕️ Nurse ManagementComplete CRUD operations for nurse records📊 PaginationEfficient data browsing with customizable page limits🎨 Modern UIClean, responsive design using Tailwind CSS🔄 Real-time UpdatesInstant UI updates after data modifications⚡ PerformanceOptimized with React hooks and context API📱Claude's response was interruptedRetrymake readme.md file for this project add emojis , tables , file structure1:00 AM🏥 Hospital Management System - Frontend
A modern, responsive React-based admin dashboard for managing hospital consultants and nurses with a clean UI, efficient data management, and seamless pagination.
Show Image
Show Image
Show Image
Show Image

📋 Table of Contents

Features
Tech Stack
File Structure
Prerequisites
Installation
Configuration
Usage
API Endpoints
Components Overview
Context & State Management
Screenshots
Contributing
License


✨ Features
FeatureDescriptionStatus🔐 AuthenticationSecure admin login with error handling✅👨‍⚕️ Consultant ManagementAdd, view, and delete consultants✅👩‍⚕️ Nurse ManagementComplete CRUD operations for nurses✅📊 PaginationServer-side pagination with page navigation✅🎨 Modern UIClean, responsive design with Tailwind CSS✅🔄 Real-time UpdatesClaude's response was interruptedRetrymake readme.md file for this project add emojis , tables , file structure
don't add images1:00 AM🏥 Hospital Management System - Frontend
A modern, responsive React-based admin dashboard for managing hospital consultants and nurses with a clean UI, efficient data management, and seamless pagination.

📋 Table of Contents

Features
Tech Stack
File Structure
Prerequisites
Installation
Configuration
Usage
API Endpoints
Components Overview
Context & State Management
Contributing
License


✨ Features
FeatureDescriptionStatus🔐 AuthenticationSecure admin login with error handling✅👨‍⚕️ Consultant ManagementAdd, view, and delete consultants✅👩‍⚕️ Nurse ManagementComplete CRUD operations for nurses✅📊 PaginationServer-side pagination with page navigation✅🎨 Modern UIClean, responsive design with Tailwind CSS✅🔄 Real-time UpdatesInstant UI updates after data modifications✅⚡ PerformanceOptimized with React hooks and context API✅📱 Responsive DesignMobile-friendly interface✅🛡️ Protected RoutesRoute protection for authenticated users✅🎯 Error HandlingComprehensive error management✅

🛠️ Tech Stack
CategoryTechnologyVersionPurposeFrameworkReact^19.2.0UI FrameworkRoutingReact Router DOM^7.11.0Client-side routingStylingTailwind CSS^4.1.18Utility-first CSS frameworkIconsLucide React^0.562.0Icon libraryBuild ToolVite^7.2.4Fast build tool & dev serverLintingESLint^9.39.1Code quality & consistencyLanguageJavaScript (ES6+)-Programming language
Development Dependencies
PackageVersionPurpose@vitejs/plugin-react^5.1.1React plugin for Vite@types/react^19.2.5TypeScript definitions@types/react-dom^19.2.3TypeScript definitionseslint-plugin-react-hooks^7.0.1ESLint rules for hooks

📁 File Structure
hospital-frontend/
│
├── 📂 public/
│   └── vite.svg                          # Vite logo
│
├── 📂 src/
│   │
│   ├── 📂 assets/
│   │   └── react.svg                     # React logo
│   │
│   ├── 📂 components/
│   │   ├── AddConsultantsModal.jsx       # 🩺 Modal for adding consultants
│   │   ├── AddNurseModal.jsx             # 💉 Modal for adding nurses
│   │   ├── AppLayout.jsx                 # 🏗️ Main app layout with sidebar & nav
│   │   ├── Error.jsx                     # ❌ Error boundary component
│   │   ├── Pagination.jsx                # 📄 Reusable pagination component
│   │   └── ProtectedRoute.jsx            # 🔒 Route protection wrapper
│   │
│   ├── 📂 contexts/
│   │   ├── authContext.jsx               # 🔐 Authentication state management
│   │   ├── consultantsContext.jsx        # 👨‍⚕️ Consultants data & API calls
│   │   └── nursesContext.jsx             # 👩‍⚕️ Nurses data & API calls
│   │
│   ├── 📂 hooks/
│   │   ├── useAuth.jsx                   # 🪝 Custom hook for auth context
│   │   ├── useConsultants.jsx            # 🪝 Custom hook for consultants
│   │   └── useNurses.jsx                 # 🪝 Custom hook for nurses
│   │
│   ├── 📂 pages/
│   │   ├── consultantsPage.jsx           # 📋 Consultants management page
│   │   ├── loginPage.jsx                 # 🔑 Login authentication page
│   │   └── NursesPage.jsx                # 📋 Nurses management page
│   │
│   ├── App.jsx                           # 🎯 Main app component with routing
│   ├── main.jsx                          # 🚀 Application entry point
│   └── styles.css                        # 🎨 Global styles & Tailwind imports
│
├── .gitignore                            # 🚫 Git ignore configuration
├── eslint.config.js                      # ⚙️ ESLint configuration
├── index.html                            # 📄 HTML entry point
├── package.json                          # 📦 Dependencies & scripts
├── package-lock.json                     # 🔒 Dependency lock file
├── vite.config.js                        # ⚡ Vite configuration
└── README.md                             # 📖 Project documentation

📋 Prerequisites
Before you begin, ensure you have the following installed:
RequirementVersionCheck CommandNode.js>= 20.0.0node --versionnpm>= 8.0.0npm --versionGitLatestgit --version

🚀 Installation
1️⃣ Clone the Repository
bashgit clone https://github.com/yourusername/hospital-frontend.git
cd hospital-frontend
2️⃣ Install Dependencies
bashnpm install
3️⃣ Start Development Server
bashnpm run dev
The application will be available at http://localhost:5173

⚙️ Configuration
Environment Variables
Create a .env file in the root directory (optional):
envVITE_API_BASE_URL=http://127.0.0.1:3000
API Base URL
The backend API is configured to run on http://127.0.0.1:3000. Update this in the following files if your backend URL is different:
FileLineCurrent ValueauthContext.jsx~31http://127.0.0.1:3000/auth/admin/loginconsultantsContext.jsx~18http://127.0.0.1:3000/consultantsnursesContext.jsx~18http://127.0.0.1:3000/nurses

🎮 Usage
Available Scripts
CommandDescriptionnpm run dev🚀 Start development servernpm run build📦 Build for productionnpm run preview👀 Preview production buildnpm run lint🔍 Run ESLint
User Flow
1. Login 🔑

Navigate to /login
Enter admin credentials
Submit form
Redirected to dashboard on success

2. Manage Consultants 👨‍⚕️

Navigate to /admin/consultants
View paginated list of consultants
Click "Add New Consultant" to add
Click "Delete" to remove a consultant

3. Manage Nurses 👩‍⚕️

Navigate to /admin/nurses
View paginated list of nurses
Click "Add New Nurse" to add
Fill in name, address, and ward ID
Click "Delete" to remove a nurse


🌐 API Endpoints
Authentication
MethodEndpointDescriptionRequest BodyPOST/auth/admin/loginAdmin login{ email, password }
Consultants
MethodEndpointDescriptionQuery ParamsGET/consultantsGet all consultants?page=1&limit=4POST/consultantsAdd new consultant{ name }DELETE/consultants/:idDelete consultant-
Nurses
MethodEndpointDescriptionQuery ParamsGET/nursesGet all nurses?page=1&limit=5POST/nursesAdd new nurse{ name, address, ward_id }DELETE/nurses/:idDelete nurse-
Response Format
json{
  "status": "success",
  "message": "Operation successful",
  "data": {
    "results": [...],
    "total": 100,
    "totalPageNum": 20
  }
}

🧩 Components Overview
Core Components
ComponentPurposePropsAppLayoutMain layout with sidebar & navigation-ProtectedRouteRoute wrapper for authenticationchildrenPaginationReusable pagination UIcurrentPage, totalPages, goToPage, total, limitErrorError boundary display-
Modal Components
ComponentPurposePropsAddConsultantModalForm to add new consultantshowModal, setShowModal, addConsultant, setErrorAddNurseModalForm to add new nurseshowModal, setShowModal, addNurse, setError
Page Components
ComponentRouteDescriptionLoginPage/loginAdmin authenticationConsultantsPage/:admin/consultantsManage consultantsNursesPage/:admin/nursesManage nurses

🎯 Context & State Management
Auth Context
Location: src/contexts/authContext.jsx
State:
javascript{
  isLoading: boolean,
  error: string,
  data: { email: string } | null
}
Actions:

submit(email, password) - Login user
logOut() - Logout user

Consultants Context
Location: src/contexts/consultantsContext.jsx
State:
javascript{
  consultants: Array,
  loading: boolean,
  error: string,
  currentPage: number,
  totalPages: number,
  total: number,
  limit: number
}
Actions:

fetchConsultants(page) - Fetch consultants
addConsultant(formData) - Add new consultant
deleteConsultant(id) - Delete consultant
goToPage(page) - Navigate to page

Nurses Context
Location: src/contexts/nursesContext.jsx
State:
javascript{
  nurses: Array,
  loading: boolean,
  error: string,
  currentPage: number,
  totalPages: number,
  total: number,
  limit: number
}
Actions:

fetchNurses(page) - Fetch nurses
addNurse(formData) - Add new nurse
deleteNurse(id) - Delete nurse
goToPage(page) - Navigate to page


🎨 UI/UX Features
FeatureDescriptionIconsLucide React icons for modern UILoading StatesSpinner animations during API callsError MessagesClear error feedback with alert stylingForm ValidationRequired fields with visual indicatorsResponsive TablesMobile-friendly data tablesModal DialogsClean modal forms for data entryHover EffectsInteractive button & row highlightsDisabled StatesVisual feedback during submissions

🔒 Route Protection
Protected Routes Table
RouteAccessRedirect/Public→ /login/loginPublic-/:admin/*Protected→ /login if not authenticated/:admin/consultantsProtected-/:admin/nursesProtected-

🐛 Error Handling
Error Types
Error TypeHandlingDisplayNetwork ErrorsTry-catch blocks"Can't login right now"API ErrorsResponse validationServer message or fallback404 ErrorsError boundaryCustom error pageForm ErrorsState managementInline error messages

📱 Responsive Design
Breakpoints
BreakpointWidthTarget Devicesm640pxMobilemd768pxTabletlg1024pxDesktopxl1280pxLarge Desktop2xl1536pxExtra Large

🚧 Project Status
Current Version: 1.0.0
Completed Features ✅

 User Authentication
 Consultant Management
 Nurse Management
 Pagination System
 Error Handling
 Responsive Design
 Protected Routes

Future Enhancements 🔮

 Search & Filter functionality
 Export data to CSV/PDF
 User profile management
 Dashboard with statistics
 Dark mode support
 Appointment scheduling
 Patient management
 Reports generation


🤝 Contributing
Contributions are welcome! Please follow these steps:
1️⃣ Fork the Repository
bashgit clone https://github.com/yourusername/hospital-frontend.git
2️⃣ Create a Feature Branch
bashgit checkout -b feature/AmazingFeature
3️⃣ Commit Your Changes
bashgit commit -m 'Add some AmazingFeature'
4️⃣ Push to the Branch
bashgit push origin feature/AmazingFeature
```

### 5️⃣ Open a Pull Request

---

## 📝 Code Style Guide

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| **Components** | PascalCase | `AddNurseModal.jsx` |
| **Hooks** | camelCase with 'use' prefix | `useAuth.jsx` |
| **Contexts** | camelCase with 'Context' suffix | `authContext.jsx` |
| **Functions** | camelCase | `handleSubmit()` |
| **Variables** | camelCase | `isLoading` |
| **Constants** | UPPER_SNAKE_CASE | `API_BASE_URL` |

---

## 🐛 Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| **Port 5173 already in use** | Kill the process or change port in `vite.config.js` |
| **API connection refused** | Ensure backend server is running on port 3000 |
| **Blank page after build** | Check console for errors, verify base path |
| **Module not found** | Run `npm install` to install dependencies |
| **ESLint errors** | Run `npm run lint` and fix reported issues |

---

## 📄 License

This project is licensed under the **MIT License**.
```
MIT License

Copyright (c) 2024 Hospital Management System

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

👨‍💻 Author
Eslam Omar


🙏 Acknowledgments

React Team for the amazing framework
Tailwind CSS for the utility-first CSS framework
Lucide Icons for beautiful icons
Vite team for the lightning-fast build tool


📞 Support
For support, email your.email@example.com or open an issue on GitHub.

<div align="center">
⭐ Star this repo if you find it helpful!
Made with ❤️ by [Eslam Omar]
</div>
