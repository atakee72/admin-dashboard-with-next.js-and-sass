import Layout from "@/components/layout/Layout";
import styles from "./list.module.scss";
import Datatable from "@/components/datatable/Datatable";

function List() {
  return (
    <Layout>
      <div className={styles.list}>
        <div className={styles.listContainer}>
          <Datatable />
        </div>
      </div>
    </Layout>
  );
}

export default List;
