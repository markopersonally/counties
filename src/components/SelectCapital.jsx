import { FILTERABLE_CAPITALS } from "../data";

export default function Select({ setSelectedCapital }) {
  const handleSelect = (event) => {
    setSelectedCapital(event.target.value);
  };

  return (
    <select onChange={handleSelect}>
      <option value="">Choose capital</option>
      {FILTERABLE_CAPITALS.map((capital, index) => (
        <option key={index}>{capital}</option>
      ))}
    </select>
  );
}
