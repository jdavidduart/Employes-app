import { useState } from "react";
import { useSelector } from "react-redux";

export const useApp = () => {
  const { employees } = useSelector((store) => store.test);
  const [openAddEdit, setOpenAddEdit] = useState(true);
  return {
    employees,
    openAddEdit,
    setOpenAddEdit,
  };
};
