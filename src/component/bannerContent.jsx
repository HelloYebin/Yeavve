import styles from "../style/bannerContent.module.css";

function BannerContent({ bannerNum, bannerTitle, name }) {
  return (
    <li>
      <a>
        <img
          src={`https://img.wavve.com/banner/pooq/2022/${bannerTitle}`}
          alt={`${name}`}
        />
      </a>
      <img
        src={`https://img.wavve.com/banner/pooq/2022/${bannerNum}`}
        width="1190px;"
      />
    </li>
  );
}
export default BannerContent;
