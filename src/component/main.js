import { useEffect, useState } from "react";
import arrow from "../image/arrow.png";
import styles from "../style/main.module.css";

function Main({ topic, rating, genre, detail }) {
  const [movies, setMovies] = useState([]);
  const [showArrow, setShowArrow] = useState(false);
  let [movieX, setMovieX] = useState(0);

  function setArrow() {
    setShowArrow(true);
  }
  function noneArrow() {
    setShowArrow(false);
  }
  function setRight(e) {
    if (movieX <= 7000) {
      setMovieX((movieX += 480));
    }
  }
  function setLeft(e) {
    setMovieX((movieX -= 480));
  }

  useEffect(() => {
    fetch(`https://yts.mx/api/v2/list_movies.json?${detail}&sort_by=year`)
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
        <a className={styles.topic}>{topic}</a>
        <a className={styles.more}>더보기 ＞</a>
      </div>
      <img
        src={arrow}
        className={styles.leftArrow}
        style={{ left: showArrow ? "0px" : null }}
        onClick={() => setLeft()}
      />
      <img
        src={arrow}
        className={styles.rightArrow}
        style={{ right: showArrow ? "0px" : null }}
        onClick={() => setRight()}
      />
      <section
        className={styles.movies}
        style={{ paddingRight: `${movieX}px` }}
      >
        {movies.map((movie) => (
          <div key={movie.id} className={styles.movie}>
            <div className={styles.imgBox}>
              <img src={movie.medium_cover_image} className={styles.movieImg} />
            </div>
            <a>
              {movie.title.length > 26
                ? `${movie.title.slice(0, 26)}...`
                : movie.title}
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}
export default Main;
