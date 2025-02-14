import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import AuthButton from "./auth-button";
import styles from "./styles/auth-form.module.scss";
import dynamic from "next/dynamic";

const AuthBtn = dynamic(() => import("./auth-button"), {
  loading: () => <h1>Loading</h1>,
});
export default function AuthForm() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>New to Chirp?</h3>
      <div className={styles.desc}>
        Sign up now to get your own personalized timeline!
      </div>
      <div className={styles.buttons}>
        <AuthBtn text="Login dengan Google" icon={<BsGoogle />} />
        <AuthBtn text="Login dengan Facebook" icon={<BsFacebook />} />
      </div>
      <div className={styles.terms}>
        By signing up, you agree to the <a href="/">Terms of Service</a> and{" "}
        <a href="/">Privacy Policy</a>, including <a href="/">Cookie Use</a>.
      </div>
    </div>
  );
}
