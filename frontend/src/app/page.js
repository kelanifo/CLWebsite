import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.navbar}>
        <div className={styles.navSubcontainer}>
          <Image 
            src="/cl_logo.png"
            width={15}
            height={15}
          />
          <h1 className={styles.title}>Creative Labs</h1>
        </div>
        <div className={styles.carouselBody}>

        </div>
      </div>  
    </main>
  );
}
