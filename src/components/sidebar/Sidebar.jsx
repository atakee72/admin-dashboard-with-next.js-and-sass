import styles from "./sidebar.module.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import DvrOutlinedIcon from "@mui/icons-material/DvrOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import WebStoriesOutlinedIcon from "@mui/icons-material/WebStoriesOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import Link from "next/link";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <Link href={"/home"} style={{ textDecoration: "none" }}>
          <span className={styles.logo}>atakeedmin</span>
        </Link>
      </div>
      <hr />
      <div className={styles.center}>
        <ul>
          <p className={styles.title}>MAIN</p>
          <li>
            <DashboardIcon className={styles.icon} />
            <span>Dashboard</span>
          </li>
          <p className={styles.title}>LISTS</p>

          <li>
            <PersonOutlineOutlinedIcon className={styles.icon} />
            <Link href={"/list"} style={{ textDecoration: "none" }}>
              {" "}
              <span>Users</span>
            </Link>
          </li>
          <li>
            <InventoryOutlinedIcon className={styles.icon} />
            <span>Products</span>
          </li>
          <li>
            <DvrOutlinedIcon className={styles.icon} />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className={styles.icon} />
            <span>Delivery</span>
          </li>
          <p className={styles.title}>USEFUL</p>

          <li>
            <AssessmentOutlinedIcon className={styles.icon} />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsOutlinedIcon className={styles.icon} />
            <span>Notifications</span>
          </li>
          <p className={styles.title}>SERVICE</p>

          <li>
            <SettingsSystemDaydreamOutlinedIcon className={styles.icon} />
            <span>System Health</span>
          </li>
          <li>
            <WebStoriesOutlinedIcon className={styles.icon} />
            <span>Logs</span>
          </li>
          <li>
            <SettingsSuggestOutlinedIcon className={styles.icon} />
            <span>Settings</span>
          </li>
          <p className={styles.title}>USER</p>

          <li>
            <AccountBoxOutlinedIcon className={styles.icon} />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className={styles.icon} />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className={styles.bottom}>
        <div className={styles.colorOption}></div>
        <div className={styles.colorOption}></div>
      </div>
    </div>
  );
}

export default Sidebar;
