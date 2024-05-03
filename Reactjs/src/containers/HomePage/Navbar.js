/** @format */

import { useState } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import logotest from "../../assets/images/hospital-logo1.jpg";
import "./NavBar.scss";
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultList";
import { searchSpecialtyByName } from "../../services/userService";
import { LANGUAGES } from "../../utils";
import { changeLanguageApp } from "../../store/actions/appActions";
import { useDispatch, useSelector } from "react-redux";

function NavBar({}) {
  const [result, setResult] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResults, setShowResults] = useState(true);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const userInfo = useSelector((state) => state.user.userInfo);
  const language = useSelector((state) => state.app.language);
  const history = useHistory();

  const handleSearch = async () => {
    try {
      const data = await searchSpecialtyByName(searchTerm);
      setSearchResult(data);
      setShowResults(true);
    } catch (e) {
      console.error("Error searching:", e);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    // Kiểm tra nếu ô input trống, ẩn kết quả tìm kiếm
    if (!value.trim()) {
      setShowResults(false);
    }
  };

  const handleItemClick = (id) => {
    history.push(`/detail-specialty/${id}`);
  };

  const dispatch = useDispatch();

  const changeLanguageAppRedux = (language) => {
    dispatch(changeLanguageApp(language));
  };
  return (
    <>
      <nav>
        <Link to="/home" className="title">
          Website
        </Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <div className="child-content">
              <b>
                <FormattedMessage id="homeHeader.speciality" />
              </b>
            </div>
            <div className="subs-title">
              <FormattedMessage id="homeHeader.searchDoctor" />
            </div>
          </li>
          <li>
            <div className="child-content">
              <b>
                <FormattedMessage id="homeHeader.health-facility" />
              </b>
            </div>
            <div className="subs-title">
              <FormattedMessage id="homeHeader.chooseClinic" />
            </div>
          </li>
          <li>
            <div className="child-content">
              <b>
                <FormattedMessage id="homeHeader.doctor" />
              </b>
            </div>
            <div className="subs-title">
              <FormattedMessage id="homeHeader.goodDoctor" />
            </div>
          </li>
          <li>
            <div className="child-content">
              <b>
                <FormattedMessage id="homeHeader.package" />
              </b>
            </div>
            <div className="subs-title">
              <FormattedMessage id="homeHeader.healthCheck" />
            </div>
          </li>
        </ul>

        <ul className={menuOpen ? "open" : ""}>
          <li>
            <div className="child-content">
              {/* tao chuc nang search */}

              <SearchBar setResult={setResult} />
              {result && result.length > 0 && (
                <SearchResultsList
                  result={result}
                  onItemClick={handleItemClick}
                />
              )}
            </div>
          </li>
        </ul>
        <div className="right-content">
          <div
            className={
              language === LANGUAGES.VI ? "flags-VI active" : "flags-VI"
            }
          >
            <span
              className="flags-VI"
              onClick={() => changeLanguageAppRedux(LANGUAGES.VI)}
            >
              VN
            </span>
          </div>
          <div
            className={
              language === LANGUAGES.EN ? "flags-EN active" : "flags-EN"
            }
          >
            <span
              className="flags-EN"
              onClick={() => changeLanguageAppRedux(LANGUAGES.EN)}
            >
              EN
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
