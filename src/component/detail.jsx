import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../style/detail.module.css";
function Detail() {
  const { id } = useParams();

  return (
    <div className={styles.detailBody}>
      <h1>{id}</h1>
      <h1>안녕</h1>
      <h1>안녕</h1>
      <h1>안녕</h1>
      <h1>안녕</h1>
      <h1>안녕</h1>
      <h1>안녕</h1>
      <h1>안녕</h1>
      <h1>안녕</h1>
      <h1>안녕</h1>
      <h1>안녕</h1>
      <h1>안녕</h1>
    </div>
  );
}
export default Detail;
