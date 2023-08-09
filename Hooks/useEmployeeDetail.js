import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export const useEmployeeDetail = () => {
  const router = useRouter();
  const { employees } = useSelector((store) => store.test);
  const currentEmployee = employees.find(
    (e) => e.id.toString() === router.query.employeeId
  );

  return {
    currentEmployee,
  };
};
