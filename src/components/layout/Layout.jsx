// import { useRouter } from "next/router";     // I am leaving all these comments below because they give solutions to other cases..
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";
import styles from "./layout.module.scss";

export default function Layout({
  children,
  // page
}) {
  //   const router = useRouter();
  //   const fileName = router.pathname.substring(1).toLowerCase(); // using router object's pathname property and cutting the slash off!!
  // const fileName = page.toLowerCase();

  return (
    <div className={styles.page}>
      <Sidebar />
      <div className={styles.pageContainer}>
        <Navbar />
        {children}
      </div>
    </div>
  );
}
