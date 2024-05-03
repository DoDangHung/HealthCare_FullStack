/** @format */

import SearchResult from "./SearchResult";
import "./SearchResultList.scss";

function SearchResultsList({ result, onItemClick }) {
  return (
    <>
      <div className="results-list">
        {result.map((item, index) => {
          return (
            <div key={index} onClick={() => onItemClick(item.id)}>
              <SearchResult result={item.name} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SearchResultsList;
