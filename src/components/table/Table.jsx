import styles from "./table.module.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";

function List() {
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];

  return (
    <TableContainer component={Paper} className={styles.table}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={styles.tableCell}>Tracking ID</TableCell>
            <TableCell className={styles.tableCell}>Product</TableCell>
            <TableCell className={styles.tableCell}>Customer</TableCell>
            <TableCell className={styles.tableCell}>Date</TableCell>
            <TableCell className={styles.tableCell}>Amount</TableCell>
            <TableCell className={styles.tableCell}>Payment Method</TableCell>
            <TableCell className={styles.tableCell}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className={styles.tableCell}> {row.id}</TableCell>
              <TableCell className={styles.tableCell}>
                <div className={styles.cellWrapper}>
                  <Image
                    src={row.img}
                    alt=""
                    className={styles.image}
                    width={32}
                    height={32}
                  />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className={styles.tableCell}>{row.customer}</TableCell>
              <TableCell className={styles.tableCell}> {row.date}</TableCell>
              <TableCell className={styles.tableCell}> {row.amount}</TableCell>
              <TableCell className={styles.tableCell}> {row.methods}</TableCell>
              <TableCell className={styles.tableCell}>
                <span
                  className={`${styles.status} ${styles[row.status]}`} //Wow!
                >
                  {row.status}
                </span>

                {/* {row.status} */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default List;
