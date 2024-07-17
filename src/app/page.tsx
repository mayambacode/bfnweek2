import Image from "next/image";
import styles from "./page.module.css";
import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className={styles.main}>
        <h1>Food Blog</h1>
        <p>Welcome to my food blog!</p>

        
            <Posts />
    </main>
  );
}
