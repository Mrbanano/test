import React from 'react';
import './SelectRole.css';

const SelectMod = () => {
  const roles = [
    { id: 12123213, name: 'admin' },
    { id: 1212321113, name: 'moderator' },
  ];

  return (
    <div className="SelectMod ">
      <div className="SelectMod -container">
        <div className="SelectMod -content">
          <select class="form-select block w-full mt-1">
            {roles.map((role) => (
              <option key={('mod-32', role.id)} value={role.name}>
                {role.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SelectMod;
