import React, { useState } from 'react';
import { ListBox } from 'primereact/listbox';



const Navigation = () => {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: '', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
  return (
   <div>
    <h3>FIlter by country</h3>
      <div className='nav-container'>
        <div className="card flex justify-content-center ">  
            <ListBox value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="w-full md:w-14rem" />
        </div>
      </div>
   </div>
  )
}

export default Navigation