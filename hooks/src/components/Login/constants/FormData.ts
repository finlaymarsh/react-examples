import Validation from "../interfaces/Validation";
import FormData from "../interfaces/FormData";

const INITIAL_FORM_DATA: FormData = {
  email: {
    value: "",
    validity: Validation.PENDING,
  },
  password: {
    value: "",
    validity: Validation.PENDING,
  },
  enableSubmit: false,
};

export default INITIAL_FORM_DATA;
