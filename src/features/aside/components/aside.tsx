import styles from "./styles/navbar.module.scss";

const Aside = () => {
	return (
		<div className={styles.container}>
			<div className={styles["auth-card"]}>Log in or sign up for Threads</div>
		</div>
	);
};

export default Aside;
