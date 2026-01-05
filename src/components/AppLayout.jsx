import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Users, Stethoscope, LogOut, Activity } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

function AppLayout() {
  const { data, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate("/login");
  };

  const navLinks = [
    {
      to: "consultants",
      icon: Stethoscope,
      label: "Consultants",
    },
    {
      to: "nurses",
      icon: Users,
      label: "Nurses",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Top Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-2">
              <Activity className="w-8 h-8 text-blue-600" />
              <span className="font-bold text-gray-800 text-xl">
                Hospital Admin
              </span>
            </div>

            {/* User Info & Logout */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 text-sm">
                {data?.email || "Admin"}
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 hover:bg-gray-100 px-4 py-2 rounded-lg text-gray-700 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className="bg-white shadow-md w-64 min-h-[calc(100vh-4rem)]">
          <nav className="space-y-2 p-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <link.icon className="w-5 h-5" />
                <span className="font-medium">{link.label}</span>
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
