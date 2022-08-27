import Header from "../component/header";
import Footer from "../component/footer";
import styles from "../style/join.module.css";

function Join() {
  return (
    <div>
      <Header />
      <div className={styles.join}>
        <div className={styles.joinPage}>
          <h1 className={styles.joinH1}>회원가입</h1>
          <h3>yeavve 계정으로 회원가입</h3>
          <form className={styles.joinForm}>
            <input
              type="text"
              placeholder="아이디 주소 또는 아이디"
              maxLength="25"
            />
            <input type="password" placeholder="비밀번호" maxLength="15" />
            <input type="password" placeholder="비밀번호 확인" maxLength="15" />
            <input
              type="submit"
              value="회원가입"
              className={styles.joinBtn}
            ></input>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Join;
