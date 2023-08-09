import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useApp } from "./hook";
import EmployeesTable from "../components/EmployeesTable/EmployeesTable";
import Button from "../components/Button/Button";

export default function Home() {
  const { employees } = useApp();
  return (
    <div className={styles.container}>
      <div className="my-5">
        <h1 className="text-primary mt-5">Payroll software</h1>
        <div className="mt-3 d-flex justify-content-between">
          <p>This is the information about employees</p>
          <Button text={"Add new employee"} variant="btn-primary" />
        </div>
      </div>
      <div className={styles.table_container}>
        <div style={{ minWidth: "800px" }}>
          <EmployeesTable data={employees} />
        </div>
      </div>
    </div>
  );
}
