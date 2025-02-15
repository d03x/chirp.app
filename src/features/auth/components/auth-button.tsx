import { IAuthButtonProps } from "../types/auth-button-interface";
import styles from "./styles/auth-button.module.scss";
export default function AuthButton(props: IAuthButtonProps) {
	return (
		<button className={styles.container} onClick={props.onClick}>
			{props.icon}
			<span>{props.text}</span>
		</button>
	);
}
