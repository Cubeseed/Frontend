import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import loginoptions from "@assets/loginoptions.png";
import logo from "@assets/cubeseed.png";
import styles from "@/styles/loginpage.module.scss";

interface LoginFormProps {
  onSubmit: (email: string, password: string, rememberMe: boolean) => void;
  onForgotPassword: () => void;
}

const LoginPage: React.FC<LoginFormProps> = ({
  onSubmit,
  onForgotPassword,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const router = useRouter();

  const handleLogin = async () => {
    if (username === "") {
      setUserNameError("Please enter valid user name");
    } else {
      setUserNameError("");
    }

    if (password === "") {
      setPasswordError("Wrong password");
    } else {
      setPasswordError("");
    }

    try {
      const response = await fetch(
        "http://ec2-16-171-43-115.eu-north-1.compute.amazonaws.com:8000/api/auth/token/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      if (response.status === 200) {
        console.log("Login successful");
        if (username === "admin") {
          router.push("/moderator/users");
        } else {
          router.push("/dashboard/choose_course");
        }
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //onSubmit(email, password, rememberMe);
    handleLogin();
  };

  // const login = async (username: string, password: string) => {
  //   try {
  //     // api url
  //     const response = await fetch("http://localhost:8000/api/auth/token/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ username, password }),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       // Login successful
  //       // Redirect the user to the desired page or perform any other actions
  //       console.log("Login successful:", data);
  //     } else {
  //       // Login failed
  //       // Handle the error, e.g., show an error message to the user
  //       console.log("Login failed");
  //     }
  //   } catch (error) {
  //     // Handle network errors or other exceptions
  //     console.error("Login failed", error);
  //   }
  // };

  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.logincontainer}>
        <div className={styles.logo}>
          <Image src={logo} alt="Logo" className={styles.logoimg} />
        </div>
        <div className={styles.title}>
          <h1 className={styles.titletext}>Login</h1>
        </div>
        <form onSubmit={handleSubmit} className={styles.loginform}>
          <div className={styles.inputwrap}>
            <label className={styles.emaillabel}>Username:</label>

            <input
              className={styles.emailinput}
              type="text"
              value={username}
              onChange={handleEmailChange}
              required
            />
            {userNameError && (
              <div className={styles.emailerror}>{userNameError}</div>
            )}
          </div>

          <div className={styles.inputwrap}>
            <label className={styles.passwordlabel}>Password:</label>
            <input
              className={styles.passwordinput}
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {passwordError && (
              <div className={styles.passworderror}>{passwordError}</div>
            )}
          </div>

          <div className={styles.after_input}>
            <div className={styles.inputwrap_check}>
              <label className={styles.checklabel}>
                <input
                  className={styles.checkinput}
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                Remember me
              </label>
            </div>

            <div className={styles.forgotpassword}>
              <a
                href="#"
                onClick={onForgotPassword}
                className={styles.forgotlink}
              >
                Forgot password?
              </a>
            </div>
          </div>

          <a>
            <button
              className={styles.button}
              type="submit"
              onClick={handleLogin}
            >
              Login
            </button>
          </a>

          <div className={styles.line}>
            <hr />
          </div>

          <div className={styles.or}>OR</div>
          <div className={styles.loginoptions}>
            <Link href="/redirect_page/redirect-page">
              <Image
                src={loginoptions}
                alt="loginoptions"
                className={styles.optionsimg}
              />
            </Link>
          </div>

          <div className={styles.new}>
            <p className={styles.new_text}>New to CubeSeed? Get Started</p>
          </div>

          <div className={styles.links}>
            <a href="#help" className={styles.helplink}>
              Help
            </a>
            <a href="#privacy" className={styles.privacylink}>
              Privacy
            </a>
            <a href="#terms" className={styles.termslink}>
              Terms
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
