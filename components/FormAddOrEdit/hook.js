import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { useUserActions } from "../../redux/actions/exampleAction";
export const useFormAddOrEdit = () => {
  const { createUser } = useUserActions();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    let newUser = { ...data, id: v4() };
    dispatch(createUser({ data: newUser }));
  };
  return {
    onSubmit,
  };
};
