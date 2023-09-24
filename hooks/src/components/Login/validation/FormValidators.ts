import Validation from "../interfaces/Validation";

const validateEmail = (email: string | undefined): Validation => {
  if (email) {
    return email.includes("@") ? Validation.VALID : Validation.INVALID;
  }
  return Validation.INVALID;
};

const validatePassword = (password: string | undefined): Validation => {
  if (password) {
    return password.length > 6 ? Validation.VALID : Validation.INVALID;
  }
  return Validation.INVALID;
};

export { validateEmail, validatePassword };
