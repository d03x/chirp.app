import styles from "./styles/navbar.module.scss";
import Link from "next/link";
import { ReactNode } from "react";

interface INavItem {
	text: string;
	icon?: ReactNode;
	href: string;
	isActive: boolean;
}
export const NavItem = ({ text, icon, href, isActive }: INavItem) => {
	return (
		<Link className={styles["nav-item"]} href={href}>
			<span>{icon}</span>
			<span>{text}</span>
		</Link>
	);
};
