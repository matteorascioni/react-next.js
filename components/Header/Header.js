import Link from "next/link";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      {/* Logo */}
      <div className={styles.logo}>React Meetups</div>
      <nav>
        {/* List */}
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href="/">
              All Meetups
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/new-meetup">
              Add New Meetup
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
