import { useCallback, useState } from "react";
import { initialValue } from "./helper";
import produce from "immer";
import axios from "axios";
const useForm = () => {
  const [formData, setFormData] = useState(initialValue);

  const handleChange = useCallback(
    (e) => {
      const { value, name } = e.target;
      name === "agree"
        ? setFormData({
            ...formData,
            [name]: e.target.checked,
          })
        : setFormData({
            ...formData,
            [name]: value,
          });
    },
    [formData]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    let dataTosubmit = produce(formData, (draft) => {
      delete draft.agree;
    });
    try {
      await axios({
        method: "post",
        url: "https://api.whatspays.org/user/register",
        data: dataTosubmit,
      }).then((response) => {
        console.info("Response : ", response);
      });
    } catch (error) {
      console.error("Error: ", error);
    }
  };
  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
