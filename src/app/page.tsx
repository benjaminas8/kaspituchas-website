import styles from "./page.module.css";
import Logo from "../../componnents/Logo/Logo";
import Portrait from "../../componnents/Portrait/Portrait";

export default function Home() {

  return (
    <div className={styles.page}>
      <header className={styles.header}>
<Logo />
      </header>
      <main className={styles.main}>
        <Portrait />
      </main>
      <footer className={styles.footer}>©Kas Gaidys</footer>
    </div>
  );
}
