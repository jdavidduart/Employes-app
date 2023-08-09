import Button from "../../components/Button/Button";
import styles from "./employeedetail.module.css";
import Link from "next/link";

export default function employeeDetailView() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href={"/"}>
          <a>
            <Button
              icon={"bi bi-arrow-left"}
              variant="btn-outline-primary"
              size="btn-sm"
            />
          </a>
        </Link>
        <h3 className="text-primary">Employee detail</h3>
      </div>
    </div>
  );
}
