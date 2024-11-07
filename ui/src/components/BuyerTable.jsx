/* eslint-disable no-unused-vars */
import React from 'react';

function FarmerRequestHistory() {
  // Sample data
  const requestData = [
    { id: 1, date: '2024-11-01', email: 'anandhu@gmail.com', status: 'Approved' ,amount:"30" },
    { id: 2, date: '2024-10-28', email: 'Request for Soil Quality Check', status: 'Pending',amount:"70"  },
    { id: 3, date: '2024-10-15', email: 'Request for Harvest Inspection', status: 'Rejected',amount:"90"  },
    { id: 4, date: '2024-10-10', email: 'Request for Fertilizer Approval', status: 'Approved',amount:"50"  },
  ];

  return (
    <div className="relative overflow-x-auto shadow-lg sm:rounded-xl">
      <div className="flex items-center justify-between px-4 py-4 bg-white shadow-sm dark:bg-gray-900 rounded-t-xl">
        <div>
          {/* <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-700 bg-gray-50 border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
            Action
            <svg className="w-3 h-3 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l4 4 4-4"/>
            </svg>
          </button> */}
          <div id="dropdownAction" className="hidden bg-white divide-y divide-gray-200 rounded-lg shadow-lg w-44 dark:bg-gray-700 dark:divide-gray-600 z-20">
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a></li>
            </ul>
            <div className="py-1">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
            </div>
          </div>
        </div>
        <div className="relative">
          <input type="text" id="table-search-users" className="w-80 text-sm border rounded-lg px-4 py-2 pl-10 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users"/>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-700 dark:text-gray-400">
        <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
          <tr>

            <th scope="col" className="px-6 py-3">Name</th>
            <th scope="col" className="px-6 py-3">Decription</th>
            <th scope="col" className="px-6 py-3">Amount</th>
            <th scope="col" className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
        {requestData.map((item, index) => (
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">

            <td className="px-6 py-4 flex items-center space-x-3">
              <div className="text-gray-900 dark:text-white">
                <div className="font-semibold">Neil Sims</div>
                <div className="text-gray-500 dark:text-gray-400">{item.email}</div>
              </div>
            </td>
            <td className="px-6 py-4">{item.date}</td>
            <td className="px-6 py-4">
              <span className="flex items-center space-x-1">
                <span>{item.amount}</span>
              </span>
            </td>
            <td className="px-6 py-4">
              <span className="flex items-center space-x-1">
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  Buy Now
              </button>

              </span>
            </td>
          </tr>  
          ))}

        </tbody>
      </table>
    </div>
  );
}

export default FarmerRequestHistory;
