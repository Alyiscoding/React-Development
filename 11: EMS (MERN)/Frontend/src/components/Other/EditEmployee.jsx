import React, { useState } from 'react';
import { toast } from 'react-toastify';

const EditEmployee = ({ employee, onClose, onUpdated }) => {
  const [form, setForm] = useState({
    name: employee.name || '',
    email: employee.email || '',
    password: '', // Leave blank if not changing
  });
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const payload = { ...form };
    if (!payload.password) delete payload.password; // Don't send empty password
    const res = await fetch(`http://localhost:4000/update-user/${employee._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    setLoading(false);
    if (data.success) {
      toast.success('Employee updated!');
      onUpdated();
      onClose();
    } else {
      toast.error(data.message || 'Failed to update employee');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md relative">
        <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700" onClick={onClose}>&times;</button>
        <h2 className="text-xl font-bold text-blue-700 mb-4 text-center">Edit Employee</h2>
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
            <label className="block mb-1 text-sm font-semibold text-gray-700">Password (leave blank to keep unchanged)</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border rounded-md p-2 border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 rounded-md font-semibold hover:opacity-90 transition duration-200"
            disabled={loading}
          >
            {loading ? 'Updating...' : 'Update Employee'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
