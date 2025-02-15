import { ReactNode } from "react";
import styles from "./styles/page-container.module.scss";
interface IPageContainerProps {
	children: ReactNode;
}
const PageContainer: React.FC<IPageContainerProps> = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};

export default PageContainer;
