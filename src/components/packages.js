import React, { useState } from 'react';

const externalLinks = {
  Akagera: 'https://faustintravels.rw/day1akagera.html',
  gorilla: 'https://faustintravels.rw/gorilla.html',
  goldenmonkey: 'https://faustintravels.rw/goldenMonkey.html',
  kigali: 'https://faustintravels.rw/kigali.html',
  palace: 'https://faustintravels.rw/king.html',
  nyungwe: 'https://faustintravels.rw/nyungwe.html',
  trekking: 'https://faustintravels.rw/trekking.html',
  Akagera2: 'https://faustintravels.rw/2daysakagera.html',
  Chippanze2: 'https://faustintravels.rw/chimpanzee.html',
  Gorilla2: 'https://faustintravels.rw/2daysgorilla.html',
  Akagera3: 'https://faustintravels.rw/3daysakagera.html',
  Chippanze3: 'https://faustintravels.rw/3dayschimpanzee.html',
  Gorilla3: 'https://faustintravels.rw/3daysgorilla.html',
  classic: 'https://faustintravels.rw/9daysclassic.html',
};
function ExternalPageViewer() {
    const [selectedPage] = useState(null);
  
    const handlePageSelect = (pageId) => {
      window.open(externalLinks[pageId], '_blank');
    };
  
    return (
      <nav className="mt-[-20px] p-4">
        <div className="container mx-auto">
          <div className="relative inline-block text-left">
            <select
              onChange={(e) => handlePageSelect(e.target.value)}
              value={selectedPage || ''}
              className="bg-white-500 text-gray-700 px-4 py-2 pr-8 rounded-md"
            >
              <option value="" className="font-bold text-gray-500">
                Select packages
              </option>
              {Object.keys(externalLinks).map((pageId) => (
                <option key={pageId} value={pageId}>
                  {pageId}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12l-3 3m0 0l-3-3m3 3V8m0 8h.01"
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  
  export default ExternalPageViewer;
  