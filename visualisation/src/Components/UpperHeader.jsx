import { useState } from 'react';

function UpperHeader() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="bg-gray-50 p-4 shadow-sm">
      <ul className="flex space-x-6">
        
        {/* Academics */}
        <li className="relative">
          <button
            onClick={() => toggleDropdown('academics')}
            className="text-gray-700 font-medium hover:text-red-600 px-2"
          >
            Academics ▼
          </button>
          {openDropdown === 'academics' && (
            <ul className="absolute left-0 mt-1 bg-white border rounded-md shadow-lg min-w-[200px] z-10">
              <li><a href="/academics/overview" className="block px-4 py-2 hover:bg-gray-100">Overview NITJ</a></li>

              <li className="relative">
                <button
                  onClick={() => toggleDropdown('study')}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Study @ NITJ ▶
                </button>
                {openDropdown === 'study' && (
                  <ul className="absolute top-0 left-full mt-0 bg-white border rounded-md shadow-lg min-w-[200px]">
                    <li><a href="/academics/study-at-nitj/non-campus-bs-programmes" className="block px-4 py-2 hover:bg-gray-100">Non-campus BS programmes NITJ</a></li>
                    <li><a href="/academics/study-at-nitj/undergraduate-programmes" className="block px-4 py-2 hover:bg-gray-100">Undergraduate Programmes NITJ</a></li>
                    <li><a href="/academics/study-at-nitj/postgraduate-programmes" className="block px-4 py-2 hover:bg-gray-100">Postgraduate Programmes NITJ</a></li>
                  </ul>
                )}
              </li>

              <li><a href="/academics/academic-calendar" className="block px-4 py-2 hover:bg-gray-100">Academic Calendar NITJ</a></li>
            </ul>
          )}
        </li>

        {/* Research */}
        <li className="relative">
          <button
            onClick={() => toggleDropdown('research')}
            className="text-gray-700 font-medium hover:text-red-600 px-2"
          >
            Research ▼
          </button>
          {openDropdown === 'research' && (
            <ul className="absolute left-0 mt-1 bg-white border rounded-md shadow-lg min-w-[200px] z-10">
              <li><a href="/research/research-highlights" className="block px-4 py-2 hover:bg-gray-100">Research Highlights NITJ</a></li>
              <li><a href="/research/research-areas" className="block px-4 py-2 hover:bg-gray-100">Research Areas NITJ</a></li>
            </ul>
          )}
        </li>

        {/* Innovation */}
        <li className="relative">
          <button
            onClick={() => toggleDropdown('innovation')}
            className="text-gray-700 font-medium hover:text-red-600 px-2"
          >
            Innovation ▼
          </button>
          {openDropdown === 'innovation' && (
            <ul className="absolute left-0 mt-1 bg-white border rounded-md shadow-lg min-w-[200px] z-10">
              <li><a href="/innovation/industrial-consultancy" className="block px-4 py-2 hover:bg-gray-100">Industrial Consultancy NITJ</a></li>
              <li><a href="/innovation/technology-transfer" className="block px-4 py-2 hover:bg-gray-100">Technology Transfer NITJ</a></li>
            </ul>
          )}
        </li>

        {/* Research Park */}
        <li className="relative">
          <button
            onClick={() => toggleDropdown('researchpark')}
            className="text-gray-700 font-medium hover:text-red-600 px-2"
          >
            Research Park ▼
          </button>
          {openDropdown === 'researchpark' && (
            <ul className="absolute left-0 mt-1 bg-white border rounded-md shadow-lg min-w-[200px] z-10">
              <li><a href="/research-park/nitj-research-park" className="block px-4 py-2 hover:bg-gray-100">NITJ Research Park</a></li>
              <li><a href="/research-park/incubation-cell" className="block px-4 py-2 hover:bg-gray-100">Incubation Cell NITJ</a></li>
            </ul>
          )}
        </li>

        {/* Careers */}
        <li className="relative">
          <button
            onClick={() => toggleDropdown('careers')}
            className="text-gray-700 font-medium hover:text-red-600 px-2"
          >
            Careers ▼
          </button>
          {openDropdown === 'careers' && (
            <ul className="absolute left-0 mt-1 bg-white border rounded-md shadow-lg min-w-[200px] z-10">
              <li><a href="/careers/overview" className="block px-4 py-2 hover:bg-gray-100">Overview NITJ</a></li>
              <li><a href="/careers/prospective-faculty" className="block px-4 py-2 hover:bg-gray-100">Prospective Faculty NITJ</a></li>
            </ul>
          )}
        </li>

      </ul>
    </nav>
  );
}

export default UpperHeader;
