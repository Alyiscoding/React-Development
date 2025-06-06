import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-toastify';

const AddEmployee = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'employee' });
  const { refreshUsers } = useContext(AuthContext);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/add-user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    if (data.success) {
      toast.success('Employee added!');
      setForm({ name: '', email: '', password: '', role: 'employee' });
      refreshUsers();
    } else {
      toast.error(data.message || 'Failed to add employee');
    }
  };

  return (
    <div className="bg-white border border-blue-200 rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-md mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <span className="inline-block w-2 h-8 bg-blue-600 rounded-full"></span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-700 tracking-wide">Add Employee</h2>
      </div>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-700">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-md p-2 border-gray-300 focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-700">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-md p-2 border-gray-300 focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-700">Password</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            className="w-full border rounded-md p-2 border-gray-300 focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 rounded-md font-semibold hover:opacity-90 transition duration-200"
        >
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
