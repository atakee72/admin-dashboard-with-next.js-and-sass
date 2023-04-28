import { MoreVert } from "@mui/icons-material";
import styles from "./featured.module.scss";

function Featured() {
  return (
    <div className={styles.featured}>
      <div className={styles.top}>
        <h1>Total revenue</h1>
        <MoreVert fontSize="small" />
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
}

export default Featured;
