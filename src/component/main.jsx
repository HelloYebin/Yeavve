import { useEffect, useState } from "react";
import arrow from "../image/arrow.png";
import styles from "../style/main.module.css";

function Main() {
  const [movies, setMovies] = useState([]);
  const [showArrow, setShowArrow] = useState(false);
  function setArrow() {
    setShowArrow(true);
  }
  function noneArrow() {
    setShowArrow(false);
  }

  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    )
      .then((response) => response.json())
      .then((json) => setMovies(json.data.movies));
  }, []);

  return (
    <div
      id={styles.movieContainer}
      onMouseEnter={() => setArrow()}
      onMouseLeave={() => noneArrow()}
    >
      <div className={styles.moviesTop}>
        <a className={styles.topic}>실시간 인기 프로그램</a>
        <a className={styles.more}>더보기 ＞</a>
      </div>
      <section className={styles.movies}>
        <img
          src={arrow}
          className={styles.leftArrow}
          style={{ left: showArrow ? "0px" : null }}
        />
        <img
          src={arrow}
          className={styles.rightArrow}
          style={{ right: showArrow ? "0px" : null }}
        />
        {movies.map((movie) => (
          <div key={movie.id} className={styles.movie}>
            <div className={styles.imgBox}>
              <img src={movie.medium_cover_image} className={styles.movieImg} />
            </div>
            <a>
              {movie.title.length > 27
                ? `${movie.title.slice(0, 27)}...`
                : movie.title}
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}
export default Main;
