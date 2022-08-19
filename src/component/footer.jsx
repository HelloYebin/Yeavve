import styles from "../style/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className={styles.footer}>
      <hr />
      <div className={styles.notice}>
        <span>공지사항</span>
        <div className={styles.noticeBtn}>
          <button>
            <FontAwesomeIcon icon={faAngleLeft} className={styles.infoPrev} />
          </button>
          <button>
            <FontAwesomeIcon icon={faAngleLeft} className={styles.infoNext} />
          </button>
        </div>
      </div>
      <hr />
      <div className={styles.footerContainer}>
        <ul className={styles.footerLinks}>
          <li>회사소개</li>
          <li>인재채용</li>
          <li>서비스 소개</li>
          <li>이용약관</li>
          <li>
            <b>개인정보 처리방침</b>
          </li>
          <li>고객센터</li>
        </ul>
        <div className={styles.footerInfo}>
          <span>콘텐츠웨이브 주식회사</span>
          <span>대표이사 이태현</span>
          <span className={styles.infoLast}>
            고객센터 1599-3709 (평일 09:00~18:00 / 점심시간 12:00~13:00 / 주말
            및 공휴일 휴무)
          </span>
          <br />
          <span>사업자등록번호 220-88-38020</span>
          <span className={styles.infoLast}>
            호스팅서비스제공자 : 마이크로소프트 유한회사
          </span>
          <br />
          <span>통신판매업 신고번호 : 제 2021-서울영등포-0585호</span>
          <span className={styles.infoLast}>
            통신판매업 정보 공개 :
            http://www.ftc.go.kr/bizCommPop.do?wrkr_no=220-88-38020
          </span>
          <br />
          <span>서울특별시 영등포구 여의나루로 60 포스트타워 19층</span>
          <span className={styles.infoLast}>
            전자우편주소 : helpdesk@wavve.com
          </span>
          <br />
          <span className={styles.infoLast}>
            Copyright© 콘텐츠웨이브(주) All rights reserved
          </span>
        </div>
      </div>
    </div>
  );
}
export default Footer;
