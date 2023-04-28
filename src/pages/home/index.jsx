import Navbar from "@/components/navbar/Navbar";
import styles from "./home.module.scss";
import Sidebar from "@/components/sidebar/Sidebar";
import Widget from "@/components/widget/Widget";

function Home() {
  return (
    <div className={styles.home}>
      <Sidebar />
      <div className={styles.homeContainer}>
        <Navbar />

        <div className={styles.widgets}>
          <Widget />
          <Widget />
          <Widget />
          <Widget />
        </div>
      </div>
    </div>
  );
}

export default Home;
