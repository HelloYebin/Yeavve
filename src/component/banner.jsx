import styles from "../style/banner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faPause,
  faPlay,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import BannerContent from "./bannerContent";

function Banner() {
  const slidesRef = useRef();
  let [transition, setTransition] = useState("transform 500ms ease-in-out");
  let [bannerX, setBannerX] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [currPage, setCurrPage] = useState(1);
  // const IntervalPlay = setInterval(function () {
  //   swipeRight();
  // }, 2000);
  //useEffect,setInterval 이용해서 자동재생 기능 추가하기
  function swipeLeft() {
    setBannerX(bannerX + 1210);
    setTransition("transform 500ms ease-in-out");
    if (bannerX === 0) {
      setTimeout(function () {
        setTransition("");
        setBannerX(-6050);
      }, 500);
    }
    setCurrPage(currPage - 1);
    if (currPage === 1) {
      setCurrPage(6);
    }
  }
  function swipeRight() {
    setBannerX(bannerX - 1210);
    setTransition("transform 500ms ease-in-out");
    if (bannerX == -7260) {
      setTimeout(function () {
        setTransition("");
        setBannerX(-1210);
      }, 500);
    }
    setCurrPage(currPage + 1);
    if (currPage === 6) {
      setCurrPage(1);
    }
  }
  function playFunc() {
    if (autoPlay) {
      setAutoPlay(false);
    } else {
      setAutoPlay(true);
      console.log("palying");
    }
  }
  console.log(bannerX);
  return (
    <div className={styles.bannerBody}>
      <div className={styles.main_nav}>
        <FontAwesomeIcon
          icon={autoPlay ? faPause : faPlay}
          className={styles.playingBtn}
          onClick={playFunc}
        />
        <div>
          <span className={styles.swiper_Pagination_bullets}>
            <FontAwesomeIcon
              icon={faCircle}
              className={styles.swiper_Pagination_bullet}
              style={{ color: currPage === 1 && 7 ? "white" : "gray" }}
            />
            <FontAwesomeIcon
              icon={faCircle}
              className={styles.swiper_Pagination_bullet}
              style={{ color: currPage === 2 ? "white" : "gray" }}
            />
            <FontAwesomeIcon
              icon={faCircle}
              className={styles.swiper_Pagination_bullet}
              style={{ color: currPage === 3 ? "white" : "gray" }}
            />
            <FontAwesomeIcon
              icon={faCircle}
              className={styles.swiper_Pagination_bullet}
              style={{ color: currPage === 4 ? "white" : "gray" }}
            />
            <FontAwesomeIcon
              icon={faCircle}
              className={styles.swiper_Pagination_bullet}
              style={{ color: currPage === 5 ? "white" : "gray" }}
            />
            <FontAwesomeIcon
              icon={faCircle}
              className={styles.swiper_Pagination_bullet}
              style={{ color: currPage === 6 ? "white" : "gray" }}
            />
          </span>
        </div>
      </div>
      <section
        className={styles.slideShow}
        style={{
          transform: `translateX(${bannerX}px)`,
          transition: `${transition}`,
        }}
      >
        <ul className={styles.slides} ref={slidesRef}>
          <BannerContent
            bannerTitle={"imgbuild_20220708_151204806.png"}
            bannerNum={"20220707_banner_101040.jpg"}
            name={"마케팅-식욕폭발"}
          />
          <BannerContent
            bannerTitle={"imgbuild_20220805_163435277.png"}
            bannerNum={"20220805_banner_163625.jpg"}
            name={"오늘의웹툰"}
          />
          <BannerContent
            bannerTitle={"imgbuild_20220805_165026449.png"}
            bannerNum={"20220805_banner_165121.jpg"}
            name={"빅마우스"}
          />
          <BannerContent
            bannerTitle={"imgbuild_20220802_203057057.png"}
            bannerNum={"20220805_banner_171131.jpg"}
            name={"미남당"}
          />
          <BannerContent
            bannerTitle={"imgbuild_20220804_181610824.png"}
            bannerNum={"20220803_banner_214730.jpg"}
            name={"메리퀴어"}
          />
          <BannerContent
            bannerTitle={"imgbuild_20220808_211512936.png"}
            bannerNum={"20220808_banner_203413.jpg"}
            name={"일드-오키테가미 쿄고의 비망록"}
          />
          <BannerContent
            bannerTitle={"imgbuild_20220708_151204806.png"}
            bannerNum={"20220707_banner_101040.jpg"}
            name={"마케팅-식욕폭발"}
          />
          <BannerContent
            bannerTitle={"imgbuild_20220805_163435277.png"}
            bannerNum={"20220805_banner_163625.jpg"}
            name={"오늘의웹툰"}
          />
          <BannerContent
            bannerTitle={"imgbuild_20220805_165026449.png"}
            bannerNum={"20220805_banner_165121.jpg"}
            name={"빅마우스"}
          />
          <BannerContent
            bannerTitle={"imgbuild_20220802_203057057.png"}
            bannerNum={"20220805_banner_171131.jpg"}
            name={"미남당"}
          />
          <BannerContent
            bannerTitle={"imgbuild_20220804_181610824.png"}
            bannerNum={"20220803_banner_214730.jpg"}
            name={"메리퀴어"}
          />
        </ul>
      </section>
      <div className={styles.controls}>
        <FontAwesomeIcon
          icon={faAngleLeft}
          className={styles.prev}
          onClick={() => swipeLeft()}
        />
        <FontAwesomeIcon
          icon={faAngleLeft}
          className={styles.next}
          onClick={() => swipeRight()}
        />
      </div>
    </div>
  );
}
export default Banner;
