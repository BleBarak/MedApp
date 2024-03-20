import React from 'react';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'General Examination', href: '/general-examination' },
  { name: 'Investigation', href: '/investigation' },
  { name: 'Diagnosis', href: '/diagnosis' },
  { name: 'Treatment', href: '/treatment', current: true },
  { name: 'Insurance', href: '/insurance' },
  { name: 'Medical History', href: '/medical-history' },
];

export default function Treatment() {
  return (
    <div className="flex">
      {/* Side Navigation */}
      <div className="bg-blue-400 w-48 h-screen p-4 fixed top-0 left-0">
        <div className="flex flex-col justify-between h-full">
          {/* Logo and Navigation */}
          <div>
            <div className="flex items-center mb-8">
              <h1 className="text-lg font-semibold text-white">Treatment</h1>
            </div>
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={item.current
                    ? 'bg-blue-600 text-black group flex items-center px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-300'
                    : 'text-black hover:bg-blue-600 hover:text-white group flex items-center px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-300'
                  }
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          {/* Footer */}
          <div>
            <p className="text-xs text-gray-200">Your Company Name</p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-4 ml-48">
        {/* Treatment Form */}
        <div className="mx-auto w-full max-w-2xl border rounded-lg p-6 bg-gray-100 shadow-md">
          <h2 className="text-lg font-semibold mb-4">Treatment Form</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Treatment</label>
              <input
                type="text"
                placeholder="Treatment"
                className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Date of Treatment</label>
              <input
                type="date"
                placeholder="Date of Treatment"
                className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Doctor ID</label>
              <input
                type="text"
                placeholder="Doctor ID"
                className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Hospital ID</label>
              <input
                type="text"
                placeholder="Hospital ID"
                className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Discharge</label>
              <input
                type="text"
                placeholder="Discharge"
                className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Follow-Up</label>
              <input
                type="text"
                placeholder="Follow-Up"
                className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
              />
            </div>
            {/* Submit Button */}
            <div className="mt-6">
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}