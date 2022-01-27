/* eslint-disable @next/next/no-html-link-for-pages */
import { useEffect, useState } from "react";
import styles from "./navbar.module.css";

import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [username, setUsername] = useState("hashbaterdene@gmail.com");
  const [didToken, setDidToken] = useState("");
  const router = useRouter();

  const handleOnClickHome = (e: any) => {
    e.preventDefault();
    router.push("/");
  };

  const handleOnClickMyList = (e: any) => {
    e.preventDefault();
    router.push("/browse/my-list");
  };

  const handleShowDropdown = (e: any) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  const handleSignout = async (e: any) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <a className={styles.logoLink} href="/">
          <div className={styles.logoWrapper}>
            <Image
              src="/static/netflix.svg"
              alt="Netflix logo"
              width="128px"
              height="34px"
            />
          </div>
        </a>

        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleOnClickMyList}>
            My List
          </li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleShowDropdown}>
              <p className={styles.username}>{username}</p>
              {/** Expand more icon */}
              <Image
                src={"/static/expand_more.svg"}
                alt="Expand dropdown"
                width="24px"
                height="24px"
              />
            </button>

            {showDropdown && (
              <div className={styles.navDropdown}>
                <div>
                  <a className={styles.linkName} onClick={handleSignout}>
                    Sign out
                  </a>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
