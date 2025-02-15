import styles from "./styles/not-found.module.scss";
export default function NotFound() {
	return (
		<div className={styles.container}>
			<h1>Hmm...this page doesn’t exist. Try searching for something else.</h1>
			<button>Back</button>
		</div>
	);
}
