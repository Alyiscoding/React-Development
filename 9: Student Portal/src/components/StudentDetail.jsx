"use client"

import { useParams, Link } from "react-router-dom"
import { students } from "../lib/data"

export default function StudentDetail() {
  const { id } = useParams()
  const student = students.find((s) => s.id === id)

  if (!student) {
    return (
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">Student Not Found</h1>
        <p className="mb-4">The student with ID {id} does not exist.</p>
        <Link to="/students" className="text-blue-600 hover:text-blue-800 underline">
          Back to Students List
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <Link to="/students" className="text-blue-600 hover:text-blue-800 flex items-center">
          ← Back to Students List
        </Link>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">{student.name}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Contact Information</h2>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Email:</span> {student.email}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Academic Information</h2>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Major:</span> {student.major}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Grade:</span> {student.grade}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
