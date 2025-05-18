import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Students from "./components/Students"
import StudentDetail from "./components/StudentDetail"
import About from "./components/About"
import NotFound from "./components/NotFound"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/students/:id" element={<StudentDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
