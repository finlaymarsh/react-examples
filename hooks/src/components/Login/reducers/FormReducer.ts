import Action from "../actions/Action";
import ActionType from "../actions/ActionType";
import { validateEmail, validatePassword } from "../validation/FormValidators";
import FormData from "../interfaces/FormData";
import Validation from "../interfaces/Validation";

const formReducer = (state: FormData, action: Action): FormData => {
  switch (action.type) {
    case ActionType.EMAIL_USER_INPUT:
      return {
        email: {
          value: action.value ? action.value : "",
          validity: validateEmail(action.value),
        },
        password: state.password,
        enableSubmit:
          validateEmail(action.value) === Validation.VALID &&
          validatePassword(state.password.value) === Validation.VALID,
      };
    case ActionType.EMAIL_INPUT_BLUR:
      return {
        email: {
          value: state.email.value,
          validity: validateEmail(state.email.value),
        },
        password: state.password,
        enableSubmit:
          validateEmail(state.email.value) === Validation.VALID &&
          validatePassword(state.password.value) === Validation.VALID,
      };
    case ActionType.PASSWORD_USER_INPUT:
      return {
        email: state.email,
        password: {
          value: action.value ? action.value : "",
          validity: validatePassword(action.value),
        },
        enableSubmit:
          validateEmail(state.email.value) === Validation.VALID &&
          validatePassword(action.value) === Validation.VALID,
      };
    case ActionType.PASSWORD_INPUT_BLUR:
      return {
        email: state.email,
        password: {
          value: state.password.value,
          validity: validatePassword(state.password.value),
        },
        enableSubmit:
          validateEmail(state.email.value) === Validation.VALID &&
          validatePassword(state.password.value) === Validation.VALID,
      };
  }
};

export default formReducer;
