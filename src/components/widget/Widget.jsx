import {
  AccountBalanceWalletOutlined,
  MonetizationOnOutlined,
  ShoppingCartCheckoutOutlined,
} from "@mui/icons-material";
import styles from "./widget.module.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

function Widget({ type }) {
  let data;

  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlineOutlinedIcon
            className={styles.icon}
            style={{ color: "crimson", backgroundColor: "rgb(255, 0, 0, 0.2)" }}
          />
        ),
      };
      break;
    default:
      break;

    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "See all orders",
        icon: (
          <ShoppingCartCheckoutOutlined
            className={styles.icon}
            style={{
              color: "goldenrod",
              backgroundColor: "rgb(218, 165, 32, 0.2)",
            }}
          />
        ),
      };
      break;

    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlined
            className={styles.icon}
            style={{ color: "green", backgroundColor: "rgb(0, 128, 0, 0.2)" }}
          />
        ),
      };
      break;

    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlined
            className={styles.icon}
            style={{
              color: "purple",
              backgroundColor: "rgb(128, 0, 128, 0.2)",
            }}
          />
        ),
      };
      break;
  }

  return (
    <div className={styles.widget}>
      <div className={styles.left}>
        <span className={styles.title}>{data.title}</span>
        <span className={styles.counter}>
          {data.isMoney && "$"} {amount}{" "}
        </span>
        <span className={styles.link}>{data.link}</span>
      </div>
      <div className={styles.right}>
        <div className={`${styles.percentage} ${styles.positive}`}>
          {" "}
          <KeyboardArrowUpOutlinedIcon />
          {diff}
        </div>
        {/* <PersonOutlineOutlinedIcon className={styles.icon} /> */}
        {data.icon}
      </div>
    </div>
  );
}

export default Widget;
