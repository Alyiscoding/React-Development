import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Other/Footer.jsx'



// localStorage.clear()  (to clear local storage)

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <AuthProvider>
      <App />
      <Footer />
      <ToastContainer />

    </AuthProvider>




  </StrictMode>,
)
