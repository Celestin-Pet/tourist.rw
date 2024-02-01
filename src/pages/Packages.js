import React, { useState } from 'react';
import Page1 from " ./pages/Page1.js";
import Page2 from " ./pages/Page2.js";
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';

const PageDropdown = () => {
  const [selectedPage, setSelectedPage] = useState(null);

  const handlePageSelect = (pageId) => {
    setSelectedPage(pageId);
  };

  const renderPageContent = () => {
    switch (selectedPage) {
      case 'page1':
        return <Page1 />;
      case 'page2':
        return <Page2 />;
      case 'page3':
        return <Page3 />;
      case 'page4':
        return <Page4 />;
      case 'page5':
        return <Page5 />;
      case 'page6':
        return <Page6 />;
      default:
        return <p>Please select a page...</p>;
    }
  };

  return (
    <div className="relative">
      <button className="text-white">packages</button>
      <ul className="absolute bg-gray-800 p-4 mt-2 space-y-2">
        <li>
          <button
            className="text-white hover:text-blue-500"
            onClick={() => handlePageSelect('page1')}
          >
            Page 1
          </button>
        </li>
        <li>
          <button
            className="text-white hover:text-blue-500"
            onClick={() => handlePageSelect('page2')}
          >
            Page 2
          </button>
        </li>
        <li>
          {/* Repeat for page3 to page6 */}
        </li>
      </ul>
      <div className="mt-4">{renderPageContent()}</div>
    </div>
  );
};

export default PageDropdown;
