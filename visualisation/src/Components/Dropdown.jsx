import { useState } from 'react';

function Dropdown({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="px-3 py-2 text-gray-700 hover:text-red-600 font-medium"
      >
        {item.label} ▼
      </button>

      {item.submenu && open && (
        <ul className="absolute left-0 mt-1 bg-white shadow-lg border rounded-md z-10 min-w-[200px]">
          {item.submenu.map((sub, i) => (
            <NavDropdown key={i} item={sub} />
          ))}
        </ul>
      )}

      {!item.submenu && item.link && (
        <a href={item.link} className="block px-3 py-2 text-gray-700 hover:text-red-600">
          {item.label}
        </a>
      )}
    </li>
  );
}

export default Dropdown;
