import { useState } from "react"

export default function Footer() {
  const [departement, setDepartement] = useState('TECHNOLOGY DEPARTMENT');
  const addressDept = [
    {
      dep: 'TECHNOLOGY DEPARTMENT',
      address: 'Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa Barat'
    },
    {
      dep: 'BUSINESS DEPARTMENT',
      address: 'Jl. Pramuka No 54 Kel. Gambar Jati Kec. Cirebus, Kota Bandung, Jawa Barat'
    }
  ];

  return (
    <div className="bg-[#07477A] p-10 flex flex-col md:flex-row justify-around items-start md:items-center gap-8">
      <img src="/footer-logo.svg" alt="logo" />
      <div>
        <div>
          <select 
            name="departement" 
            id="departement" 
            value={departement}
            onChange={(e) => setDepartement(e.target.value)}
            className="p-2 text-sm font-bold text-[#00537C] mb-4">
            <option value="TECHNOLOGY DEPARTMENT">TECHNOLOGY DEPARTMENT</option>
            <option value="BUSINESS DEPARTMENT">BUSINESS DEPARTMENT</option>
          </select>
          {addressDept.filter((item) => item.dep === departement).map((item, index) => (
            <div key={index}>{item.address}</div>
          ))}
        </div>
      </div>
      <div className="text-white text-base leading-[30px]">
        <ul>
          <li>Who We Are</li>
          <li>Our Values</li>
          <li>The Perks</li>
        </ul>
      </div>
    </div>
  )
}
