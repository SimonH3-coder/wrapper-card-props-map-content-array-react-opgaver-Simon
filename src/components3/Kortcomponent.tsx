import style from "./Kortcomponent.module.css";

export function Kortcomponent({ title, textContent2, image, footerContent }) {
  return (
    <div className={style.kort}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{textContent2}</p>
      <footer>{footerContent}</footer>
    </div>
  );
}
