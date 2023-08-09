import { addEmployed, setTest } from "../../slices/exampleSlice";

export const useUserActions = () => {
  const createUser =
    ({ data }) =>
    async (dispatch) => {
      try {
        console.log(data);
        dispatch(addEmployed({ data }));
      } catch (e) {
        console.log(e);
      }
    };
  return { createUser };
};
