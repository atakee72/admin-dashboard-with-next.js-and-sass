import Image from "next/image";
import styles from "./single.module.scss";
import Chart from "@/components/chart/Chart";
import List from "../../components/table/Table";

function Single() {
  return (
    <div className={styles.single}>
      <div className={styles.singleContainer}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.editButton}>Edit</div>
            <h1 className={styles.title}>Information</h1>
            <div className={styles.item}>
              <Image
                className={styles.itemImg}
                alt="item image"
                src={
                  "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                }
                width={100}
                height={100}
              />
              <div className={styles.details}>
                <h1 className={styles.itemTitle}>Jane Doe</h1>
                <div className={styles.detailItem}>
                  <span className={styles.itemKey}>Email</span>
                  <span className={styles.itemValue}>janedoe@gmail.com</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.itemKey}>Phone</span>
                  <span className={styles.itemValue}>234345324534</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.itemKey}>Address</span>
                  <span className={styles.itemValue}>Einsteinstr. 23</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.itemKey}>Country</span>
                  <span className={styles.itemValue}>OrasiBurasi</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
          </div>
        </div>
        <div className={styles.bottom}>
          <h1 className={styles.title}>Last Transactions</h1>

          <List />
        </div>
      </div>
    </div>
  );
}

export default Single;
