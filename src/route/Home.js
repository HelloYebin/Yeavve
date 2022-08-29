import Main from "../component/main";
import Banner from "../component/banner";
import styles from "../style/home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Home() {
  const [scrollY, setScrollY] = useState(0);
  const pageUpClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setScrollY(0);
  };

  return (
    <div>
      <FontAwesomeIcon
        icon={faCaretUp}
        className={styles.pageUp}
        onClick={pageUpClick}
      />
      <Banner />
      <Main topic={"인기영화"} detail={"minimum_rating=8"} />
      <Main topic={"평점 9점이상의 명작영화"} detail={"minimum_rating=9"} />
      <Main
        topic={"다음 이야기가 궁금해지는 미스터리물"}
        detail={"genre=Thriller"}
      />
      <Main topic={"가족과 함께 보는 영화"} detail={"genre=Family"} />
      <Main
        topic={"배꼽 빠지는 코미디"}
        detail={"minimum_rating=8&genre=comedy"}
      />
      <Main
        topic={"영화속으로~ 음악속으로~"}
        detail={"minimum_rating=8&genre=music"}
      />
    </div>
  );
}

export default Home;
