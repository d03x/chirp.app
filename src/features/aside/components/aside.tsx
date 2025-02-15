"use client";
import AuthForm from "@/features/auth/components/auth-form";
import styles from "./styles/aside.module.scss";
import { Trends } from "@/features/trends";
import TrendsHeader from "@/features/trends/components/trends-header";

const Aside = () => {
  const isAuthenticated = false;
  return (
    <div className={styles.container}>
      <div className={styles["auth-card"]}>
        {!isAuthenticated && <AuthForm />}
      </div>
      <div className={styles.trends}>
        <TrendsHeader />
        <Trends get={5} />
      </div>
    </div>
  );
};

export default Aside;
