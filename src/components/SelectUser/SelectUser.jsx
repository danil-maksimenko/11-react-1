import { useContext } from "react";
import styles from "./SelectUser.module.css";
import { UserContext } from "../../context/user.context";

function SelectUser() {
  const { userId, setUserId } = useContext(UserContext);

  const changeUser = (e) => {
    setUserId(Number(e.target.value));
  };

  return (
    <select
      className={styles["select"]}
      name="user"
      id="user"
      value={userId}
      onChange={changeUser}
    >
      <option value="1">Анна</option>
      <option value="2">Иван</option>
      <option value="2">Мария</option>
      <option value="2">Алексей</option>
    </select>
  );
}

export default SelectUser;
