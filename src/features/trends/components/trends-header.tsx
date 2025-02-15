import Link from "next/link";
import styles from "./styles/trends-header.module.scss"
export default function TrendsHeader() {
  return (
    <div role="header" className={styles.container}>
      <h1 className={styles.title}>Trends</h1>
      <Link className={styles['show-more']} href={"/hastags/trends"}>Show All</Link>
    </div>
  );
}
