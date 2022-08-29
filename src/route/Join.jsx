import styles from "../style/join.module.css";
import { useNavigate } from "react-router-dom";
function Join() {
  const navigate = useNavigate();
  function addUserInfo(event) {
    event.preventDefault();
    const idValue = event.target.id.value;
    const passValue = event.target.password.value;
    const passCheck = event.target.passwordCheck.value;
    if (passValue === passCheck) {
      localStorage.setItem("id", idValue);
      localStorage.setItem("password", passValue);
      alert(`회원가입에 성공하였습니다. ${idValue}님 반갑습니다.`);
      navigate("/Yeavve/login");
    } else {
      alert("패스워드를 다시 확인하여주세요.");
    }
  }
  return (
    <div>
      <div className={styles.join}>
        <div className={styles.joinPage}>
          <h1 className={styles.joinH1}>회원가입</h1>
          <h3>yeavve 계정으로 회원가입</h3>
          <form className={styles.joinForm} onSubmit={addUserInfo}>
            <input
              type="text"
              placeholder="아이디 주소 또는 아이디"
              maxLength="25"
              name="id"
            />
            <input
              type="password"
              placeholder="비밀번호"
              maxLength="15"
              name="password"
            />
            <input
              type="password"
              placeholder="비밀번호 확인"
              maxLength="15"
              name="passwordCheck"
            />
            <input
              type="submit"
              value="회원가입"
              className={styles.joinBtn}
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Join;
