import styles from "../style/header.css";
import logo from "../image/logo.png";
import search from "../image/icons8-search-50.png";
import { useState } from "react";
import { useEffect } from "react";

function Header() {
  const [homeClick, setHomeClick] = useState(true);
  const [categoryClick, setCategoryClick] = useState(false);
  const [liveClick, setLiveClick] = useState(false);
  const [myClick, setMyClick] = useState(false);

  function menuHomeClick() {
    setHomeClick(true);
    setCategoryClick(false);
    setLiveClick(false);
    setMyClick(false);
  }
  function menuCategoryClick() {
    setCategoryClick(true);
    setHomeClick(false);
    setLiveClick(false);
    setMyClick(false);
  }
  function menuLiveClick() {
    setLiveClick(true);
    setCategoryClick(false);
    setHomeClick(false);
    setMyClick(false);
  }
  function menuMyClick() {
    setMyClick(true);
    setCategoryClick(false);
    setHomeClick(false);
    setLiveClick(false);
  }

  return (
    <div className="position">
      <div className="header">
        <ul className="header-links">
          <li>로그인</li>|<li>이용권</li>|<li>쿠폰·코인 ∨</li>|<li>웨이브온</li>
          |<li>이벤트</li>
        </ul>
        <hr className="hr" />
        <div className="secondHeader">
          <a className="headerLogo" href="#">
            yeavve
          </a>
          <nav>
            <ul id="menu">
              <li
                id="menu_home"
                className={homeClick ? "menuClicked" : null}
                onClick={menuHomeClick}
              >
                홈
              </li>
              <li
                id="menu_category"
                className={categoryClick ? "menuClicked" : null}
                onClick={menuCategoryClick}
              >
                카테고리
              </li>
              <li
                id="menu_live"
                className={liveClick ? "menuClicked" : null}
                onClick={menuLiveClick}
              >
                LIVE
              </li>
              <li
                id="menu_my"
                className={myClick ? "menuClicked" : null}
                onClick={menuMyClick}
              >
                MY
              </li>
            </ul>
          </nav>
          <div className="searchBar">
            <img src={search} width="25px" />
            <span className="search">검색하기</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
