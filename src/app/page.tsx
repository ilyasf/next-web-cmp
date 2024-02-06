import styles from "./page.module.css";
import { FooterReactWrapper } from "./components/footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Hello from my app</h1>
      </div>

      <div className={styles.center}>Central part</div>

      <FooterReactWrapper />
    </main>
  );
}
