import { useSelector } from "react-redux";

export const useApp = () => {
  const { employees } = useSelector((store) => store.test);
  return {
    employees,
  };
};
