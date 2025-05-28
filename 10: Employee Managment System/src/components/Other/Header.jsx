
import React from 'react';

const Header = (props) => {
    // Derive userName directly from props
    const userName = props.data && props.data.name ? props.data.name : "Admin";


    const logout = () => {
        localStorage.setItem('logedInUser', "");
        props.changeUser('')
        // window.location.reload();
    }

    return (
        <div className="flex items-center justify-between px-4 py-6 rounded-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg mb-6">
            <div className="flex items-center gap-4">
                {/* Optional: Avatar Circle with Initial */}
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md border-2 border-blue-300">
                    <span className="text-blue-700 text-2xl font-bold">
                        {userName ? userName.charAt(0).toUpperCase() : "U"}
                    </span>
                </div>
                <div>
                    <h1 className="text-white text-xl sm:text-2xl font-semibold leading-tight">
                        Hello, <span className="block">{userName} <span className="text-3xl">👋</span></span>
                    </h1>
                    <p className="text-blue-100 text-sm mt-1">Welcome back!</p>
                </div>
            </div>
            <button
                className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-lg shadow hover:bg-blue-100 hover:text-blue-900 transition-all duration-200 text-base sm:text-lg"
                onClick={logout}
            >
                Log Out
            </button>
        </div>
    );
};

export default Header;
