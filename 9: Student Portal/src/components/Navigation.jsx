import { NavLink } from "react-router-dom"

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-xl font-bold text-gray-800">
              STUDENT PORTAL
            </NavLink>
          </div>
          <div className="flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-600"
                  : "px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/students"
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-600"
                  : "px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              }
            >
              Students
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-600"
                  : "px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              }
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
