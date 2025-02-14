import Link from "next/link";
import styles from "./styles/logo.module.scss";
export default function Logo() {
	return (
		<h1 className={styles.container}>
			<Link href="/" aria-label="Logo" role="Logo" title="Chrip logo">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={256}
					height={256}
					viewBox="0 0 256 256"
				>
					<circle cx={128} cy={128} r={128} fill="#fc521f"></circle>
					<path
						fill="#fff"
						d="m158.16 187.016l-20.39-11.769l61.343-35.383a46 46 0 0 0 6.63-4.65c7.975 11.353 8.757 26.303 1.65 38.615a36.19 36.19 0 0 1-31.255 18.011a36 36 0 0 1-17.978-4.827zm-4.913 8.5a46 46 0 0 0 7.348 3.422c-5.857 12.57-18.42 20.72-32.652 20.72c-19.865 0-36.037-16.153-36.037-36.006V112.88l31.124 17.962v44.41a4.91 4.91 0 0 0 2.457 4.249zm-73.403-3.682a36.17 36.17 0 0 1-31.24-17.999a35.74 35.74 0 0 1-3.593-27.323a35.77 35.77 0 0 1 16.788-21.87l20.385-11.763l.003 70.76a46 46 0 0 0 .706 8.076c-1.014.08-2.035.12-3.05.12m79.324-87.458l-31.115 17.95l-38.496-22.202a4.93 4.93 0 0 0-4.91 0l-27.76 16.012a45 45 0 0 0-6.637 4.647c-7.968-11.35-8.747-26.303-1.646-38.615a36.19 36.19 0 0 1 31.252-18.014c6.279 0 12.496 1.674 17.978 4.833zm-31.225-68.035c19.875 0 36.038 16.154 36.038 36.016v23.526l-61.326-35.38a45.7 45.7 0 0 0-7.357-3.429c5.854-12.578 18.423-20.733 32.645-20.733M207.39 82.18c9.93 17.198 4.015 39.263-13.196 49.193l-61.335 35.38v-35.905l38.494-22.21a4.9 4.9 0 0 0 2.46-4.25v-32.03c0-2.704-.245-5.399-.71-8.054A36.18 36.18 0 0 1 207.39 82.18"
					></path>
				</svg>
			</Link>
		</h1>
	);
}
