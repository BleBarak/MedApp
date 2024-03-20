import React from 'react';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'General Examination', href: '/general-examination' },
  { name: 'Investigation', href: '/investigation' },
  { name: 'Diagnosis', href: '/diagnosis', current: true },
  { name: 'Treatment', href: '/treatment' },
  { name: 'Insurance', href: '/insurance' },
  { name: 'Medical History', href: '/medical-history' },
];

export default function Diagnosis() {
  return (
    <div className="flex">
      {/* Side Navigation */}
      <div className="bg-blue-400 w-48 h-screen p-4 fixed top-0 left-0">
        <div className="flex flex-col justify-between h-full">
          {/* Logo and Navigation */}
          <div>
            <div className="flex items-center mb-8">
              <h1 className="text-lg font-semibold text-white">Diagnosis</h1>
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
        {/* Diagnosis Form */}
        <div className="mx-auto w-full max-w-2xl border rounded-lg p-6 bg-gray-100 shadow-md">
          <h2 className="text-lg font-semibold mb-4">Diagnosis Form</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Primary Diagnosis</label>
              <input
                type="text"
                placeholder="Primary Diagnosis"
                className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Secondary Diagnosis</label>
              <input
                type="text"
                placeholder="Secondary Diagnosis"
                className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Date of Diagnosis</label>
              <input
                type="date"
                placeholder="Date of Diagnosis"
                className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Clinical Findings</label>
              <textarea
                placeholder="Clinical Findings"
                className="border border-gray-300 px-3 py-2 rounded-md w-full h-20 resize-none focus:outline-none focus:border-blue-400"
              ></textarea>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Cause</label>
                <input
                  type="text"
                  placeholder="Cause"
                  className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Prognosis</label>
                <input
                  type="text"
                  placeholder="Prognosis"
                  className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Severity</label>
                <input
                  type="text"
                  placeholder="Severity"
                  className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Treatment Plan</label>
                <input
                  type="text"
                  placeholder="Treatment Plan"
                  className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Follow-Up Plan</label>
                <input
                  type="text"
                  placeholder="Follow-Up Plan"
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
  );
}
