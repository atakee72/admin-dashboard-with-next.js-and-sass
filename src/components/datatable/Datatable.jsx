import styles from "./datatable.module.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "@/datatablesource";
import Link from "next/link";
import { useState } from "react";

function Datatable() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((row) => row.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={styles.cellAction}>
            <Link href={"/single"} style={{ textDecoration: "none" }}>
              <div className={styles.viewButton}>View</div>
            </Link>
            <div
              className={styles.deleteButton}
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className={styles.datatable}>
      <div className={styles.datatableTitle}>
        Add New User
        <Link
          href={"/new_user"}
          className={styles.link}
          style={{ textDecoration: "none" }}
        >
          Add New
        </Link>
      </div>
      <DataGrid
        className={styles.dataGrid}
        rows={data}
        columns={userColumns.concat(actionColumn)}
        paginationModel={{ page: 0, pageSize: 9 }}
        checkboxSelection
      />
    </div>
  );
}

export default Datatable;
