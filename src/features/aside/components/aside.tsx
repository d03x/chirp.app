import AuthForm from "@/features/auth/components/auth-form";
import styles from "./styles/aside.module.scss";

const Aside = () => {
	return (
		<div className={styles.container}>
			<div className={styles["auth-card"]}>
				<AuthForm />
			</div>
		</div>
	);
};

export default Aside;
