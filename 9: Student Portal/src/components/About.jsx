export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About the Student Portal</h1>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          The Student Portal is designed to provide students with easy access to their academic information, resources,
          and services. Our goal is to enhance the educational experience by streamlining administrative processes and
          improving communication between students and faculty.
        </p>

        <h2 className="text-xl font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-2">
          <li>Access to student profiles and academic records</li>
          <li>Course registration and management</li>
          <li>Communication tools for students and faculty</li>
          <li>Resource library for academic materials</li>
          <li>Announcements and important updates</li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions or need assistance, please contact the Student Support Team at
          <a href="mailto:support@studentportal.edu" className="text-blue-600 hover:text-blue-800 ml-1">
            syedalisher832@gmail.com
          </a>
          
        </p>
      </div>
    </div>
  )
}
