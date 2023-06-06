import { useState } from 'react';
import { GoChevronDown } from 'react-icons/go';

export default function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((currentIsOpen) => setIsOpen(!currentIsOpen));
  };
  const handleOptioinClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div className="hover:bg-sky-50 cursor-pointer p-3" onClick={() => handleOptioinClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  return (
    <div className="w-48 relative">
      <div className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full" onClick={handleClick}>
        {value?.label || 'Select...'}
        <GoChevronDown className="text-lg" />
      </div>
      {isOpen && <div className="absolute top-full border rounded p-3 shadow bg-white w-full">{renderedOptions}</div>}
    </div>
  );
}
