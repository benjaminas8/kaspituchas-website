import backgroundImage from "../../public/rooster-background.png";
import styles from "./page.module.css";
import Header from "../../componnents/Header/Header";
import Curtain from "../../componnents/Curtain/Curtain";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
        }}
        className={styles.main}
      >
        <Curtain />
      </main>
      <footer className={styles.footer}>©Kas Gaidys</footer>
    </div>
  );
}
