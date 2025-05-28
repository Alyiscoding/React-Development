import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail("");
        setPassword("");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-2">
            <form
                className="w-full max-w-sm border-2 border-gray-300 rounded-lg p-6 bg-white shadow-md"
                onSubmit={submitHandler}
            >
                <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 text-center tracking-wide">Login</h1>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                        Enter your email
                    </label>
                    <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id="email"
                        className="bg-white text-black border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-xs"
                        autoComplete="username"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                        Enter your password
                    </label>
                    <input
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        id="password"
                        className="bg-white text-black border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-xs"
                        autoComplete="current-password"
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full sm:w-auto transition"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;