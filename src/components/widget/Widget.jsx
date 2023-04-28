import styles from "./widget.module.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

function Widget() {
  return (
    <div className={styles.widget}>
      <div className={styles.left}>
        <span className={styles.title}>USERS</span>
        <span className={styles.counter}>242345</span>
        <span className={styles.link}>See all users</span>
      </div>
      <div className={styles.right}>
        <div className={styles.percentage}>
          <KeyboardArrowUpOutlinedIcon />
          20%
        </div>
        <PersonOutlineOutlinedIcon className={styles.icon} />
      </div>
    </div>
  );
}

export default Widget;
