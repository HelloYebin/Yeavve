import styles from "../style/banner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faPause,
  faPlay,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useRef } from "react";
import BannerContent from "./bannerContent";

function Banner() {
  let [transition, setTransition] = useState("transform 500ms ease-in-out");
  let [bannerX, setBannerX] = useState(0);
  const [autoPlayBtn, setAutoPlayBtn] = useState(true);
  let [currPage, setCurrPage] = useState(1);
  const swipeWidth = 1210;

  function swipeLeft() {
    setBannerX(bannerX + swipeWidth);

    if (bannerX === 0) {
      setTimeout(function () {
        setTransition("");
        setBannerX(-6050);
      }, 500);
    }
    setTransition("transform 500ms ease-in-out");
    setCurrPage(--currPage);
    if (currPage === 0) {
      setCurrPage(6);
    }
  }

  function swipeRight() {
    setBannerX(bannerX - swipeWidth);
    if (bannerX == -7260) {
      setTimeout(function () {
        setTransition("");
        setBannerX(-swipeWidth);
      }, 500);
    }
    setTransition("transform 500ms ease-in-out");
    setCurrPage(++currPage);
    if (currPage === 7) {
      setCurrPage(1);
    }
  }

  return (
    <div className={styles.bannerBody}>
      <div className={styles.main_nav}>
        <FontAwesomeIcon
          icon={autoPlayBtn ? faPause : faPlay}
          className={styles.playingBtn}
          onClick={() => setAutoPlayBtn(!autoPlayBtn)}
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
        <ul className={styles.slides}>
          <BannerContent
            bannerTitle={"imgbuild_20220708_151204806.png"}
            bannerNum={"20220707_banner_101040.jpg"}
            name={"?????????-????????????"}
          />
          <BannerContent
            bannerTitle={"imgbuild_20220805_163435277.png"}
            bannerNum={"20220805_banner_163625.jpg"}
            name={"???????????????"}
          />
          <BannerContent
            bannerTitle={"imgbuild_20220805_165026449.png"}
            bannerNum={"20220805_banner_165121.jpg"}
            name={"????????????"}
          />
          <BannerContent
            bannerTitle={"imgbuild_20220802_203057057.png"}
            bannerNum={"20220805_banner_171131.jpg"}
            name={"?????????"}
          />
          <BannerContent
            bannerTitle={"imgbuild_20220804_181610824.png"}
            bannerNum={"20220803_banner_214730.jpg"}
            name={"????????????"}
          />
          <BannerContent
            bannerTitle={"imgbuild_20220808_211512936.png"}
            bannerNum={"20220808_banner_203413.jpg"}
            name={"??????-??????????????? ????????? ?????????"}
          />
          <BannerContent
            bannerTitle={"imgbuild_20220708_151204806.png"}
            bannerNum={"20220707_banner_101040.jpg"}
            name={"?????????-????????????"}
          />
          <BannerContent
            bannerTitle={"imgbuild_20220805_163435277.png"}
            bannerNum={"20220805_banner_163625.jpg"}
            name={"???????????????"}
          />
          <BannerContent
            bannerTitle={"imgbuild_20220805_165026449.png"}
            bannerNum={"20220805_banner_165121.jpg"}
            name={"????????????"}
          />
          <BannerContent
            bannerTitle={"imgbuild_20220802_203057057.png"}
            bannerNum={"20220805_banner_171131.jpg"}
            name={"?????????"}
          />
          <BannerContent
            bannerTitle={"imgbuild_20220804_181610824.png"}
            bannerNum={"20220803_banner_214730.jpg"}
            name={"????????????"}
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
