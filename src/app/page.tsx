import backgroundImage from "../../public/rooster-background.png";
import styles from "./page.module.css";
import Logo from "../../componnents/Logo/Logo";
import Portrait from "../../componnents/Portrait/Portrait";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Logo />
      </header>
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
        <Portrait />
      </main>
      <footer className={styles.footer}>©Kas Gaidys</footer>
    </div>
  );
}
