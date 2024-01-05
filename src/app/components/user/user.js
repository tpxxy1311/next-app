'use client'
import styles from "./user.module.css";

export default function User({user}) {
  return (
    <li className={styles.listitem}>
        <code onClick={()=>alert("Hi")}>{user.username}</code>
        <p>{user.firstName} {user.lastName}</p>
    </li>
  );
};
