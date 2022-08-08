import styles from "../style/banner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
function Banner() {
  const slidesRef = useRef();
  let [transition, setTransition] = useState("transform 500ms ease-in-out");
  let [bannerX, setBannerX] = useState(0);
  function swipeLeft() {
    setBannerX(bannerX + 1210);
    setTransition("transform 500ms ease-in-out");
    if (bannerX === 0) {
      setTimeout(function () {
        setTransition("");
        setBannerX(-6050);
      }, 500);
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
  }
  console.log(bannerX);

  return (
    <div className={styles.bannerBody}>
      <section
        className={styles.slideShow}
        style={{
          transform: `translateX(${bannerX}px)`,
          transition: `${transition}`,
        }}
      >
        <ul className={styles.slides} ref={slidesRef}>
          <li>
            <img
              src="https://img.wavve.com/banner/pooq/2022/20220801_banner_172203.jpg"
              width="1190px;"
            />
          </li>
          <li>
            <img
              src="https://img.wavve.com/banner/pooq/2022/20220805_banner_163625.jpg"
              width="1190px;"
            />
          </li>
          <li>
            <img
              src="https://img.wavve.com/banner/pooq/2022/20220805_banner_165121.jpg"
              width="1190px;"
            />
          </li>
          <li>
            <img
              src="https://img.wavve.com/banner/pooq/2022/20220805_banner_171131.jpg"
              width="1190px;"
            />
          </li>
          <li>
            <img
              src="https://img.wavve.com/banner/pooq/2022/20220803_banner_214730.jpg"
              width="1190px;"
            />
          </li>
          <li>
            <img
              src="https://img.wavve.com/banner/pooq/2022/20220712_banner_160104.jpg"
              width="1190px;"
            />
          </li>
          <li>
            <img
              src="https://img.wavve.com/banner/pooq/2022/20220801_banner_172203.jpg"
              width="1190px;"
            />
          </li>
          <li>
            <img
              src="https://img.wavve.com/banner/pooq/2022/20220805_banner_163625.jpg"
              width="1190px;"
            />
          </li>
          <li>
            <img
              src="https://img.wavve.com/banner/pooq/2022/20220805_banner_165121.jpg"
              width="1190px;"
            />
          </li>
          <li>
            <img
              src="https://img.wavve.com/banner/pooq/2022/20220805_banner_171131.jpg"
              width="1190px;"
            />
          </li>
          <li>
            <img
              src="https://img.wavve.com/banner/pooq/2022/20220803_banner_214730.jpg"
              width="1190px;"
            />
          </li>
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
