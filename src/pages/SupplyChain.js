import React from 'react';
import { FaBarcode } from 'react-icons/fa'; // Importing the Barcode icon
import productImage from '../images/meds.jpg'; // Import the image file

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Health Records', href: '/health-records'},
  { name: 'Supply Chain', href: '/supply-chain', current: true  },
];

export default function SupplyChain() {
  // Sample supply chain data
  const supplyChainData = {
    product: {
      name: 'Sample Medicine',
      description: 'This is a sample medicine for demonstration purposes.',
      serialNumber: 'SN12345',
      batchNumber: 'BATCH67890',
      specifications: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    manufacturer: {
      name: 'ABC Pharmaceuticals',
      contact: 'contact@abcpharma.com',
      location: 'City, Country',
      manufacturingDate: '2024-03-20',
      certifications: 'ISO 9001:2015',
    },
    shipmentHistory: [
      { event: 'Manufactured', timestamp: '2024-03-20', location: 'Factory' },
      { event: 'Shipped to Warehouse', timestamp: '2024-03-21', location: 'Warehouse' },
      { event: 'Dispatched to Distributor', timestamp: '2024-03-22', location: 'Distributor' },
      // Add more shipment events as needed
    ],
  };

  // Function to handle barcode scanning
  const handleScanBarcode = () => {
    console.log('Scanning barcode...');
    // Placeholder function for handling barcode scanning
  };

  return (
    <div className="flex">
      {/* Side Navigation */}
      <div className="bg-blue-400 w-48 h-screen p-4 fixed top-0 left-0">
        <div className="flex flex-col justify-between h-full">
          {/* Logo and Navigation */}
          <div>
            <div className="flex items-center mb-8">
              <h1 className="text-lg font-semibold text-white">Supply Chain</h1>
            </div>
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-300 ${
                    item.current ? 'bg-blue-600 text-black' : 'text-black hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  {item.name}
                </a>
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
        <div>
          <h1 className="text-2xl font-semibold mb-4">Supply Chain</h1>
          {/* Barcode Scanner */}
          <div className="mb-4 flex items-center">
            <FaBarcode className="text-blue-600 mr-2" /> {/* Using Barcode icon */}
            <span className="text-sm font-semibold text-blue-600 cursor-pointer" onClick={handleScanBarcode}>Scan Barcode</span> {/* Updated text */}
            <input
              type="text"
              className="border px-4 py-2 rounded-md flex-1 ml-4"
              placeholder="Enter Barcode manually"
              disabled
            />
          </div>
          {/* Display supply chain data */}
          <div className="bg-gray-100 p-4 rounded-md shadow-md">
            {/* Product Image */}
            <img src={productImage} alt="Product" className="mb-4 rounded-md" width="200" />
            <h2 className="text-xl font-semibold mb-2">Product Details</h2>
            <p><strong>Name:</strong> {supplyChainData.product.name}</p>
            <p><strong>Description:</strong> {supplyChainData.product.description}</p>
            <p><strong>Serial Number:</strong> {supplyChainData.product.serialNumber}</p>
            <p><strong>Batch Number:</strong> {supplyChainData.product.batchNumber}</p>
            <p><strong>Specifications:</strong> {supplyChainData.product.specifications}</p>
            <h2 className="text-xl font-semibold mb-2 mt-4">Manufacturer Details</h2>
            <p><strong>Name:</strong> {supplyChainData.manufacturer.name}</p>
            <p><strong>Contact:</strong> {supplyChainData.manufacturer.contact}</p>
            <p><strong>Location:</strong> {supplyChainData.manufacturer.location}</p>
            <p><strong>Manufacturing Date:</strong> {supplyChainData.manufacturer.manufacturingDate}</p>
            <p><strong>Certifications:</strong> {supplyChainData.manufacturer.certifications}</p>
            <h2 className="text-xl font-semibold mb-2 mt-4">Shipment History</h2>
            <ul>
              {supplyChainData.shipmentHistory.map((event, index) => (
                <li key={index}>
                  <strong>{event.event}:</strong> {event.timestamp} - {event.location}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
