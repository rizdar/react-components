import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

export default function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);
    return () => {
      document.removeEventListener('click', handler);
      console.log('clean up');
    };
  }, []);

  const handleClick = () => {
    setIsOpen((currentIsOpen) => setIsOpen(!currentIsOpen));
  };
  const handleOptioinClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div className="hover:bg-sky-100 cursor-pointer p-3" onClick={() => handleOptioinClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel classNamesProps="flex justify-between items-center cursor-pointer" onClick={handleClick}>
        {value?.label || 'Select...'}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}
