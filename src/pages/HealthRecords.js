import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Health Records', href: '/health-records', current: true },
  { name: 'Supply Chain', href: '/supply-chain' },
];

const initialRecords = [
  {
    patientDemographics: {
      name: 'John Doe',
      age: 45,
      gender: 'Male',
      address: '123 Main St, Cityville',
      contact: '555-123-4567',
    },
    medicalHistory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    currentMedications: ['Aspirin', 'Lisinopril'],
    allergies: ['Penicillin'],
    vitalSigns: {
      temperature: '98.6°F',
      bloodPressure: '120/80 mmHg',
      heartRate: '70 bpm',
    },
    diagnoses: ['Hypertension', 'Type 2 Diabetes'],
    treatments: ['Angioplasty', 'Insulin Therapy'],
    procedures: ['Cardiac Catheterization', 'Insulin Pump Insertion'],
    labAndImagingResults: 'Results pending',
    progressNotes: 'Patient responded well to treatment.',
    dischargeSummary: 'Discharged in stable condition.',
    dateOfHospitalization: '2023-05-12',
  },
  // Add more records as needed
];

export default function HealthRecords() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [records, setRecords] = useState(initialRecords);

  const filteredRecords = records.filter(record => {
    return record.diagnoses.join(', ').toLowerCase().includes(searchQuery.toLowerCase());
  }).sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(b.dateOfHospitalization) - new Date(a.dateOfHospitalization);
      case 'disease':
        return a.diagnoses[0].localeCompare(b.diagnoses[0]);
      default:
        return 0;
    }
  });

  return (
    <div className="flex">
      {/* Side Navigation */}
      <div className="bg-blue-400 w-48 h-screen p-4 fixed top-0 left-0">
        <div className="flex flex-col justify-between h-full">
          {/* Logo and Navigation */}
          <div>
            <div className="flex items-center mb-8">
              <h1 className="text-lg font-semibold text-white">Health Records</h1>
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
        {/* Search and Sort */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Diagnoses"
              className="border border-gray-300 px-3 py-2 mr-4 rounded-md focus:outline-none focus:border-blue-400"
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400"
            >
              <option value="date">Sort by Date</option>
              <option value="disease">Sort by Diagnosis</option>
            </select>
          </div>
          {/* Add Record Button */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold">Add Record</button>
        </div>
        {/* General Examination Form */}
        <div className="mx-auto w-full max-w-2xl border rounded-lg p-6 bg-gray-100 shadow-md">
          <h2 className="text-lg font-semibold mb-4">General Examination</h2>
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
                <label className="block text-sm font-semibold mb-2">Nourishment</label>
                <input
                  type="text"
                  placeholder="Nourishment"
                  className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Eyes</label>
                <input
                  type="text"
                  placeholder="Eyes"
                  className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Tongue</label>
                <input
                  type="text"
                  placeholder="Tongue"
                  className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Pulse</label>
                <input
                  type="text"
                  placeholder="Pulse"
                  className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Blood Pressure</label>
                <input
                  type="text"
                  placeholder="Blood Pressure"
                  className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Temperature</label>
                <input
                  type="text"                   placeholder="Temperature"
                  className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Respiratory Rate</label>
                <input
                  type="text"
                  placeholder="Respiratory Rate"
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
        
        {/* Existing Records Display */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Existing Records</h2>
          <div className="grid gap-8">
            {filteredRecords.map((record, index) => (
              <div key={index} className="mx-auto w-full max-w-2xl border rounded-lg p-6 bg-gray-100 shadow-md">
                {/* Display Existing Records Here */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

