import React from 'react';
import './SelectMod.css';

const SelectMod = () => {
  const Mods = [
    { id: 12123213, name: 'AlvaroCastillo' },
    { id: 1212321113, name: 'AlvaroCastillo1' },
    { id: 1212321323, name: 'AlvaroCastillo2' },
  ];

  return (
    <div className="SelectMod ">
      <div className="SelectMod -container">
        <div className="SelectMod -content">
          <select class="form-select block w-full mt-1">
            {Mods.map((mod) => (
              <option key={('mod-32', mod.id)} value={mod.name}>
                {mod.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SelectMod;
