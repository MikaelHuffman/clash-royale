import "../css/Cards.css";

const ImageCard = ({ src, alt, children, href }) => {
  const content = (
    <>
      <img src={src} alt={alt} />
      {children && <p>{children}</p>}
    </>
  );

  return <div className="image-card">{href ? <a href={href}>{content}</a> : content}</div>;
};

export default ImageCard;