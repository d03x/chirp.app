import HomeIcon from "@/assets/icons/HomeIcon";
import NavItem from "./nav-item";
import styles from "./styles/mobile-nav.module.scss";
import ExploreIcon from "@/assets/icons/ExploreIcon";
import UserIcon from "@/assets/icons/UserIcon";
import { GoBell } from "react-icons/go";
import ChatIcon from "@/assets/icons/ChatIcon";
export default function MobileNavbar() {
	return (
		<nav className={styles.container}>
			<NavItem text="Feed" href="/home" icon={<HomeIcon />} isActive={false} />
			<NavItem
				text="Explore"
				href="/explore"
				icon={<ExploreIcon />}
				isActive={false}
			/>
			<NavItem
				text="Notifikasi"
				href="/notif"
				icon={<GoBell />}
				isActive={false}
			/>
			<NavItem
				text="account"
				href="/chat"
				icon={<ChatIcon />}
				isActive={false}
			/>
		</nav>
	);
}
