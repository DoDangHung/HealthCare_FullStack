/** @format */
import { useEffect, useState } from "react";
import "./SearchBar.scss";
import { useHistory, useParams } from "react-router-dom";
function SearchBar({ setResult, onItemClick }) {
  const [input, setInput] = useState([]);

  const fetchData = (value) => {
    fetch("http://localhost:8080/api/search-item/")
      .then((response) => response.json())
      .then((json) => {
        const result = json.filter((item) => {
          const lowerCaseValue = value.toLowerCase();
          const lowerCaseName = item.name.toLowerCase();
          return (
            value && item && item.name && lowerCaseName.includes(lowerCaseValue)
          );
        });
        setResult(result);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <>
      <div>
        <div className="input-wrapper">
          <input
            placeholder="Type to search..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default SearchBar;
