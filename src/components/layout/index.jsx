import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./layout.module.scss";

export default function Layout() {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  useEffect(() => {
    console.log(scrollTop);
  }, [scrollTop]);
  return (
    <header
      className={`${scrollTop > 1 ? styles.header__active : ""} ${
        styles.header
      }`}
    >
      <nav>
        <div className="container">
          <div className={styles.header_flex}>
            <div className={styles.header_brandLogo}>
              <Link to="/">
                <img src={logo} alt="Luftborn logo" className="img-fluid" />
              </Link>
            </div>
            <ul className={styles.header_list}>
              <li className={styles.header_list_item}>
                <Link to="/service">Service</Link>
              </li>
              <li className={styles.header_list_item}>
                <Link to="/career">Career</Link>
              </li>
              <li className={styles.header_list_item}>
                <Link to="/about-us">About us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
