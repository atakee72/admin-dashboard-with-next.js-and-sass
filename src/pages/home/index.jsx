import Navbar from "@/components/navbar/Navbar";
import styles from "./home.module.scss";
import Sidebar from "@/components/sidebar/Sidebar";
import Widget from "@/components/widget/Widget";
import Featured from "@/components/featured/Featured";
import Chart from "@/components/chart/Chart";
import Table from "@/components/table/Table";

function Home() {
  return (
    <div className={styles.home}>
      {/* <Sidebar /> */}
      <div className={styles.homeContainer}>
        {/* <Navbar /> */}

        <div className={styles.widgets}>
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className={styles.charts}>
          <Featured />
          <Chart title=" Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className={styles.listContainer}>
          <div className={styles.listTitle}>Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Home;
