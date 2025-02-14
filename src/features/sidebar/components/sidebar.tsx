import { Navbar } from "@/features/navbar";
import Logo from "./logo";
import styles from "./styles/sidebar.module.scss";
import Link from "next/link";
export default function Sidebar() {
	return (
		<header className={styles.container}>
			<div className={styles.logo}>
				<Logo />
			</div>
			<div className={styles.navbar}>
				<Navbar />
			</div>
			<div className={styles.footer}>
				<div className={styles.decription}>
					<Link href={"#"}>Terms Of Service</Link>
					<Link href={"#"}>Privacy And policy</Link>
					<Link href={"#"}>Aksebilitas</Link>
					<Link href={"#"}>Info Iklan</Link>
					<Link href={"#"}>&copy;2025 Dadan Dev</Link>
				</div>
			</div>
		</header>
	);
}
