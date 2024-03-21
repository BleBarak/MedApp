import React from 'react';
import { Link } from 'react-router-dom';
import johnDoeImage from '../images/pfp.jpg'; // Import the image

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'General Examination', href: '/general-examination' },
  { name: 'Investigation', href: '/investigation', current: true },
  { name: 'Diagnosis', href: '/diagnosis' },
  { name: 'Treatment', href: '/treatment' },
  { name: 'Insurance', href: '/insurance' },
  { name: 'Medical History', href: '/medical-history' },
];

export default function Investigation() {
  return (
    <div className="flex flex-col h-screen">
      {/* Top Navigation */}
      <nav className="bg-blue-600 border-b border-gray-200 p-4 relative z-10">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold"></h1>
          {/* Profile Section (Replace with your profile image and name) */}
          <div className="flex items-center">
            <span className="mr-4">John Doe</span>
            {/* Replace the image source with your profile image */}
            <img
              src={johnDoeImage}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
        {/* Company Name */}
        <p className="absolute top-0 left-0 ml-4 mt-4 text-black text-lg font-semibold">SMART MEDCARE</p>
      </nav>

      {/* Main Content */}
      <div className="flex">
        {/* Side Navigation */}
        <div className="bg-blue-400 w-48 h-screen p-4 fixed top-0 left-0 z-0">
          <div className="flex flex-col justify-between h-full">
            {/* Logo and Navigation */}
            <div>
              <div className="flex items-center mb-8">
                <h1 className="text-lg font-semibold text-white">Investigation</h1>
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
            {/* Footer (Replace with your company name) */}
            <div>
              <p className="text-xs text-gray-200">SMART MEDCARE</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 ml-48">
          {/* Investigation Form */}
          <div className="mx-auto w-full max-w-2xl border rounded-lg p-6 bg-gray-100 shadow-md">
            <h2 className="text-lg font-semibold mb-4">Investigation Form</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Enter Record ID</label>
                <input
                  type="text"
                  placeholder="Record ID"
                  className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Blood Test</label>
                  <input
                    type="text"
                    placeholder="Blood Test"
                    className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Urine Test</label>
                  <input
                    type="text"
                    placeholder="Urine Test"
                    className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">ECG</label>
                  <input
                    type="text"
                    placeholder="ECG"
                    className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">MRI Scan</label>
                  <input
                    type="text"
                    placeholder="MRI Scan"
                    className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">CT Scan</label>
                  <input
                    type="text"
                    placeholder="CT Scan"
                    className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">X-Ray</label>
                  <input
                    type="text"
                    placeholder="X-Ray"
                    className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Lab Test (If any other)</label>
                  <input
                    type="text"
                    placeholder="Lab Test"
                    className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
                  />
                </div>
              </div>
              {/* Submit Button */}
              <div className="mt-6">
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
