import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../style/detail.module.css";
function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    console.log(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className={styles.detailBody}>
      <div>
        <img src={`${detail.background_image}`} />
      </div>
      <h1 className={styles.title}>{detail.title_long}</h1>
      <div className={styles.program_info_box}>
        <span>★{detail.rating}</span>
        <span className={styles.icon_dotted}></span>
        <span>{`${detail.genres}`}</span>
        <span className={styles.icon_dotted}></span>
        <span>{`${detail.runtime}분`}</span>
      </div>
      <h1>안녕</h1>
      <h1>안녕</h1>
      <h1>안녕</h1>
      <h1>안녕</h1>
      <h1>안녕</h1>
    </div>
  );
}
export default Detail;
