import { Logo } from "@/features/sidebar";
import styles from "./styles/header.module.scss";
const Header : React.FC = ()=>{
    return <div className={styles.container}>
        <div className={styles.title}>
            <Logo/>
        </div>
        <p className={styles.subtitle}>Building the next generation of social media. Speak Freely.</p>
    </div>
}

export default Header;