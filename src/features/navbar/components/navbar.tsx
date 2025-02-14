import styles from "./styles/navbar.module.scss";
import { NavItem } from "./nav-item";

import HomeIcon from "@/assets/icons/HomeIcon";
import ExploreIcon from "@/assets/icons/ExploreIcon";
import ReelsIcon from "@/assets/icons/ReelsIcon";
import ChatIcon from "@/assets/icons/ChatIcon";
import TrendsIcon from "@/assets/icons/TrendsIcon";
import UserIcon from "@/assets/icons/UserIcon";
import MoreIcon from "@/assets/icons/MoreIcon";
import FeedIcon from "@/assets/icons/FeedIcon";
const Navbar = () => {
	return (
		<nav className={styles.container}>
			<NavItem text="Home" href="/" icon={<HomeIcon />} isActive={false} />
			<NavItem
				text="Explore"
				href="/"
				icon={<ExploreIcon />}
				isActive={false}
			/>
			<NavItem text="Feed" href="/feed" icon={<FeedIcon />} isActive={false} />
			<NavItem text="Reels" href="/" icon={<ReelsIcon />} isActive={false} />
			<NavItem text="Message" href="/" icon={<ChatIcon />} isActive={false} />
			<NavItem text="Trending" href="/" icon={<TrendsIcon />} isActive={false} />
			<NavItem text="Profile" href="/" icon={<UserIcon />} isActive={false} />
			<NavItem text="More" href="/" icon={<MoreIcon />} isActive={false} />
		</nav>
	);
};

export default Navbar;
