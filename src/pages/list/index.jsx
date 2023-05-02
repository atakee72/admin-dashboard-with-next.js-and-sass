import Layout from "@/components/layout/Layout";
import styles from "./list.module.scss";
import Datatable from "@/components/datatable/Datatable";

function List() {
  return (
    <div className={styles.list}>
      <div className={styles.listContainer}>
        <Datatable />
      </div>
    </div>
  );
}

export default List;
