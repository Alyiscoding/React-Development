import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utilities/LocalStorage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState({ employees: [], admin: null });

    useEffect(() => {
        setLocalStorage();
        refreshUserData();
    }, []);

    const refreshUserData = () => {
        const { employees, admin } = getLocalStorage();
        setUserData({ employees, admin });
    };

    // This function will update both localStorage and context
    const updateEmployees = (newEmployees) => {
        localStorage.setItem('employees', JSON.stringify(newEmployees));
        setUserData(prev => ({ ...prev, employees: newEmployees }));
    };

    return (
        <AuthContext.Provider value={{ ...userData, refreshUserData, updateEmployees }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;