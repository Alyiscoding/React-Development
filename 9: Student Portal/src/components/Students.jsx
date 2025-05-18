"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { students } from "../lib/data"
import Input from "./Input"

export default function Students() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredStudents = students.filter((student) => student.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Students Directory</h1>

      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search students..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <li key={student.id} className="hover:bg-gray-50">
                <Link to={`/students/${student.id}`} className="block px-6 py-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-gray-900">{student.name}</span>
                    <span className="text-sm text-gray-500">{student.major}</span>
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <li className="px-6 py-4 text-center text-gray-500">No students found matching your search.</li>
          )}
        </ul>
      </div>
    </div>
  )
}
