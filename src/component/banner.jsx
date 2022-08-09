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
              src="https://img.wavve.com/banner/pooq/2022/20220707_banner_101040.jpg"
              width="1190px;"
            />
          </li>
          <li>
            <a>
              <img
                src="https://img.wavve.com/banner/pooq/2022/imgbuild_20220805_163435277.png"
                alt="오늘의웹툰"
              />
            </a>
            <img
              src="https://img.wavve.com/banner/pooq/2022/20220805_banner_163625.jpg"
              width="1190px;"
            />
          </li>
          <li>
            <a>
              <img
                src="https://img.wavve.com/banner/pooq/2022/imgbuild_20220805_165026449.png"
                alt="빅마우스"
              />
            </a>
            <img
              src="https://img.wavve.com/banner/pooq/2022/20220805_banner_165121.jpg"
              width="1190px;"
            />
          </li>
          <li>
            <a>
              <img
                src="https://img.wavve.com/banner/pooq/2022/imgbuild_20220802_203057057.png"
                alt="미남당"
              />
            </a>
            <img
              src="https://img.wavve.com/banner/pooq/2022/20220805_banner_171131.jpg"
              width="1190px;"
            />
          </li>
          <li>
            <a>
              <img
                src="https://img.wavve.com/banner/pooq/2022/imgbuild_20220804_181610824.png"
                alt="메리퀴어"
              />
            </a>
            <img
              src="https://img.wavve.com/banner/pooq/2022/20220803_banner_214730.jpg"
              width="1190px;"
            />
          </li>
          <li>
            <a>
              <img
                src="https://img.wavve.com/banner/pooq/2022/imgbuild_20220808_211512936.png"
                alt="일드-오키테가미 쿄고의 비망록"
              />
            </a>
            <img
              src="https://img.wavve.com/banner/pooq/2022/20220808_banner_203413.jpg"
              width="1190px;"
            />
          </li>
          <li>
            <a>
              <img
                src="https://img.wavve.com/banner/pooq/2022/imgbuild_20220708_151204806.png"
                alt="마케팅-식욕폭발"
              />
            </a>
            <img
              src="https://img.wavve.com/banner/pooq/2022/20220707_banner_101040.jpg"
              width="1190px;"
            />
          </li>
          <li>
            <a>
              <img
                src="https://img.wavve.com/banner/pooq/2022/imgbuild_20220805_163435277.png"
                alt="오늘의웹툰"
              />
            </a>
            <img
              src="https://img.wavve.com/banner/pooq/2022/20220805_banner_163625.jpg"
              width="1190px;"
            />
          </li>
          <li>
            <a>
              <img
                src="https://img.wavve.com/banner/pooq/2022/imgbuild_20220805_165026449.png"
                alt="빅마우스"
              />
            </a>
            <img
              src="https://img.wavve.com/banner/pooq/2022/20220805_banner_165121.jpg"
              width="1190px;"
            />
          </li>
          <li>
            <a>
              <img
                src="https://img.wavve.com/banner/pooq/2022/imgbuild_20220802_203057057.png"
                alt="미남당"
              />
            </a>
            <img
              src="https://img.wavve.com/banner/pooq/2022/20220805_banner_171131.jpg"
              width="1190px;"
            />
          </li>
          <li>
            <a>
              <img
                src="https://img.wavve.com/banner/pooq/2022/imgbuild_20220805_165026449.png"
                alt="빅마우스"
              />
            </a>
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
