/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-5">
      <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        Welcome to the Agricultural Blockchain Network
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {/* Farmer Card */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-green-600 mb-3">Farmer</h2>
          <p className="text-gray-600">
            Access tools to track and verify your produce for a transparent supply chain.
          </p>
          <Link to="/farmer">

          <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors">
            Go To Dashboard
          </button></Link>
        </div>

        {/* Certifying Authority Card */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">Certifying Authority</h2>
          <p className="text-gray-600">
            Provide certifications for verified agricultural products, ensuring quality and authenticity.
          </p>
          <Link to="/certiAuth">
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
           Go To Dashboard
          </button></Link>
        </div>

        {/* Buyer Card */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-purple-600 mb-3">Buyer</h2>
          <p className="text-gray-600">
            Browse certified produce and make secure purchases through our transparent network.
          </p>
          <Link to="/buyer">

          <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors">
            Go To Dashboard
          </button></Link>
        </div>

        {/* Regulator Card */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-red-600 mb-3">Regulator</h2>
          <p className="text-gray-600">
            Oversee agricultural standards, ensure compliance, and maintain trust in the supply chain.
          </p>
          <Link to="/regulators">

          <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors">
            Go To Dashboard
          </button></Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
