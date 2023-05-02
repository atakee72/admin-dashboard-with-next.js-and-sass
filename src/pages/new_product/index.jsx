import Image from "next/image";
import styles from "./new_product.module.scss";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { productInputs } from "@/formSource";

function NewProduct() {
  return (
    <div className={styles.new}>
      <div className={styles.newContainer}>
        <div className={styles.top}>
          <h1>Add New Product</h1>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <Image
              src={
                "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="no product picc"
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
                <input type="file" id="file" style={{ display: "none" }} />
              </div>

              {productInputs.map((productInput, i) => (
                <div className={styles.formInput} key={i}>
                  <label>{productInput.label}</label>
                  <input
                    type={productInput.type}
                    placeholder={productInput.placeholder}
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

export default NewProduct;
