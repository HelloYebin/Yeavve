import styles from "../style/header.css";
import logo from "../image/logo.png";
import search from "../image/icons8-search-50.png";

function Header() {
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
              <li>홈</li>
              <li>카테고리</li>
              <li>LIVE</li>
              <li>MY</li>
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
