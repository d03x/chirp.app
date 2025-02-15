import styles from "./styles/nav-item.module.scss";
import Link from "next/link";
import { ReactNode } from "react";

interface INavItem {
	text: string;
	icon?: ReactNode;
	href: string;
	isActive: boolean;
}
const NavItem = ({ text, icon, href, isActive }: INavItem) => {
	console.log(isActive);

	return (
		<Link
			aria-label="Menu Link"
			role="menu-link"
			className={styles.container}
			href={href}
		>
			<span>{icon}</span>
			<span>{text}</span>
		</Link>
	);
};
export default NavItem;
