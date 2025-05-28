
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './context/AuthProvider';
import { toast } from 'react-toastify';
import Footer from './components/Other/Footer';



function App() {
  const [user, setUser] = useState(null);

  const [logedInUserData, setLogedInUserData] = useState(null)

  const authData = useContext(AuthContext)
  // console.log(authData.employees);



  useEffect(() => {
    const logedInUser = localStorage.getItem("logedInUser");
    if (logedInUser) {
      const userData = JSON.parse(logedInUser);
      setUser(userData.role);
      setLogedInUserData(userData.data);
    }
  }, [authData]);


  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('logedInUser', JSON.stringify({ role: 'admin' }))
    } else if (authData) {
      const employee = authData.employees.find((e) => email == e.email && e.password == password)
      if (employee) {
        setLogedInUserData(employee)
        setUser('employee');
        localStorage.setItem('logedInUser', JSON.stringify({ role: 'employee', data: employee }))
      } else {
        // Show alert if employee not found
        // alert("invalid");
        toast.error("Invalid Email or Password");
      }
    }
  }




  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {/* Optionally, render dashboards based on user role */}
      {user === 'admin' && <AdminDashboard changeUser={setUser} />}
      {user === 'employee' && <EmployeeDashboard data={logedInUserData} changeUser={setUser} />} 
    </>
  );
}

export default App;
