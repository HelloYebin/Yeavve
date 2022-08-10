function BannerContent({ bannerNum, bannerTitle, name }) {
  return (
    <li>
      <a>
        <img
          src={`https://img.wavve.com/banner/pooq/2022/${bannerTitle}`}
          alt={`${name}`}
          width="1190px"
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
