import styles from "../style/header.module.css";
import search from "../image/icons8-search-50.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header({ logState, changeLog }) {
  const navigate = useNavigate();
  const [homeClick, setHomeClick] = useState(true);
  const [categoryClick, setCategoryClick] = useState(false);
  const [liveClick, setLiveClick] = useState(false);
  const [myClick, setMyClick] = useState(false);
  const [categoryMouse, setCategoryMouse] = useState(true);
  function onCategory() {
    setCategoryMouse(false);
  }
  function offCategory() {
    setCategoryMouse(true);
  }
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
  function clickLogin() {
    if (logState === true) {
      alert("로그아웃 되었습니다.");
      changeLog(false);
    } else {
      navigate("/Yeavve/login");
    }
  }
  return (
    <div className={styles.position}>
      <div className={styles.header}>
        <ul className={styles.headerLinks}>
          <li className={styles.loginBtn} onClick={clickLogin}>
            {logState ? "로그아웃" : "로그인"}
          </li>
          <li>이용권</li>
          <li>쿠폰·코인 ∨</li>
          <li>웨이브온</li>
          <li>이벤트</li>
        </ul>
        <hr className={styles.hr} />
        <div className={styles.secondHeader}>
          <Link to="/Yeavve" className={styles.headerLogo}>
            yeavve
          </Link>
          <nav>
            <ul id={styles.menu}>
              <li
                id={styles.menu_home}
                className={homeClick ? styles.menuClicked : null}
                onClick={menuHomeClick}
              >
                <Link to="/Yeavve" className={styles.menu_home}>
                  홈
                </Link>
              </li>
              <li
                id={styles.menu_category}
                className={categoryClick ? styles.menuClicked : null}
                onClick={menuCategoryClick}
                onMouseEnter={onCategory}
                onMouseLeave={offCategory}
              >
                카테고리
              </li>
              <li
                id={styles.menu_live}
                className={liveClick ? styles.menuClicked : null}
                onClick={menuLiveClick}
              >
                LIVE
              </li>
              <li
                id={styles.menu_my}
                className={myClick ? styles.menuClicked : null}
                onClick={menuMyClick}
              >
                MY
              </li>
            </ul>
          </nav>
          <div className={styles.searchBar}>
            <img src={search} width="25px" />
            <span className={styles.search}>검색하기</span>
          </div>
          <div
            id={styles.category_detail}
            className={categoryMouse ? styles.hidden : null}
            onMouseEnter={onCategory}
            onMouseLeave={offCategory}
          >
            <ul className={styles.category_ul}>
              <li>전체 카테고리 보기</li>
              <hr />
              <li>추천 메뉴</li>
              <li>드라마</li>
              <li>예능</li>
              <li>영화</li>
              <li>영화플러스</li>
              <li>해외시리즈</li>
              <li>프로야구</li>
              <li>ORIGINAL</li>
              <li>CLASSIC</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
