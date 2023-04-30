import styles from "./datatable.module.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "@/datatablesource";

function Datatable() {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className={styles.cellAction}>
            <div className={styles.viewButton}>View</div>
            <div className={styles.deleteButton}>Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className={styles.datatable}>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        paginationModel={{ page: 0, pageSize: 5 }}
        checkboxSelection
      />
    </div>
  );
}

export default Datatable;
