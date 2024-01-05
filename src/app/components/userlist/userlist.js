import styles from "./userlist.module.css";
import User from "../user/user";

export default function Userlist({users}) {
  return (
    <div className={styles.userbox}>
      <ul>
        {users.map((user)=>
            <User user={user}/>
        )}
      </ul>
    </div>
  );
};
