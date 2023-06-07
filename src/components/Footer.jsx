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
  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

  return (
    <div className="bg-[#07477A] p-10 flex flex-col md:flex-row justify-around items-start md:items-center gap-8">
      <button onClick={() => goToTop()}>
        <img src="/footer-logo.svg" alt="logo" />
      </button>
      <div className="bg-white p-6">
        <div>
          <select 
            name="departement" 
            id="departement" 
            value={departement}
            onChange={(e) => setDepartement(e.target.value)}
            className="p-2 text-sm font-bold text-[#00537C] mb-4 ring-1 ring-[#C4C4C4] rounded">
            <option value="TECHNOLOGY DEPARTMENT">TECHNOLOGY DEPARTMENT</option>
            <option value="BUSINESS DEPARTMENT">BUSINESS DEPARTMENT</option>
          </select>
          {addressDept.filter((item) => item.dep === departement).map((item, index) => (
            <div key={index} className="text-[#25A0D8]">{item.address}</div>
          ))}
        </div>
      </div>
      <div className="text-white text-base leading-[30px]">
        <ul>
          <li><a href="#ourService">Who We Are</a></li>
          <li><a href="#ourValues">Our Values</a></li>
          <li><a href="#perks">The Perks</a></li>
        </ul>
      </div>
    </div>
  )
}
