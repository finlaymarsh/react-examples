import ValidationError from "@/src/interfaces/ValidationError";

export const AGE_ERROR: ValidationError = {
  title: "Invalid age!",
  message: "Please enter a valid age (> 0).",
};
