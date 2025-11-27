import React from 'react';
import {
  FaLaptopCode,
  FaBuilding,
  FaCogs,
  FaNetworkWired,
  FaDna,
  FaIndustry,
} from "react-icons/fa";

function Card({ heading, text, publication, faculty, Icon, link }) {
  return (
    <a 
      className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 font-serif group"
      href={link}
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Icon className="text-5xl mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
      <h1 className="font-lora font-semibold text-xl mb-2 text-gray-800">
        {heading}
      </h1>
      <p className="text-sm text-gray-600 mb-3">{text}</p>
      <div className="text-gray-500 text-sm space-x-2">
        <span>📚 {publication} Publications</span>
        <span>👨‍🏫 {faculty} Faculty</span>
      </div>
      <br />
      <p className="justify-center items-center flex text-blue-600 font-medium group-hover:underline">
        Explore Domain
      </p>
    </a>
  );
}

function Department() {
  // Data array to keep the code clean and links easily editable
  const deptData = [
    {
      heading: "Computer Science & Engineering",
      text: "AI/ML, Cloud Computing, Blockchain",
      publication: "123",
      faculty: "56",
      Icon: FaLaptopCode,
      link: "https://departments.nitj.ac.in/dept/cse/home"
    },
    {
      heading: "Civil Engineering",
      text: "Structures, Environmental, Construction",
      publication: "98",
      faculty: "40",
      Icon: FaBuilding,
      link: "https://departments.nitj.ac.in/dept/ce/home"
    },
    {
      heading: "Mechanical Engineering",
      text: "Thermal, Design, Manufacturing",
      publication: "110",
      faculty: "47",
      Icon: FaCogs,
      link: "https://departments.nitj.ac.in/dept/me/home"
    },
    {
      heading: "Electronics & Communication",
      text: "VLSI, Signal Processing, Wireless Systems",
      publication: "130",
      faculty: "52",
      Icon: FaNetworkWired,
      link: "https://departments.nitj.ac.in/dept/ece/home"
    },
    {
      heading: "Biotechnology",
      text: "Genetics, Bioprocess, Bioinformatics",
      publication: "76",
      faculty: "35",
      Icon: FaDna,
      link: "https://departments.nitj.ac.in/dept/bt/home"
    },
    {
      heading: "Industrial & Production Engineering",
      text: "Optimization, Systems, Automation",
      publication: "85",
      faculty: "41",
      Icon: FaIndustry,
      link: "https://departments.nitj.ac.in/dept/ipe/home"
    }
  ];

  return (
    <div className="bg-gray-50 p-10 rounded-lg shadow-md min-h-[600px]">
      <h1 className="text-4xl justify-center items-center flex font-bold font-lora mb-3">
        RESEARCH DOMAINS
      </h1>
      <h2 className="text-md justify-center items-center flex mb-10 font-oswald text-gray-600 text-center">
        Discover our diverse areas of research excellence across engineering
        and technology disciplines
      </h2>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {deptData.map((dept, index) => (
          <Card
            key={index}
            heading={dept.heading}
            text={dept.text}
            publication={dept.publication}
            faculty={dept.faculty}
            Icon={dept.Icon}
            link={dept.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Department;