import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useContext } from 'react';
import { AuthContext } from './context/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Other/Footer';

function App() {
    const { currentUser, loading } = useContext(AuthContext);

    if (loading) {
        return <div>Loading...</div>;
    }

    let content;
    if (!currentUser) {
        content = <Login />;
    } else if (currentUser.role === 'admin') {
        content = <AdminDashboard />;
    } else if (currentUser.role === 'employee') {
        content = <EmployeeDashboard />;
    } else {
        content = <div>Unknown user role</div>;
    }

    return (
        <>
            {content}
            <Footer />
            <ToastContainer />
        </>
    );
}

export default App;