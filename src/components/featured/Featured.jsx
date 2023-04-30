import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreVert,
} from "@mui/icons-material";
import styles from "./featured.module.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Featured() {
  return (
    <div className={styles.featured}>
      <div className={styles.top}>
        <h1 className={styles.title}>Total revenue</h1>
        <MoreVert fontSize="small" />
      </div>
      <div className={styles.bottom}>
        <div className={styles.featuredChart}>
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className={styles.title}>Total sales made today</p>
        <p className={styles.amount}>$420</p>
        <p className={styles.desc}>
          Processing previous transactions. Latest payments may not be included.
        </p>
        <div className={styles.summary}>
          <div className={styles.item}>
            <div className={styles.itemTitle}>Target</div>
            <div className={`${styles.itemResult} ${styles.negative}`}>
              <KeyboardArrowDown fontSize="small" />
              <div className={styles.resultAmount}>12.4K</div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.itemTitle}>Last Week</div>
            <div className={`${styles.itemResult} ${styles.positive}`}>
              <KeyboardArrowUp fontSize="small" />
              <div className={styles.resultAmount}>12.4K</div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.itemTitle}>Last Month</div>
            <div className={`${styles.itemResult} ${styles.positive}`}>
              <KeyboardArrowUp fontSize="small" />
              <div className={styles.resultAmount}>12.4K</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
