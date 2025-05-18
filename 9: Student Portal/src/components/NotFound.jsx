import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">404 - Page Not Found</h1>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-lg text-gray-700 mb-6">The page you are looking for does not exist or has been moved.</p>

        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  )
}
