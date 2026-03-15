import style from "./Header.module.css";
import toasterHero from "../../assets/toaster-hero.png";

function Header() {
  return (
    <header className={style.header}>
      <h1>Toast Playground</h1>
      <img src={toasterHero} alt="toaster image" className={style.heroImage} />
    </header>
  );
}
export default Header;
