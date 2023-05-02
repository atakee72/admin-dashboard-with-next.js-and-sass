import Image from "next/image";
import styles from "./new_user.module.scss";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { userInputs } from "@/formSource";
import { useState } from "react";

function NewUser() {
  const [file, setFile] = useState("");
  // console.log("🚀 ~ NewUser ~ file:", file);

  return (
    <div className={styles.new}>
      <div className={styles.newContainer}>
        <div className={styles.top}>
          <h1>Add New User</h1>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <Image
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="no user picc"
              width={100}
              height={100}
              className={styles.img}
            />
          </div>
          <div className={styles.right}>
            <form>
              <div className={styles.formInput}>
                <label htmlFor="file">
                  Upload image:{" "}
                  <DriveFolderUploadOutlined className={styles.icon} />
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>

              {userInputs.map((userInput, i) => (
                <div className={styles.formInput} key={i}>
                  <label>{userInput.label}</label>
                  <input
                    type={userInput.type}
                    placeholder={userInput.placeholder}
                  />
                </div>
              ))}

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewUser;
