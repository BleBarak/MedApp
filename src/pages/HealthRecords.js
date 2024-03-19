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
        {/* Records */}
        <div className="grid gap-8">
          {filteredRecords.map((record, index) => (
            <div key={index} className="mx-auto w-full max-w-2xl border rounded-lg p-6 bg-gray-100 shadow-md">
              <div className="flex flex-col justify-center h-full">
                {/* Patient Demographics */}
                <div className="mb-4">
                  <h2 className="text-lg font-semibold">Patient Demographics</h2>
                  <p><strong>Name:</strong> {record.patientDemographics.name}</p>
                  <p><strong>Age:</strong> {record.patientDemographics.age}</p>
                  <p><strong>Gender:</strong> {record.patientDemographics.gender}</p>
                  <p><strong>Address:</strong> {record.patientDemographics.address}</p>
                  <p><strong>Contact:</strong> {record.patientDemographics.contact}</p>
                </div>
                {/* Medical History */}
                <div className="mb-4">
                  <h2 className="text-lg font-semibold">Medical History</h2>
                  <p>{record.medicalHistory}</p>
                </div>
                {/* Current Medications */}
                <div className="mb-4">
                  <h2 className="text-lg font-semibold">Current Medications</h2>
                  <ul>
                    {record.currentMedications.map((medication, index) => (
                      <li key={index}>{medication}</li>
                    ))}
                  </ul>
                </div>
                {/* Allergies */}
                <div className="mb-4">
                  <h2 className="text-lg font-semibold">Allergies</h2>
                  <ul>
                    {record.allergies.map((allergy, index) => (
                      <li key={index}>{allergy}</li>
                    ))}
                  </ul>
                </div>
                {/* Vital Signs */}
                 <div className="mb-4">
                  <h2 className="text-lg font-semibold">Vital Signs</h2>
                  <p><strong>Temperature:</strong> {record.vitalSigns.temperature}</p>
                  <p><strong>Blood Pressure:</strong> {record.vitalSigns.bloodPressure}</p>
                  <p><strong>Heart Rate:</strong> {record.vitalSigns.heartRate}</p>
                </div>
                {/* Diagnoses */}
                <div className="mb-4">
                  <h2 className="text-lg font-semibold">Diagnoses</h2>
                  <ul>
                    {record.diagnoses.map((diagnosis, index) => (
                      <li key={index}>{diagnosis}</li>
                    ))}
                  </ul>
                </div>
                {/* Treatments */}
                <div className="mb-4">
                  <h2 className="text-lg font-semibold">Treatments</h2>
                  <ul>
                    {record.treatments.map((treatment, index) => (
                      <li key={index}>{treatment}</li>
                    ))}
                  </ul>
                </div>
                {/* Procedures */}
                <div className="mb-4">
                  <h2 className="text-lg font-semibold">Procedures</h2>
                  <ul>
                    {record.procedures.map((procedure, index) => (
                      <li key={index}>{procedure}</li>
                    ))}
                  </ul>
                </div>
                {/* Laboratory and Imaging Results */}
                <div className="mb-4">
                  <h2 className="text-lg font-semibold">Laboratory and Imaging Results</h2>
                  <p>{record.labAndImagingResults}</p>
                </div>
                {/* Progress Notes */}
                <div className="mb-4">
                  <h2 className="text-lg font-semibold">Progress Notes</h2>
                  <p>{record.progressNotes}</p>
                </div>
                {/* Discharge Summaries */}
                <div className="mb-4">
                  <h2 className="text-lg font-semibold">Discharge Summaries</h2>
                  <p>{record.dischargeSummary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

